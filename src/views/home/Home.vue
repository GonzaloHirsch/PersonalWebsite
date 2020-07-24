<template>
  <div class="home">
    <GreetingParallaxSection id="greeting" v-observe-visibility="{
          callback: handleGreetingVisibilityChanged,
          intersection: {
            threshold: 0.15
          }
          }"/>
    <ProcessSection id="process"/>
    <AboutSection id="about"/>
    <ContactSection id="contact" class="primary-background"/>
  </div>
</template>

<script>
// @ is an alias to /src
import GreetingParallaxSection from '@/views/home/GreetingParallaxSection'
import AboutSection from '@/views/home/AboutSection'
import ProcessSection from '@/views/home/ProcessSection'
import ContactSection from '@/views/home/ContactSection'

export default {
  name: 'Home',
  components: {
    GreetingParallaxSection,
    ProcessSection,
    AboutSection,
    ContactSection
  },
  methods: {
    handleGreetingVisibilityChanged: function (isVisible, entry) {
      this.$store.dispatch('changeGreetingVisibility', isVisible)
    }
  }
}
</script>

<style>
@import './../../assets/styles/general.css';
</style>
