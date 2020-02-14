<template>
  <div class="home">
    <GreetingParallaxSection/>
    <ProcessSection/>
    <RightNowSection/>
    <ContactSection/>
  </div>
</template>

<script>
// @ is an alias to /src
import GreetingParallaxSection from '@/views/home/GreetingParallaxSection'
import RightNowSection from '@/views/home/RightNowSection'
import ProcessSection from '@/views/home/ProcessSection'
import ContactSection from '@/views/home/ContactSection'

export default {
  name: 'Home',
  components: {
    GreetingParallaxSection,
    ProcessSection,
    RightNowSection,
    ContactSection
  }
}
</script>
