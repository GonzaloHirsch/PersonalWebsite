<template>
  <div id="app" class="app dark:bg-background_dark">
    <v-nav :scrolled="hasScrolled"/>
    <router-view class="router"></router-view>
    <h2 @click="changeType">Footer</h2>
  </div>
</template>

<script>
import vNav from '@/components/nav'

export default {
  name: 'App',
  components: {
    vNav
  },
  data: () => ({
    drawer: false,
    isHome: true,
    extraName: '',
    hasScrolled: false,
    theme: false
  }),
  watch: {
    $route: function () {
      this.determineHome()
    }
  },
  methods: {
    changeType: function () {
      console.log(this.theme)
      this.theme = !this.theme
      if (this.theme) {
        document.querySelector('html').classList.remove('dark')
      } else {
        document.querySelector('html').classList.add('dark')
      }
    },
    scroll: function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    scrollTo: function (elem) {
      const element = document.getElementById(elem)
      element.scrollIntoView({ behavior: 'smooth' })
    },
    navigateTo: function (view) {
      if (this.$route.name !== view) {
        this.$router.push({ name: view })
      }
    },
    goToHome: function () {
      this.navigateTo('Home')
    },
    determineHome: function () {
      if (this.$route.name === 'Home') {
        this.isHome = true
      } else {
        this.isHome = false
        this.extraName = this.$route.name
      }
    },
    navFunction: function (target) {
      if (this.isHome) {
        if (target !== 'Projects') {
          this.scrollTo(target)
        } else {
          this.navigateTo(target)
        }
      } else {
        if (target !== 'Projects') {
          this.goToHome()
        } else {
          this.navigateTo(target)
        }
      }
    },
    handleScroll: function () {
      this.hasScrolled = window.scrollY > 0
    }
  },
  computed: {
    isScreenSmall: function () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return true
        case 'sm':
          return false
        case 'md':
          return false
        case 'lg':
          return false
        case 'xl':
          return false
        default:
          return false
      }
    },
    nameFunction: function () {
      if (this.isHome) {
        return this.scroll
      } else {
        return this.goToHome
      }
    },
    getGreetingVisibility: function () {
      return this.$store.getters.greetingVisible
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.determineHome()
  }
}
</script>

<style scoped>
.app {
  @apply bg-background_light transition duration-300;
}
</style>
