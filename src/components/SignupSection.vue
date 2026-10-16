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
          <input id="fn" v-model="form.first" type="text" autocomplete="given-name" required>
        </div>
        <div>
          <label for="ln">{{ t('signup.lastName') }}</label>
          <input id="ln" v-model="form.last" type="text" autocomplete="family-name" required>
        </div>
        <div class="full">
          <label for="em">{{ t('signup.email') }}</label>
          <input id="em" v-model="form.email" type="email" autocomplete="email" required>
        </div>
        <div>
          <label for="zip">{{ t('signup.zip') }}</label>
          <input id="zip" v-model="form.zip" type="text" autocomplete="postal-code">
        </div>
        <div>
          <label for="ph">{{ t('signup.phone') }}</label>
          <input id="ph" v-model="form.phone" type="tel" autocomplete="tel">
        </div>
        <label class="check full" for="agree">
          <input id="agree" v-model="form.agree" type="checkbox" required>
          {{ t('signup.agree') }}
        </label>
        <p class="fine full">{{ t('signup.disclaimer') }}</p>
        <div class="full">
          <button class="btn" type="submit">{{ t('signup.submit') }}</button>
        </div>
        <p id="form-msg" class="full" role="status">{{ message }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const blank = () => ({ first: '', last: '', email: '', zip: '', phone: '', agree: false })
const form = reactive(blank())
const message = ref('')

function submit() {
  if (!form.first.trim() || !form.last.trim()) {
    message.value = t('signup.errName')
    return
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) {
    message.value = t('signup.errEmail')
    return
  }
  if (!form.agree) {
    message.value = t('signup.errAgree')
    return
  }
  // TODO: send `form` to your backend / email service here
  message.value = t('signup.success')
  Object.assign(form, blank())
}
</script>
