<template>
  <section id="projects" class="projects main-section bg-white dark:bg-background_dark">
    <h2 class="w-full text-center text-typography_primary_light dark:text-typography_primary_dark">{{$t('projects.title')}}</h2>
    <div class="project-cards-wrapper">
      <div class="project-card bg-brand_primary_light dark:bg-brand_primary_dark" v-for="(proj, index) in projectData" :key="index">
        <h3 class="text-center text-white dark:text-background_dark">{{$t(proj.title)}}</h3>
        <p class="text-white dark:text-background_dark" v-html="$t(proj.description)" />
      </div>
    </div>
  </section>
</template>

<script>
import projData from '@/data/projects.json'

export default {
  name: 'Projects',
  data: () => ({
    projectData: projData
  })
}
</script>

<style scoped>
.projects {
  @apply w-full flex flex-col overflow-hidden;
}

.project-cards-wrapper {
  @apply w-full h-full flex flex-col justify-center items-center;
}

.project-card {
  @apply w-full p-4 my-2 rounded-2xl shadow-xl;
}

@screen md {
  .project-card {
    @apply w-8/12 p-8 my-4 rounded-2xl shadow-xl;
  }
}

</style>
