<template>
  <!-- Donate Section -->
  <section class="donate" id="donate">
    <div class="wrap">
      <h2>{{ t('donate.heading') }}</h2>
      <p>{{ t('donate.text') }}</p>
      <button class="btn" @click="openModal">{{ t('donate.btn') }}</button>
    </div>
  </section>

  <!-- Modal Overlay -->
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="dm-overlay" @click.self="closeModal" role="dialog" aria-modal="true" aria-label="Secure donation">
        <Transition name="slide-up">
          <div v-if="isOpen" class="dm-card">
            <!-- Close -->
            <button class="dm-close" @click="closeModal" aria-label="Close">✕</button>

            <!-- Header -->
            <div class="dm-header">
              <span class="dm-shield" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </span>
              <h2 class="dm-title">Secure donation</h2>
            </div>

            <!-- Frequency Toggle -->
            <div class="dm-toggle" role="group" aria-label="Donation frequency">
              <button
                :class="['dm-freq', { active: frequency === 'once' }]"
                @click="frequency = 'once'"
              >Give once</button>
              <button
                :class="['dm-freq', { active: frequency === 'monthly' }]"
                @click="frequency = 'monthly'"
              >
                Monthly
              </button>
            </div>

            <!-- Preset Amounts -->
            <div class="dm-presets" role="group" aria-label="Select amount">
              <button
                v-for="amount in presets"
                :key="amount"
                :class="['dm-preset', { active: selectedAmount === amount }]"
                @click="selectPreset(amount)"
              >
                {{ displayLabel(amount) }}
              </button>
            </div>

            <!-- Custom Amount Input -->
            <div class="dm-amount-wrap">
              <span class="dm-currency-symbol">{{ symbol }}</span>
              <input
                class="dm-amount-input"
                type="text"
                :value="formatAmount(customAmount)"
                @input="onCustomInput"
                aria-label="Custom donation amount"
              />
              <div class="dm-currency-select">
                <select v-model="currency" aria-label="Currency">
                  <option value="KHR">KHR</option>
                  <option value="USD">USD</option>
                </select>
                <span class="dm-chevron" aria-hidden="true">▾</span>
              </div>
            </div>

            <!-- Payment Buttons -->
            <div class="dm-actions">
              <button class="dm-gpay">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="12" fill="#fff"/>
                  <text x="12" y="16.5" text-anchor="middle" font-size="10" font-family="Arial" font-weight="700">
                    <tspan fill="#4285F4">G</tspan>
                  </text>
                </svg>
                <span style="color:#fff;font-size:16px;font-weight:500;letter-spacing:0.02em">
                  <span style="color:#4285F4">G</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">o</span><span style="color:#4285F4">g</span><span style="color:#34A853">l</span><span style="color:#EA4335">e</span>
                  &nbsp;Pay
                </span>
              </button>
              <button class="dm-donate-btn">Donate</button>
            </div>

            <!-- Payment Icons -->
            <div class="dm-pay-icons" aria-label="Accepted payment methods">
              <svg width="38" height="24" viewBox="0 0 38 24" aria-label="Visa">
                <rect width="38" height="24" rx="4" fill="#1A1F71"/>
                <text x="19" y="17" text-anchor="middle" font-size="11" font-family="Arial" font-weight="700" fill="white">VISA</text>
              </svg>
              <svg width="38" height="24" viewBox="0 0 38 24" aria-label="Mastercard">
                <rect width="38" height="24" rx="4" fill="#EB001B"/>
                <circle cx="14" cy="12" r="8" fill="#EB001B"/>
                <circle cx="24" cy="12" r="8" fill="#F79E1B"/>
                <path d="M19 5.9a8 8 0 0 1 0 12.2A8 8 0 0 1 19 5.9z" fill="#FF5F00"/>
              </svg>
              <svg width="38" height="24" viewBox="0 0 38 24" aria-label="American Express">
                <rect width="38" height="24" rx="4" fill="#2E77BC"/>
                <text x="19" y="17" text-anchor="middle" font-size="8" font-family="Arial" font-weight="700" fill="white">AMEX</text>
              </svg>
              <svg width="38" height="24" viewBox="0 0 38 24" aria-label="Discover">
                <rect width="38" height="24" rx="4" fill="#fff" stroke="#ddd" stroke-width="1"/>
                <circle cx="24" cy="12" r="8" fill="#F76F20"/>
                <text x="10" y="16" font-size="7" font-family="Arial" font-weight="700" fill="#231F20">DIS</text>
              </svg>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isOpen   = ref(false)
const frequency = ref('monthly') // 'once' | 'monthly'
const currency  = ref('KHR')

// ── Per-currency config ──────────────────────────────────────
const currencyConfig = {
  KHR: {
    symbol:  '៛',
    presets: [80000, 120000, 200000, 400000, 500000, 600000],
    default: 200000,
    label:   (n) => n >= 1000 ? `៛${n / 1000}K` : `៛${n}`,
    format:  (n) => n.toLocaleString(),
  },
  USD: {
    symbol:  '$',
    presets: [5, 10, 25, 50, 100, 200],
    default: 25,
    label:   (n) => `$${n}`,
    format:  (n) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  },
}

