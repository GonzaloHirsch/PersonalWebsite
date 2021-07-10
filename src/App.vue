<template>
  <div id="app" class="app dark:bg-background_dark">
    <v-nav :scrolled="hasScrolled"/>
    <router-view class="router"></router-view>
    <v-footer/>
  </div>
</template>

<script>
import vFooter from '@/components/footer'
import vNav from '@/components/nav'

export default {
  name: 'App',
  components: {
    vFooter,
    vNav
  },
  data: () => ({
    hasScrolled: false
  }),
  watch: {
    mobileMenuIsVisible: function () {
      const el = document.body
      if (this.mobileMenuIsVisible) {
        el.classList.add('overflow-y-hidden')
      } else {
        el.classList.remove('overflow-y-hidden')
      }
    }
  },
  methods: {
    handleScroll: function () {
      this.hasScrolled = window.scrollY > 0
    }
  },
  computed: {
    mobileMenuIsVisible: function () {
      return this.$store.getters.menuVisible
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  beforeMount () {
    this.$store.dispatch('initTheme')
  }
}
</script>

<style scoped>
.app {
  @apply bg-background_light transition duration-300;
}
</style>
