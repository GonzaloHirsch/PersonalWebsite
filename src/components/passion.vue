<template>
  <section id="passion" class="passion main-section bg-white dark:bg-background_dark">
    <div class="passion-shapes-wrapper">
        <div class="passion-shape passion-shape-1 bg-brand_secondary_light dark:bg-brand_secondary_dark" />
        <div class="passion-shape passion-shape-2 bg-brand_primary_light dark:bg-brand_primary_dark" />
        <div class="passion-shape passion-shape-3 bg-brand_primary_light dark:bg-brand_primary_dark" />
        <div class="passion-shape passion-shape-4 bg-brand_secondary_light dark:bg-brand_secondary_dark" />
    </div>
    <div class="passion-text-wrapper">
      <p class="passion-text mb-6 dark:text-typography_primary_dark" v-html="$t('passion.text')"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Passion'
}
</script>

<style scoped>
.passion {
  @apply flex flex-col justify-end relative overflow-hidden;
  height: 100vh;
}

.passion-text-wrapper {
  @apply w-full h-full flex flex-row justify-center items-center;
}

.passion-text {
  @apply text-h2-sm leading-h2-sm w-full text-center mb-0;
  height: fit-content;
}

.passion-shapes-wrapper {
  @apply w-full h-full absolute top-0 left-0;
  z-index: 1;
}

.passion-shape {
  @apply rounded-lg shadow-md cursor-pointer;
}

.passion-shape:hover {
  @apply scale-110;
}

.passion-shape-1 {
  @apply w-24 h-24 transform translate-y-120 translate-x-80 rotate-45 bottom-0 right-0;
}

.passion-shape-2 {
  @apply w-96 h-48 transform -translate-y-48 translate-x-60 -rotate-24 top-0 right-0;
}

.passion-shape-3 {
  @apply w-96 h-48 transform translate-y-60 -translate-x-60 -rotate-45 top-0 left-0;
}

.passion-shape-4 {
  @apply w-64 h-32 transform -translate-y-120 -translate-x-32 rotate-24 top-0 left-0;
}

@screen sm {
  .passion-text {
    @apply text-h2 leading-h2;
  }

  .passion-shape-1 {
    @apply translate-y-120 translate-x-120 rotate-45;
  }

  .passion-shape-2 {
    @apply -translate-y-48 translate-x-100 -rotate-24;
  }

  .passion-shape-3 {
    @apply translate-y-60 -translate-x-48 -rotate-45;
  }

  .passion-shape-4 {
    @apply -translate-y-120 -translate-x-12 rotate-24;
  }
}

@screen md {
  .passion-shape-1 {
    @apply translate-y-116 translate-x-184 rotate-45;
  }

  .passion-shape-2 {
    @apply -translate-y-32 translate-x-200 -rotate-24;
  }

  .passion-shape-3 {
    @apply translate-y-60 -translate-x-48 -rotate-45;
  }

  .passion-shape-4 {
    @apply -translate-y-120 translate-x-20 rotate-24;
  }
}

@screen lg {
  .passion-shape-1 {
    @apply translate-y-116 translate-x-184 rotate-45;
  }

  .passion-shape-2 {
    @apply -translate-y-32 translate-x-200 -rotate-24;
  }

  .passion-shape-3 {
    @apply translate-y-60 -translate-x-48 -rotate-45;
  }

  .passion-shape-4 {
    @apply -translate-y-104 translate-x-48 rotate-24;
  }
}
</style>
