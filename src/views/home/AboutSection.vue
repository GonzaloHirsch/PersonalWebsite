<template>
  <v-parallax src="../../assets/bg2.jpg" :height="parallaxHeight" max-width="100%">
    <v-layout column align-center justify-center :class='$vuetify.breakpoint.xsOnly ? "white--text color-front center-section-small" : "white--text color-front center-section"' fill-height>
      <h1 transition="slide-x-transition" class='text-uppercase font-weight-bold about-title white--text mb-4 rn-title' v-html="$t('about.title')"></h1>
      <h2 class='white--text my-4 about-text' v-html="$t('about.paragraph1', { years: workExperience })"></h2>
      <h2 class='white--text my-4 about-text' v-html="$t('about.paragraph2')"></h2>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: 'AboutSection',
  data: () => ({
    startDate: new Date(2018, 11, 1, 1, 1, 1, 0)
  }),
  computed: {
    parallaxHeight: function () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 600
        case 'sm':
          return 600
        case 'md':
          return 600
        case 'lg':
          return 600
        case 'xl':
          return 600
        default:
          return 600
      }
    },
    workExperience: function () {
      return new Date().getFullYear() - this.startDate.getFullYear()
    }
  }
}
</script>

<style>
@import "./../../assets/styles/fonts.css";
@import "./../../assets/styles/about.css";
@import "./../../assets/styles/general.css";

.v-parallax__content {
  padding: 0px 0px 0px 0px !important;
}

.special-link {
  color: #a73f85 !important;
}

.center-section {
  padding: 0px 50px;
  text-align: center;
}

.center-section-small {
  padding: 0px 15px;
  text-align: center;
}

.color-front {
  background: linear-gradient(200deg, rgba(63, 167, 131, 1), rgba(63, 167, 131, 0.75));
  background-blend-mode: luminosity;
}
</style>
