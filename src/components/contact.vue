<template>
  <section id="contact" class="contact main-section bg-brand_secondary_light dark:bg-brand_secondary_dark">
    <h2 class="text-white dark:text-background_dark">{{$t('contact.title')}}</h2>
    <h4 class="w-full sm:w-10/12 mx-auto text-white dark:text-background_dark text-center mb-8">{{$t('contact.message')}}</h4>
    <v-button :text="$t('contact.button.text')" :aria="$t('contact.button.aria')" :href="'mailto:hirschgonzalo@gmail.com?subject=' + $t('contact.button.subject')" target="_blank" format="secondary"/>
  </section>
</template>

<script>
import vButton from '@/components/button'

export default {
  name: 'Contact',
  components: {
    vButton
  }
}
</script>

<style scoped>
.contact {
  @apply flex flex-col justify-center items-center overflow-hidden;
  height: 100vh;
}
</style>
