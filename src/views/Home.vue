<template>
  <main>
    <v-hero/>
    <v-about/>
    <v-experience/>
    <v-passion/>
    <v-projects/>
    <v-contact/>
  </main>
</template>

<script>
import vAbout from '@/components/about'
import vContact from '@/components/contact'
import vExperience from '@/components/experience'
import vHero from '@/components/hero'
import vPassion from '@/components/passion'
import vProjects from '@/components/projects'

export default {
  name: 'Home',
  components: {
    vAbout,
    vContact,
    vExperience,
    vHero,
    vPassion,
    vProjects
  }
}
</script>
