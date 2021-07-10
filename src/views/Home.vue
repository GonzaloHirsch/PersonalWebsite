<template>
  <main>
    <v-hero/>
    <v-about/>
    <v-passion/>
  </main>
</template>

<script>
import vAbout from '@/components/about'
import vHero from '@/components/hero'
import vPassion from '@/components/passion'

export default {
  name: 'Home',
  components: {
    vAbout,
    vHero,
    vPassion
  }
}
</script>
