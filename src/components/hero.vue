<template>
  <section class="hero main-section section-no-padding-y-b md:section-padding-y-b md:section-no-padding-x-r">
      <div class="hero-text-wrapper">
        <p class="hero-text-overtitle dark:text-typography_primary_dark" v-html="$t('hero.overtitle')"></p>
        <h1 class="hero-text-name dark:text-brand_primary_dark">Gonzalo Hirsch</h1>
        <h2 class="hero-text-subtitle dark:text-typography_primary_dark" v-html="$t('hero.subtitle')"></h2>
        <v-button class="hero-text-button hidden md:block" :text="$t('hero.button.text')" :aria="$t('hero.button.aria')" href="/GonzaloHirsch-CV.pdf" target="_blank" format="white"/>
      </div>
      <div class="hero-image-wrapper">
        <img class="hero-image" :src="heroImg" alt="Gonzalo Hirsch">
        <div class="hero-image-overlay dark:bg-brand_primary_dark"/>
      </div>
  </section>
</template>

<script>
import vButton from '@/components/button'

import heroImgData from '@/assets/images/bg.jpg'

export default {
  name: 'Hero',
  components: {
    vButton
  },
  data: () => ({
    heroImg: heroImgData
  })
}
</script>

<style scoped>
.hero {
  @apply flex flex-col justify-end;
  height: 100vh;
}

.hero-text-wrapper {
  @apply w-full flex flex-col justify-center mb-6;
}

.hero-image-wrapper {
  @apply w-full flex flex-row justify-end relative;
}

.hero-image {
  @apply h-full w-full rounded-tl-3xl rounded-tr-3xl;
  object-fit: cover;
}

.hero-image-overlay {
  @apply w-full bg-brand_primary_light opacity-25 absolute h-full rounded-tl-3xl rounded-tr-3xl;
}

.hero-text-name {
  @apply text-brand_primary_light mb-2;
}

.hero-text-subtitle {
  @apply text-h4-sm leading-h4-sm;
}

.hero-text-overtitle {
  @apply font-highlight text-h2-sm leading-h2-sm;
}

.hero-text-button {
  @apply mx-auto mb-2;
}

@screen md {
  .hero-text-name {
    @apply text-highlight leading-highlight mb-6;
  }

  .hero-text-subtitle {
    @apply text-h3 leading-h3;
  }

  .hero-text-overtitle {
    @apply text-h2 leading-h2;
  }

  .hero {
    @apply flex flex-row justify-between;
    height: 100vh;
  }

  .hero-text-wrapper {
    @apply w-6/12 flex flex-col justify-center pr-4 mb-0;
  }

  .hero-image-wrapper {
    @apply w-6/12 flex flex-row justify-end relative;
  }

  .hero-image {
    @apply h-full w-full rounded-tl-3xl rounded-bl-3xl rounded-tr-none;
    object-fit: cover;
  }

  .hero-image-overlay {
    @apply w-full bg-brand_primary_light opacity-25 absolute h-full rounded-tl-3xl rounded-bl-3xl rounded-tr-none;
  }

  .hero-text-button {
    @apply mx-0 mb-0;
  }
}
</style>
