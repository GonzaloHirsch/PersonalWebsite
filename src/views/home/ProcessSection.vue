<template>
  <v-container>
    <v-layout
      text-center
      justify-center
      wrap
      :class='$vuetify.breakpoint.xsOnly ? "process-center-small" : "process-center"'
    >
      <v-flex xs12 sm12 class="mb-6">
        <h1 class='black--text light-text' v-html="$t('middle.message')"></h1>
      </v-flex>
      <!-- <v-flex xs12 sm12>
        <h1 class='black--text mb-2 light-text' v-html="$t('middle.building')"></h1>
      </v-flex>
      <v-flex xs12 sm12>
        <h1 class='black--text mb-2 light-text' v-html="$t('middle.software')"></h1>
      </v-flex> -->
      <!--
      <v-flex xs12 sm12>
        <h2 class='black--text mb-2 light-text' v-html="$t('middle.process')"></h2>
      </v-flex> -->
      <v-divider :class='$vuetify.breakpoint.xsOnly ? "process-divider-small" : "process-divider"'></v-divider>
      <v-row no-gutters cols="12" :class='$vuetify.breakpoint.xsOnly ? "mt-4" : "mt-12"'>
        <v-col cols="12" sm="4">
          <v-icon large light class="icon-primary">mdi-pencil</v-icon>
          <h2 class="text-primary">{{ $t('middle.process_design')}}</h2>
          <p>{{ $t('middle.process_design_description')}}</p>
          </v-col>
        <v-col cols="12" sm="4">
          <v-icon large light class="icon-primary">mdi-laptop</v-icon>
          <h2 class="text-primary">{{ $t('middle.process_build')}}</h2>
          <p>{{ $t('middle.process_build_description')}}</p>
          </v-col>
        <v-col cols="12" sm="4">
          <v-icon large light class="icon-primary">mdi-check-all</v-icon>
          <h2 class="text-primary">{{ $t('middle.process_evaluate')}}</h2>
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
@import './../../assets/styles/icons.css';

.process-center {
  padding: 100px 0px;
  text-align: center;
}

.process-center-small {
  padding: 50px 10px;
  text-align: center;
}

.process-divider {
  margin: 60px 300px;
  border-color: #a73f85;
}

.process-divider-small {
  margin: 10px 30px;
  border-color: #a73f85;
}
</style>
