<template>
  <div>
    <h1 class="text-center">{{$t('experience.education.title')}}</h1>
    <v-row>
      <v-col cols="12" sm="6" md="6" v-for="(data, index) in educationData" :key="index" class="pa-1">
        <v-card
          class="mx-auto"
          color="grey darken-2"
          dark
          :max-width="$vuetify.breakpoint.xsOnly ? 350 : 500"
        >
          <v-card-title>
            <span class="font-weight-light">{{getTitle(data)}}</span>
          </v-card-title>
            <v-card-subtitle>
      <span class="font-weight-light">{{getSubTitle(data)}}</span>
    </v-card-subtitle>
          <v-card-text class v-html="getDescription(data)"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Experience_Education',
  methods: {
    isScreenExtraSmall: function () {
      return this.$vuetify.breakpoint.xsOnly
    },
    getTitle: function (ref) {
      return this.$t('experience.education.' + ref + '.title')
    },
    getDescription: function (ref) {
      return this.$t('experience.education.' + ref + '.description')
    },
    getSubTitle: function (ref) {
      return this.$t('experience.education.' + ref + '.subtitle')
    }
  },
  data: () => ({
    educationData: [
      'university',
      'internationalCertifications'
    ]
  }),
  components: {}
}
</script>
<style>
.small-padding {
  padding-left: 5px;
}

@media (max-width: 650px) {
  .v-timeline-item__divider {
    min-width: 40px !important;
  }

  .theme--light.v-timeline:before {
    left: 20px !important;
  }

  .v-timeline--dense .v-timeline-item__body {
    max-width: 100% !important;
  }
}
</style>
