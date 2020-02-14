<template>
  <v-parallax src="../../assets/bg2.jpg" :height="parallaxHeight" max-width="100%">
    <v-layout column align-center justify-center class="white--text color-front pt-6" fill-height>
      <h1 transition="slide-x-transition" class='white--text my-2 rn-title' v-html="$t('rn.title')"></h1>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(data, index) in rightNow" :key="index" class="pa-1">
          <v-card class="mx-auto" color="grey darken-2" dark :max-width="$vuetify.breakpoint.xsOnly ? 350 : 400">
            <v-card-title>
              <v-icon left>{{data.icon}}</v-icon>
              <span class="font-weight-light">{{data.title}}</span>
              <v-chip class="ma-2" color="orange" text-color="black" v-for="(chip, i) in data.chips" :key="i">
                {{chip}}
              </v-chip>
            </v-card-title>

            <v-card-text class v-html="data.content"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: 'RightNowSection',
  data: () => ({
    rightNow: [
      {
        icon: 'mdi-book',
        title: 'University',
        content: 'Software Engineering Student @ <a href="https://www.itba.edu.ar" class="special-link" target="_blank">Buenos Aires Institue of Technology</a>. Currently in my third year of studies.',
        chips: ['3 years']
      },
      {
        icon: 'mdi-briefcase',
        title: 'Work',
        content:
          'Full-Stack Developer @ <a href="https://www.newcombin.com" class="special-link" target="_blank">NewCombin</a>. Working there for 1 year and 2 months.',
        chips: ['1 year', '2 months']
      },
      {
        icon: 'mdi-account-multiple-plus',
        title: 'Computer Society',
        content:
          'Co-Founder and Vice President of <a href="https://www.ieee.org" class="special-link" target="_blank">IEEE</a>\'s <a href="https://www.computer.org" class="special-link" target="_blank">Computer Society</a> ITBA Argentina branch.',
        chips: ['4 months']
      }
    ]
  }),
  computed: {
    parallaxHeight: function () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 650
        case 'sm':
          return 500
        case 'md':
          return 300
        case 'lg':
          return 300
        case 'xl':
          return 300
        default:
          return 300
      }
    }
  }
}
</script>

<style>
@import "./../../assets/styles/fonts.css";

.v-parallax__content {
  padding: 0px 0px 0px 0px !important;
}

.special-link {
  color: orange !important;
}

.color-front {
  background: linear-gradient(
    200deg,
    rgba(0, 0, 0, 0.75),
    rgba(75, 75, 75, 0.75)
  );
  background-blend-mode: luminosity;
}
</style>
