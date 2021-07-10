<template>
  <section id="experience" class="experience main-section bg-white dark:bg-background_dark">
    <h2 class="experience-title text-typography_primary_light dark:text-typography_primary_dark">{{$t('experience.title')}}</h2>
    <div class="experience-carousel-wrapper" ref="carousel">
      <div class="experience-carousel-controls-wrapper">
        <!-- Left -->
        <svg @click="currentIndex > 0 ? moveCarousel(-1) : undefined" :class="[currentIndex > 0 ? 'experience-carousel-control--active hover:text-brand_primary_light dark:hover:text-brand_primary_dark' : 'experience-carousel-control--inactive', 'experience-carousel-control experience-carousel-control-left']" viewBox="0 0 24 24">
          <path :class="[currentIndex > 0 ? 'hover:text-brand_primary_light dark:hover:text-brand_primary_dark' : '' , 'text-typography_primary_light dark:text-typography_primary_dark']" fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
        <!-- Right -->
        <svg @click="currentIndex < experienceData.length - 1 ? moveCarousel(1) : undefined" :class="[currentIndex < experienceData.length - 1 ? 'experience-carousel-control--active hover:text-brand_primary_light dark:hover:text-brand_primary_dark' : 'experience-carousel-control--inactive', 'experience-carousel-control experience-carousel-control-right']" viewBox="0 0 24 24">
          <path :class="[currentIndex < experienceData.length - 1 ? 'hover:text-brand_primary_light dark:hover:text-brand_primary_dark' : '' , 'text-typography_primary_light dark:text-typography_primary_dark']" fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </div>
      <div class="experience-carousel-cards-wrapper" :style="{transform: translateStyle}">
        <div class="experience-card" v-for="(exp, index) in experienceData" :key="index">
          <div class="experience-card-inner bg-brand_secondary_light bg-opacity-10 dark:bg-opacity-10 dark:bg-brand_secondary_dark">
            <h3 class="experience-card-position text-typography_primary_light dark:text-typography_primary_dark">{{$t(exp.position)}}</h3>
            <h4 class="experience-card-company text-typography_primary_light dark:text-typography_primary_dark" v-html="$t(exp.company)"/>
            <p class="experience-card-date text-typography_primary_light dark:text-typography_primary_dark">{{$t(exp.date)}}</p>
            <p class="experience-card-description text-typography_primary_light dark:text-typography_primary_dark" v-html="$t(exp.description)" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import expData from '@/data/experience.json'

export default {
  name: 'Experience',
  data: () => ({
    experienceData: expData,
    currentIndex: 0,
    translateData: 0,
    translateStyle: undefined
  }),
  methods: {
    moveCarousel: function (dir) {
      this.translateData -= (dir * 100)
      this.translateStyle = 'translateX(' + this.translateData + '%)'
      this.currentIndex += dir
    }
  }
}
</script>

<style scoped>
.experience {
  @apply w-full flex flex-col overflow-hidden;
  height: 100vh;
}

.experience-title {
  @apply w-full text-center;
}

.experience-carousel-wrapper {
  @apply w-full h-full relative flex flex-col items-center overflow-hidden;
}

@screen sm {
  .experience-carousel-wrapper {
    @apply flex-row;
  }
}

.experience-carousel-control-right {
  @apply absolute bottom-0 right-16;
}

.experience-carousel-control-left {
  @apply absolute bottom-0 left-16;
}

@screen sm {
  .experience-carousel-control-right {
    @apply right-0;
    bottom: auto;
  }

  .experience-carousel-control-left {
    @apply left-0;
    bottom: auto;
  }
}

.experience-carousel-control {
  @apply w-16 h-16;
}

@screen sm {
  .experience-carousel-control {
    @apply w-20 h-20;
  }
}

.experience-carousel-control--inactive {
  @apply opacity-25;
}

.experience-carousel-control--active {
  @apply cursor-pointer;
}

.experience-card {
  @apply px-2 py-1 w-full h-full flex-shrink-0 flex-grow-0 justify-center items-center;
}

.experience-card-inner {
  @apply rounded-md px-4 w-full h-full flex flex-col justify-center items-center text-center;
}

@screen md {
  .experience-card {
    @apply px-24 py-12;
  }

  .experience-card-inner {
    @apply px-8;
  }
}

.experience-carousel-controls-wrapper {
  @apply w-full h-1/6 absolute bottom-0 left-0 flex flex-col items-center justify-center;
  z-index: 2;
}

.experience-carousel-cards-wrapper {
  @apply w-full flex flex-row h-5/6 items-center;
  z-index: 1;
}

@screen sm {
  .experience-carousel-controls-wrapper {
    @apply h-full top-0 left-0;
  }

  .experience-carousel-cards-wrapper {
    @apply h-full;
  }
}

.experience-card-date {
  @apply font-thin mb-6 text-h5 leading-h5;
}

.experience-card-description {
  @apply w-full text-left;
}
</style>
