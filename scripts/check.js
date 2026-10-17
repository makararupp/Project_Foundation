// Project checks: run with `npm run check` after making changes.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { execSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'

const LOCALES = ['en', 'km', 'zh']
const errors = []

const flatten = (obj, prefix = '') =>
  Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === 'object' ? flatten(v, `${prefix}${k}.`) : [`${prefix}${k}`]
  )

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })

const messages = {}
for (const lang of LOCALES) {
  messages[lang] = (await import(pathToFileURL(`src/locales/${lang}.js`).href)).default
}
const keys = Object.fromEntries(LOCALES.map((l) => [l, new Set(flatten(messages[l]))]))

// 1. Every locale has the same keys as English
for (const lang of LOCALES.slice(1)) {
  for (const k of keys.en) if (!keys[lang].has(k)) errors.push(`[locales] "${k}" is missing in ${lang}.js`)
  for (const k of keys[lang]) if (!keys.en.has(k)) errors.push(`[locales] "${k}" is in ${lang}.js but not in en.js`)
}

const sourceFiles = walk('src').filter((f) => /\.(vue|js)$/.test(f) && !f.includes('locales'))

for (const file of sourceFiles) {
  const code = readFileSync(file, 'utf8')
  const name = relative('.', file)

  // 2. Every static t('key') used in code exists in en.js
  for (const [, key] of code.matchAll(/\bt\(\s*'([^']+)'/g)) {
    if (!keys.en.has(key)) errors.push(`[keys] ${name} uses "${key}", which is not in en.js`)
  }

  // 4. Vue files that call t() must set up useI18n
  if (file.endsWith('.vue') && /\bt\(/.test(code) && !/useI18n\(\)/.test(code)) {
    errors.push(`[i18n] ${name} calls t() but has no useI18n() in <script setup>`)
  }
}

// 3. Every milestone in MissionView has its required text in every language
const missionView = readFileSync('src/views/MissionView.vue', 'utf8')
for (const [, id] of missionView.matchAll(/id:\s*'(m\d+)'/g)) {
  for (const lang of LOCALES) {
    for (const field of ['subtitle', 'p1']) {
      if (!keys[lang].has(`mission.milestones.${id}.${field}`)) {
        errors.push(`[milestones] ${id} is missing "${field}" in ${lang}.js`)
      }
    }
  }
}

// 5. Production build succeeds
if (!errors.length) {
  try {
    execSync('npx vite build', { stdio: 'pipe' })
  } catch (e) {
    errors.push(`[build] vite build failed:\n${e.stdout}${e.stderr}`)
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s) found:\n`)
  for (const e of errors) console.error('  - ' + e)
  process.exit(1)
}
console.log('✓ All checks passed: locales match, keys exist, milestones complete, build OK')
