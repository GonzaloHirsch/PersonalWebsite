<template>
  <div id="app" :class="['app dark:bg-background_dark']">
    <v-nav :scrolled="hasScrolled"/>
    <router-view :class="['router']"></router-view>
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
    drawer: false,
    isHome: true,
    extraName: '',
    hasScrolled: false
  }),
  watch: {
    $route: function () {
      this.determineHome()
    },
    mobileMenuIsVisible: function () {
      console.log(this.mobileMenuIsVisible)
      const el = document.body
      if (this.mobileMenuIsVisible) {
        el.classList.add('overflow-y-hidden')
      } else {
        el.classList.remove('overflow-y-hidden')
      }
    }
  },
  methods: {
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
    nameFunction: function () {
      if (this.isHome) {
        return this.scroll
      } else {
        return this.goToHome
      }
    },
    getGreetingVisibility: function () {
      return this.$store.getters.greetingVisible
    },
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
