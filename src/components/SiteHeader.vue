<template>
  <header class="site">
    <div class="wrap">
      <router-link class="brand" to="/" :aria-label="`${siteName} home`">
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="22" r="9" fill="#f2b632"/>
          <path d="M2 30h36M7 36h26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        </svg>
        SOTHEARITH FOUNDATION
      </router-link>

      <button
        class="menu-toggle"
        :class="{ 'is-open': open }"
        :aria-expanded="open"
        aria-controls="primary-nav"
        aria-label="Menu"
        @click="open = !open"
      >
        <!-- Three lines (☰); the lines turn into ✕ when the menu is open -->
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav id="primary-nav" aria-label="Primary" :class="{ open }" @click="open = false">
        <ul>
          <li><router-link to="/#visit">{{ t('nav.visit') }}</router-link></li>
          <li><router-link to="/#stories">{{ t('nav.stories') }}</router-link></li>
          <li><router-link to="/mission" class="nav-mission-link">{{ t('nav.mission') }}</router-link></li>
          <li><router-link to="/#programs">{{ t('nav.programs') }}</router-link></li>
          <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>

      
          <li class="lang-dropdown" @click.stop>
            <button
              class="lang-trigger"
              @click="toggleLangDropdown"
              aria-haspopup="true"
              :aria-expanded="langDropdownOpen"
              type="button"
            >
              <span class="flag-icon">{{ currentLang.flag }}</span>
              <span>{{ currentLang.label }}</span>
              <svg class="chevron" :class="{ rotate: langDropdownOpen }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <Transition name="drop">
              <ul v-if="langDropdownOpen" class="lang-menu" role="menu">
                <li v-for="lang in languages" :key="lang.code" role="none">
                  <button
                    class="lang-option"
                    :class="{ selected: currentLang.code === lang.code }"
                    @click="selectLanguage(lang)"
                    role="menuitem"
                    type="button"
                  >
                    <span class="flag">{{ lang.flag }}</span>
                    <strong class="lang-code">{{ lang.label }}</strong>
                    <span class="lang-fullname">{{ lang.name }}</span>
                    <span v-if="currentLang.code === lang.code" class="check">✓</span>
                  </button>
                </li>
              </ul>
            </Transition>
          </li>
        </ul>
      </nav>

      <router-link class="btn header-cta" to="/donate">{{ t('nav.donate') }}</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { siteName } from '../data/content.js'

const { t, locale } = useI18n()
const open = ref(false)
const langDropdownOpen = ref(false)

const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'km', label: 'KH', name: 'ភាសាខ្មែរ' },
  { code: 'zh', label: 'CN', name: '中文' },
]

const currentLang = computed(() => {
  return languages.find(l => l.code === locale.value) || languages[0]
})

function toggleLangDropdown() {
  langDropdownOpen.value = !langDropdownOpen.value
}

function selectLanguage(lang) {
  locale.value = lang.code
  localStorage.setItem('locale', lang.code)
  langDropdownOpen.value = false
}

// Close dropdown when clicking outside
function handleClickOutside(e) {
  const dropdown = document.querySelector('.lang-dropdown')
  if (dropdown && !dropdown.contains(e.target)) {
    langDropdownOpen.value = false
  }
}

onMounted(() => window.addEventListener('click', handleClickOutside))
onUnmounted(() => window.removeEventListener('click', handleClickOutside))
</script>

<style scoped>
/* Drawer icon: display is controlled in layout.css (shown only on small screens) */
.menu-toggle {
  position: relative;
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: 10px;
}

.menu-toggle .bar {
  position: absolute;
  left: 11px;
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transition: transform 0.25s ease, opacity 0.2s ease, top 0.25s ease;
}

.menu-toggle .bar:nth-child(1) { top: 14px; }
.menu-toggle .bar:nth-child(2) { top: 20px; }
.menu-toggle .bar:nth-child(3) { top: 26px; }

.menu-toggle.is-open .bar:nth-child(1) { top: 20px; transform: rotate(45deg); }
.menu-toggle.is-open .bar:nth-child(2) { opacity: 0; }
.menu-toggle.is-open .bar:nth-child(3) { top: 20px; transform: rotate(-45deg); }

.lang-dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.lang-trigger {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--ink);
  font: inherit;
  font-size: 15px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lang-trigger:hover {
  background: var(--sky);
  border-color: var(--ink);
}

.flag-icon {
  font-size: 15px;
}

.chevron {
  transition: transform 0.2s ease;
}

.chevron.rotate {
  transform: rotate(180deg);
}

.lang-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  min-width: 175px;
  padding: 6px;
  list-style: none;
  margin: 0;
  z-index: 100;
}

.lang-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: var(--ink);
  font: inherit;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease;
}

.lang-code {
  font-size: 13px;
  background: var(--sky);
  padding: 2px 6px;
  border-radius: 6px;
}

.lang-fullname {
  font-size: 13px;
  color: var(--muted);
}

.lang-option:hover {
  background: var(--sky);
}

.lang-option.selected {
  font-weight: 600;
  color: var(--leaf);
}

.flag {
  font-size: 16px;
}

.check {
  margin-left: auto;
  font-size: 12px;
}

/* Dropdown Animation */
.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 860px) {
  .lang-menu {
    position: static;
    box-shadow: none;
    border: 1px solid var(--line);
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
  }
}
</style>