// ── Reactive derived values ───────────────────────────────────
const config        = computed(() => currencyConfig[currency.value])
const presets       = computed(() => config.value.presets)
const symbol        = computed(() => config.value.symbol)
const selectedAmount = ref(currencyConfig.KHR.default)
const customAmount   = ref(currencyConfig.KHR.default)

// When currency changes → reset to that currency's default amount
watch(currency, (cur) => {
  selectedAmount.value = currencyConfig[cur].default
  customAmount.value   = currencyConfig[cur].default
})

// ── Helpers ───────────────────────────────────────────────────
function selectPreset(amount) {
  selectedAmount.value = amount
  customAmount.value   = amount
}

function onCustomInput(e) {
  const raw = e.target.value.replace(/[^0-9.]/g, '')
  const val = parseFloat(raw)
  if (!isNaN(val)) {
    customAmount.value   = val
    selectedAmount.value = presets.value.includes(val) ? val : null
  }
}

const displayLabel  = (n) => config.value.label(n)
const formatAmount  = (n) => config.value.format(n)

// ── Modal open / close ────────────────────────────────────────
function openModal()  { isOpen.value = true;  document.body.style.overflow = 'hidden' }
function closeModal() { isOpen.value = false; document.body.style.overflow = '' }

function onKeydown(e) {
  if (e.key === 'Escape' && isOpen.value) closeModal()
}
onMounted(()   => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
/* ── Modal Overlay ── */
.dm-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.45);
  backdrop-filter: blur(3px);
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

/* ── Card ── */
.dm-card {
  position: relative;
  background: #fff;
  border-radius: 24px;
  padding: 32px 28px 24px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 24px 64px rgba(0,0,0,.22);
}

/* ── Close ── */
.dm-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #888;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .15s;
}
.dm-close:hover { background: #f0f0f0; }

/* ── Header ── */
.dm-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
}
.dm-shield { color: #2E77BC; display: flex; }
.dm-title {
  font-family: system-ui, sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: #14213d;
  letter-spacing: -0.01em;
}

/* ── Frequency Toggle ── */
.dm-toggle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f4f4f6;
  border-radius: 12px;
  padding: 4px;
  margin-bottom: 20px;
  gap: 4px;
}
.dm-freq {
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 9px;
  background: transparent;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  color: #555;
  transition: all .18s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.dm-freq.active {
  background: #fff;
  border-color: #6b7cf6;
  color: #14213d;
  font-weight: 600;
  box-shadow: 0 1px 4px rgba(0,0,0,.08);
}
.dm-heart { font-size: 14px; }

/* ── Presets ── */
.dm-presets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 16px;
}
.dm-preset {
  padding: 12px 8px;
  border: 1.5px solid #dde0ea;
  border-radius: 10px;
  background: #fff;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  color: #14213d;
  transition: all .16s;
}
.dm-preset:hover { border-color: #6b7cf6; }
.dm-preset.active {
  border-color: #6b7cf6;
  border-width: 2px;
  background: #f0f1ff;
  color: #3a4cc0;
  font-weight: 700;
}

/* ── Custom Amount ── */
.dm-amount-wrap {
  display: flex;
  align-items: center;
  border: 1.5px solid #dde0ea;
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 20px;
  background: #fff;
  gap: 6px;
}
.dm-currency-symbol {
  font-size: 20px;
  font-weight: 600;
  color: #14213d;
  flex-shrink: 0;
}
.dm-amount-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 22px;
  font-weight: 600;
  color: #14213d;
  background: transparent;
  min-width: 0;
}
.dm-currency-select {
  display: flex;
  align-items: center;
  gap: 2px;
  color: #777;
  font-size: 14px;
  font-weight: 500;
  position: relative;
}
.dm-currency-select select {
  appearance: none;
  border: none;
  outline: none;
  background: transparent;
  font: inherit;
  color: #555;
  cursor: pointer;
  padding-right: 14px;
}
.dm-chevron { font-size: 11px; pointer-events: none; }

/* ── Actions ── */
.dm-actions { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }

.dm-gpay {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #000;
  border: none;
  border-radius: 12px;
  padding: 14px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: opacity .15s;
}
.dm-gpay:hover { opacity: .88; }

.dm-donate-btn {
  background: #5b6ef5;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: filter .15s;
  letter-spacing: 0.01em;
}
.dm-donate-btn:hover { filter: brightness(1.1); }

/* ── Payment Icons ── */
.dm-pay-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

/* ── Transitions ── */
.fade-enter-active, .fade-leave-active { transition: opacity .22s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-up-enter-active { transition: transform .28s cubic-bezier(.2,.8,.2,1), opacity .22s ease; }
.slide-up-leave-active { transition: transform .2s ease, opacity .18s ease; }
.slide-up-enter-from { transform: translateY(32px); opacity: 0; }
.slide-up-leave-to { transform: translateY(16px); opacity: 0; }
</style>
