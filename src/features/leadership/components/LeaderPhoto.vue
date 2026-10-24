<template>
  <!-- encodeURI: file names may contain spaces -->
  <img v-if="person.photo" class="leader-photo" :src="encodeURI(person.photo)" :alt="person.name" />
  <!-- Placeholder until a photo is added in leaders.js -->
  <div v-else class="leader-photo photo-placeholder" aria-hidden="true">
    <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6z" fill="currentColor"/></svg>
  </div>
</template>

<script setup>
defineProps({
  person: { type: Object, required: true },
})
</script>

<style scoped>
.leader-photo {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
}

.photo-placeholder {
  display: grid;
  place-items: end center;
  background: var(--sky);
  color: var(--sky-2);
  overflow: hidden;
}

.photo-placeholder svg {
  width: 80%;
}
</style>
