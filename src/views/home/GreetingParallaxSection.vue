<template>
    <v-parallax
      src='../../assets/bg.jpg'
      height='699'
      max-width='100%'
    >
      <v-layout column align-center justify-center :class='$vuetify.breakpoint.xsOnly ? "white--text color-hue center-content-small" : "white--text color-hue center-content"' fill-height>
        <h1 v-observe-visibility="{
          callback: handleTitleVisibilityChanged,
          intersection: {
            threshold: 1
          }
          }" :class="this.titleVisible ? 'title-element-visible' : 'title-element-invisible'" class='white--text my-2 greeting-name name-element'>{{ $t('greeting.name')}}</h1>
        <h3 v-observe-visibility="{
          callback: handleSubitleVisibilityChanged,
          intersection: {
            threshold: 1
          }
          }" :class="this.subtitleVisible ? 'subtitle-element-visible' : 'subtitle-element-invisible'" class='white--text my-4 greeting-sub subtitle-element'>{{ $t('greeting.description')}}</h3>
        <v-row no-gutters cols='12' v-observe-visibility="{
          callback: handleButtonsVisibilityChanged,
          intersection: {
            threshold: 1
          }
        }" :class="this.buttonsVisible ? 'buttons-element-visible' : 'buttons-element-invisible'">
        <!--
            <v-btn
              class="ma-2 button-1 color-btn"
              dark
              outlined
              :large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.xsOnly"
              @click.stop="navigateTo('Experience')"
              >{{ $t('general.experience')}}</v-btn>
              -->
            <v-btn
              class="ma-2 button-2 color-btn"
              dark
              outlined
              href='GonzaloHirsch-CV.pdf'
              target="_blank"
              :large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.xsOnly"
              >{{ $t('general.cv')}}</v-btn>
              <!--
            <v-btn
              class="ma-2 button-3 color-btn"
              dark
              outlined
              :large="$vuetify.breakpoint.smAndUp"
              :small="$vuetify.breakpoint.xsOnly"
              @click.stop="navigateTo('Projects')"
              >{{ $t('general.projects')}}</v-btn>
              -->
        </v-row>
      </v-layout>
    </v-parallax>
</template>

<script>
export default {
  name: 'GreetingParallaxSection',
  data: () => ({
    titleVisible: true,
    subtitleVisible: true,
    buttonsVisible: true
  }),
  methods: {
    navigateTo: function (view) {
      this.$router.push({ name: view })
    },
    handleTitleVisibilityChanged: function (isVisible, entry) {
      this.titleVisible = isVisible
    },
    handleSubitleVisibilityChanged: function (isVisible, entry) {
      this.subtitleVisible = isVisible
    },
    handleButtonsVisibilityChanged: function (isVisible, entry) {
      this.buttonsVisible = isVisible
    }
  }
}
</script>

<style>
@import './../../assets/styles/fonts.css';
@import './../../assets/styles/greeting.css';
@import './../../assets/styles/buttons.css';

.v-parallax__content{
  padding: 0px 0px 0px 0px !important;
}

.color-hue{
  background: linear-gradient(200deg, rgba(0, 0, 255, 0.75), rgba(255, 0, 0, 0.5));
  background-blend-mode: luminosity;
}
</style>
