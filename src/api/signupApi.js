// Sign-up "API". Static mode: saves sign-ups in this browser's localStorage.
// To use a real backend later, replace the body of `signup()` with a fetch() call
// that returns the same result shape: { ok: true } or { ok: false, error: 'duplicate' }.

const STORAGE_KEY = 'signups'
const FAKE_DELAY_MS = 600

function readAll() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

export async function signup(data) {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS))

  const all = readAll()
  const email = data.email.trim().toLowerCase()
  if (all.some((s) => s.email === email)) {
    return { ok: false, error: 'duplicate' }
  }

  all.push({ ...data, email, createdAt: new Date().toISOString() })
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  } catch {
    // Storage blocked (e.g. private mode): still treat the demo sign-up as successful
  }
  return { ok: true }
}
