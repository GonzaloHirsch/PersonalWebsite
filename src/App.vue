<template>
  <v-app>
    <v-app-bar app :color='this.getGreetingVisibility ? "transparent" : "white"' light persistent fixed :flat='this.getGreetingVisibility'>
      <div class='d-flex align-center' @click='nameFunction'>
        <h1
          alt='Gonzalo Hirsch'
          :class='this.getGreetingVisibility ? "text-basic shrink light-text" : "text-primary shrink light-text"'
          contain
          width='40'
          v-if='$vuetify.breakpoint.xsOnly'
        >GH</h1>
        <h1
          alt='Gonzalo Hirsch'
          :class='this.getGreetingVisibility ? "text-basic shrink light-text" : "text-primary shrink light-text"'
          contain
          transition='scale-transition'
          v-else
          width='100'
        >Gonzalo Hirsch TESTS</h1>
      </div>
      <!-- <v-spacer></v-spacer>
      <h3
          @click='scroll'
          alt='Extra Name'
          :class='this.getGreetingVisibility ? "text-basic light-text" : "text-primary light-text"'
          transition='scale-transition'
        >{{ isHome ? '' : extraName }}</h3> -->
      <v-spacer></v-spacer>
        <div v-if="!isScreenSmall">
            <v-btn
              :class='this.getGreetingVisibility ? "ma-1 color-btn-borderless" : "ma-1 white-btn-borderless"'
              @click.stop="navFunction('process')"
              dark
              text
              >{{ $t('general.process')}}</v-btn>
            <v-btn
              :class='this.getGreetingVisibility ? "ma-1 color-btn-borderless" : "ma-1 white-btn-borderless"'
              @click.stop="navFunction('about')"
              dark
              text
              >{{ $t('general.about')}}</v-btn>
            <v-btn
              :class='this.getGreetingVisibility ? "ma-1 color-btn-borderless" : "ma-1 white-btn-borderless"'
              @click.stop="navFunction('contact')"
              dark
              text
              >{{ $t('general.contact')}}</v-btn>
            <v-btn
              :class='this.getGreetingVisibility ? "ma-1 color-btn-borderless" : "ma-1 white-btn-borderless"'
              @click.stop="navFunction('Projects')"
              dark
              text
              >{{ $t('general.projects')}}</v-btn>
        </div>
      <v-app-bar-nav-icon :class='this.getGreetingVisibility ? "icon-basic" : "icon-primary"' @click.stop="drawer = !drawer" v-else></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      light
      right
      temporary
      class="hue-bg"
    >
    <v-layout align-center justify-space-between column fill-height>
       <h1
          alt='Gonzalo Hirsch'
          class='text-primary shrink light-text mt-4'
          contain
        >Gonzalo Hirsch</h1>
      <v-list
        nav
        class="text-center"
      >
        <!-- <v-list-item
          @click.stop="navigateTo('Experience')"
        >
          <v-list-item-content>
            <v-list-item-title>{{ $t('general.experience') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
        <v-list-item
          @click.stop="navigateTo('Projects')"
        >
          <v-list-item-content>
            <v-list-item-title>{{ $t('general.projects') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-flex xs12 class="text-center">
        <v-btn
            outlined
            large
            href='GonzaloHirsch-CV.pdf'
            target="_blank">
            {{ $t('general.downloadCV') }}
            </v-btn>
      </v-flex>
      <p class="text-center">{{ $t('contact.email')}}</p>
          <v-flex class="text-center">
            <v-btn
          fab
          small
          class='mx-2'
          href='https://github.com/GonzaloHirsch'
          target='_blank'>
            <v-icon>
              mdi-github
            </v-icon>
          </v-btn>
          <v-btn
          fab
          small
          class='mx-2'
          href='https://www.linkedin.com/in/gonzalo-hirsch-5b4854155/'
          target='_blank'>
            <v-icon>
              mdi-linkedin
            </v-icon>
          </v-btn>
          </v-flex>
          <v-flex justify-center align-end class="px-12 pt-12">
          <LanguageSwitch/>
          </v-flex>
    </v-layout>
    </v-navigation-drawer>
    <v-content style="padding: 0px;">
      <router-view/>
    </v-content>
    <Bottom/>
  </v-app>
</template>

<script>
import Bottom from '@/components/Bottom'
import LanguageSwitch from '@/components/LanguageSwitch'

export default {
  name: 'App',
  components: {
    Bottom,
    LanguageSwitch
  },
  data: () => ({
    drawer: false,
    isHome: true,
    extraName: ''
  }),
  watch: {
    $route: function () {
      this.determineHome()
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
  mounted () {
    this.determineHome()
  }
}
</script>
<style>
@import '/assets/styles/fonts.css';
@import '/assets/styles/buttons.css';
@import '/assets/styles/icons.css';
@import '/assets/styles/general.css';

.v-divider {
  line-height: 5em;
}

* {
  margin: 0px;
  padding: 0px;
}

/*.hue-bg {
  background: linear-gradient(200deg, rgba(0, 0, 255, 0.25), rgba(255, 0, 0, 0.1));
}*/
</style>
