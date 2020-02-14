<template>
  <v-app>
    <v-app-bar app color='white' light hide-on-scroll fixed flat>
      <div class='d-flex align-center' @click='nameFunction'>
        <h1
          alt='Gonzalo Hirsch'
          class='black--text shrink light-text'
          contain
          width='40'
          v-if='$vuetify.breakpoint.xsOnly'
        >GH</h1>
        <h1
          alt='Gonzalo Hirsch'
          class='black--text shrink light-text'
          contain
          transition='scale-transition'
          v-else
          width='100'
        >Gonzalo Hirsch</h1>
      </div>
      <v-spacer></v-spacer>
      <h3
          @click='scroll'
          alt='Extra Name'
          class='black--text light-text'
          transition='scale-transition'
        >{{ isHome ? '' : extraName }}</h3>
      <v-spacer></v-spacer>
        <div v-if="!isScreenSmall">
            <v-btn
              class="ma-1"
              color="black darken-4"
              @click.stop="navigateTo('Experience')"
              dark
              text
              >{{ $t('general.experience')}}</v-btn>
            <v-btn
              class="ma-1"
              color="black darken-4"
              @click.stop="navigateTo('Projects')"
              dark
              text
              >{{ $t('general.projects')}}</v-btn>
        </div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-else></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      light
      right
      temporary
    >
    <v-layout align-center justify-space-between column fill-height>
       <h1
          alt='Gonzalo Hirsch'
          class='black--text shrink light-text mt-4'
          contain
        >Gonzalo Hirsch</h1>
      <v-list
        nav
        class="text-center"
      >
        <v-list-item
          @click.stop="navigateTo('Experience')"
        >
          <v-list-item-content>
            <v-list-item-title>{{ $t('general.experience') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
          Download CV
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
              mdi-github-circle
            </v-icon>
          </v-btn>
          <v-btn
          fab
          small
          class='mx-2'
          href='https://www.linkedin.com/in/gonzalo-hirsch-5b4854155/'
          target='_blank'>
            <v-icon>
              mdi-linkedin-box
            </v-icon>
          </v-btn>
          </v-flex>
          <v-flex justify-center align-end class="px-12 pt-12">
          <LanguageSwitch/>
          </v-flex>
    </v-layout>
    </v-navigation-drawer>
    <v-content>
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
    }
  },
  mounted () {
    this.determineHome()
  }
}
</script>
<style>
@import '/assets/styles/fonts.css';

.v-divider {
  line-height: 5em;
}
</style>
