<template>
    <v-parallax
      src="../../assets/bg.jpg"
      height='600'
      max-width='100%'
    >
      <v-layout column align-center justify-center class='white--text color-front pt-6' :style="$vuetify.breakpoint.xsOnly ? 'padding-top: 80px !important' : ''" fill-height>
        <!-- <h2 class='white--text mt-6 mb-2 greeting-hi'>{{ $t('greeting.hi')}}</h2> -->
        <h3 class='white--text mt-12 mb-2 greeting-sub'>{{ $t('greeting.my')}}</h3>
        <h1 transition="slide-x-transition" class='white--text my-2 greeting-name name'>{{ $t('greeting.name')}}</h1>
        <h3 class='white--text mt-2 greeting-sub'>{{ $t('greeting.software_engineering')}}</h3>
        <h3 class='white--text mb-6 greeting-sub'>{{ $t('greeting.full_stack')}}</h3>
        <v-row no-gutters cols='12'>
            <v-btn
              class="ma-2 button-1"
              color="white darken-4"
              dark
              outlined
              :large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.xsOnly"
              @click.stop="navigateTo('Experience')"
              >{{ $t('general.experience')}}</v-btn>
            <v-btn
              class="ma-2 button-2"
              color="white darken-4"
              dark
              outlined
              href='GonzaloHirsch-CV.pdf'
              target="_blank"
              :large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.xsOnly"
              >{{ $t('general.cv')}}</v-btn>
            <v-btn
              class="ma-2 button-3"
              color="white darken-4"
              dark
              outlined
              :large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.xsOnly"
              @click.stop="navigateTo('Projects')"
              >{{ $t('general.projects')}}</v-btn>
        </v-row>
      </v-layout>
    </v-parallax>
</template>

<script>
export default {
  name: 'GreetingParallaxSection',
  data: () => ({}),
  methods: {
    navigateTo: function (view) {
      this.$router.push({ name: view })
    }
  }
}
</script>

<style>
@import './../../assets/styles/fonts.css';

.v-parallax__content{
  padding: 0px 0px 0px 0px !important;
}

.color-front {
  background: linear-gradient(200deg, rgba(0, 0, 0, 0.75), rgba(255, 255, 255, 0.5));
  background-blend-mode: luminosity;
}

.name {
  -webkit-animation-name: fade-in;
  -webkit-animation-duration: 2s;
  animation-name: fade-in;
  animation-duration: 2s;
}

@-webkit-keyframes fade-in {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fade-in {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>
