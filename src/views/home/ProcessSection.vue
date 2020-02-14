<template>
  <v-container>
    <v-layout
      text-center
      justify-center
      wrap
    >
      <v-flex xs12 sm12>
        <h1 class='black--text mb-2 light-text' v-html="$t('middle.message')"></h1>
      </v-flex>
      <!-- <v-flex xs12 sm12>
        <h1 class='black--text mb-2 light-text' v-html="$t('middle.building')"></h1>
      </v-flex>
      <v-flex xs12 sm12>
        <h1 class='black--text mb-2 light-text' v-html="$t('middle.software')"></h1>
      </v-flex> -->
      <v-flex xs12 sm12>
        <h2 class='black--text mb-2 light-text' v-html="$t('middle.process')"></h2>
      </v-flex>
      <v-row no-gutters cols="12">
        <v-col cols="12" sm="4">
          <v-icon large light color="black">mdi-pencil</v-icon>
          <h2>{{ $t('middle.process_design')}}</h2>
          <p>{{ $t('middle.process_design_description')}}</p>
          </v-col>
        <v-col cols="12" sm="4">
          <v-icon large light color="black">mdi-laptop</v-icon>
          <h2>{{ $t('middle.process_build')}}</h2>
          <p>{{ $t('middle.process_build_description')}}</p>
          </v-col>
        <v-col cols="12" sm="4">
          <v-icon large light color="black">mdi-check-all</v-icon>
          <h2>{{ $t('middle.process_evaluate')}}</h2>
          <p>{{ $t('middle.process_evaluate_description')}}</p>
          </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ProcessSection',
  data: () => ({
  })
}
</script>

<style>
@import './../../assets/styles/fonts.css';

</style>
