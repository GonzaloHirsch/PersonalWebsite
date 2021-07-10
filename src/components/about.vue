<template>
  <section id="about" class="about main-section dark:bg-brand_primary_dark">
    <div class="about-shapes-wrapper">
        <div class="about-shape about-shape-1 dark:bg-brand_secondary_dark" />
        <div class="about-shape about-shape-2 dark:bg-brand_secondary_dark" />
        <div class="about-shape about-shape-3 dark:bg-brand_secondary_dark" />
    </div>
    <div class="about-text-wrapper">
        <p class="about-text mb-6 dark:text-background_dark" v-html="$t('about.top')"/>
        <p class="about-text dark:text-background_dark" v-html="$t('about.bottom')"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  @apply bg-brand_primary_light flex flex-row justify-end relative overflow-hidden;
  height: 100vh;
}

.about-text-wrapper {
  @apply w-full h-full flex flex-col justify-center;
  z-index: 2;
}

.about-shapes-wrapper {
  @apply w-full h-full absolute top-0 left-0;
  z-index: 1;
}

.about-text {
  @apply w-full text-left text-white text-h4 leading-h4;
}

.about-shape {
  @apply bg-brand_secondary_light rounded-lg shadow-md cursor-pointer;
}

.about-shape:hover {
  @apply scale-110;
}

.about-shape-1 {
  @apply w-24 h-24 transform translate-y-56 -translate-x-20 rotate-45;
}

.about-shape-2 {
  @apply w-96 h-48 transform translate-y-6 translate-x-80 -rotate-24;
}

.about-shape-3 {
  @apply w-96 h-48 transform  translate-y-96 -translate-x-48 -rotate-24;
}

@screen sm {
  .about-shape-2 {
    @apply -translate-y-56 translate-x-116 -rotate-24;
  }

  .about-shape-1 {
    @apply translate-y-2 translate-x-2 rotate-45;
  }

  .about-shape-3 {
    @apply translate-y-72 -translate-x-60 -rotate-45;
  }
}

@screen md {
  .about-text {
    @apply text-h3-sm leading-h3-sm text-right;
  }

  .about-text-wrapper {
    @apply w-9/12;
  }

  .about-shape-2 {
    @apply -translate-y-12 -translate-x-48 rotate-24;
  }

  .about-shape-1 {
    @apply translate-y-96 translate-x-36 rotate-45;
  }

  .about-shape-3 {
    @apply translate-y-48 -translate-x-72 -rotate-45;
  }
}

@screen lg {
  .about-text {
    @apply text-h3 leading-h3;
  }

  .about-text-wrapper {
    @apply w-7/12;
  }

  .about-shape-1 {
    @apply translate-y-96 translate-x-72 rotate-45;
  }

  .about-shape-2 {
    @apply -translate-y-8 -translate-x-36 rotate-24;
  }

  .about-shape-3 {
    @apply translate-y-48 -translate-x-48 -rotate-45;
  }
}
</style>
