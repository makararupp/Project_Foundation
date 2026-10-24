<template>
  <section class="signup" id="signup">
    <div class="wrap">
      <div>
        <h2>{{ t('signup.heading') }}</h2>
        <p>{{ t('signup.desc') }}</p>
      </div>
      <form novalidate @submit.prevent="submit">
        <div>
          <label for="fn">{{ t('signup.firstName') }}</label>
          <input id="fn" v-model="form.first" type="text" autocomplete="given-name" required
            :aria-invalid="!!errors.first" aria-describedby="fn-err">
          <p v-if="errors.first" id="fn-err" class="field-error">{{ t(errors.first) }}</p>
        </div>
        <div>
          <label for="ln">{{ t('signup.lastName') }}</label>
          <input id="ln" v-model="form.last" type="text" autocomplete="family-name" required
            :aria-invalid="!!errors.last" aria-describedby="ln-err">
          <p v-if="errors.last" id="ln-err" class="field-error">{{ t(errors.last) }}</p>
        </div>
        <div class="full">
          <label for="em">{{ t('signup.email') }}</label>
          <input id="em" v-model="form.email" type="email" autocomplete="email" required
            :aria-invalid="!!errors.email" aria-describedby="em-err">
          <p v-if="errors.email" id="em-err" class="field-error">{{ t(errors.email) }}</p>
        </div>
        <div class="full">
          <label class="check" for="agree">
            <input id="agree" v-model="form.agree" type="checkbox" required
              :aria-invalid="!!errors.agree" aria-describedby="agree-err">
            {{ t('signup.agree') }}
          </label>
          <p v-if="errors.agree" id="agree-err" class="field-error">{{ t(errors.agree) }}</p>
        </div>
        <p class="fine full">{{ t('signup.disclaimer') }}</p>
        <div class="full">
          <button class="btn" type="submit" :disabled="submitting">
            {{ submitting ? t('signup.submitting') : t('signup.submit') }}
          </button>
        </div>
        <p id="form-msg" class="full" :class="{ success: status === 'success', error: status === 'error' }" role="status">
          {{ message ? t(message) : '' }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { signup } from '../api/signupApi.js'

const { t } = useI18n()

const blank = () => ({ first: '', last: '', email: '', agree: false })
const form = reactive(blank())
const errors = reactive({})
const submitting = ref(false)
// Messages are stored as translation keys so they re-translate when the language changes
const message = ref('')
const status = ref('')

function validate() {
  for (const k of Object.keys(errors)) delete errors[k]
  if (!form.first.trim()) errors.first = 'signup.errName'
  if (!form.last.trim()) errors.last = 'signup.errName'
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) errors.email = 'signup.errEmail'
  if (!form.agree) errors.agree = 'signup.errAgree'
  return Object.keys(errors).length === 0
}

async function submit(e) {
  message.value = ''
  status.value = ''
  if (!validate()) {
    e.target.querySelector('[aria-invalid="true"]')?.focus()
    return
  }

  submitting.value = true
  try {
    const result = await signup({ ...form })
    if (result.ok) {
      message.value = 'signup.success'
      status.value = 'success'
      Object.assign(form, blank())
    } else if (result.error === 'duplicate') {
      errors.email = 'signup.errDuplicate'
    } else {
      message.value = 'signup.errGeneric'
      status.value = 'error'
    }
  } catch {
    message.value = 'signup.errGeneric'
    status.value = 'error'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.signup {
  background: var(--surface);
  border-block: 1px solid var(--line);
}
</style>
