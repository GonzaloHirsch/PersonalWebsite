<template>
  <a :class="[extraClass, format === 'white' ? 'button-white dark:border-brand_primary_dark dark:text-brand_primary_dark dark:hover:text-background_dark dark:hover:bg-brand_primary_dark' : 'button-primary dark:border-background_dark dark:text-background_dark dark:hover:text-brand_primary_dark dark:hover:bg-background_dark', 'button']" :aria-label="aria" :href="href" :target="target">{{text}}</a>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'aria', 'target', 'href', 'extraClass', 'format']
}
</script>

<style scoped>
.button {
    @apply px-4 py-2 rounded-lg;
    width: fit-content;
}

.button-white {
    @apply border-2 border-brand_primary_light text-brand_primary_light bg-transparent;
}

.button-white:hover {
    @apply bg-brand_primary_light text-white;
}

.button-primary {
    @apply border-2 border-white text-white bg-transparent;
}

.button-primary:hover {
    @apply text-brand_primary_light bg-white;
}
</style>
