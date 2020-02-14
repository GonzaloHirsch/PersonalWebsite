<template>
 <div>
<h1 class="text-center">{{$t('experience.achievements.title')}}</h1>
<v-row>
      <v-col cols="12" sm="6" md="4" v-for="(data, index) in achievementData" :key="index" class="pa-1">
        <v-card
          class="mx-auto"
          color="grey darken-2"
          dark
          :max-width="$vuetify.breakpoint.xsOnly ? 350 : 500"
        >
          <v-card-title>
            <span class="font-weight-light">{{getTitle(data)}}</span>
            <v-chip class="ma-2" color="orange" text-color="black" v-for="(chip, i) in getChips(data)" :key="i">
                {{chip}}
              </v-chip>
          </v-card-title>
            <v-card-subtitle>
      <span class="font-weight-light">{{getSubTitle(data)}}</span>
    </v-card-subtitle>
          <v-card-text class v-html="getDescription(data)"></v-card-text>
          <v-card-actions>
      <v-btn link text color="orange" v-for="(link, j) in getLinks(data)" :key="j" :href="link" target="_blank">Link</v-btn>
    </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    </div>
</template>

<script>

export default {
  name: 'Experience_Achievements',
  methods: {
    isScreenExtraSmall: function () {
      return this.$vuetify.breakpoint.xsOnly
    },
    getTitle: function (ref) {
      return this.$t('experience.achievements.' + ref + '.title')
    },
    getDescription: function (ref) {
      return this.$t('experience.achievements.' + ref + '.description')
    },
    getSubTitle: function (ref) {
      return this.$t('experience.achievements.' + ref + '.subtitle')
    },
    getChips: function (ref) {
      return this.$t('experience.achievements.' + ref + '.chips')
    },
    getLinks: function (ref) {
      return this.$t('experience.achievements.' + ref + '.links')
    }
  },
  data: () => ({
    achievementData: [
      'jpmorgan_hackathon_2019',
      'facebook_hackathon_2019',
      'itba_hackathon_2018',
      'bellatrix_hackathon_2019',
      'global_gamejam_2019',
      'itba_gamejam_2018',
      'gmtk_gamejam_2019'
    ]
  }),
  components: {
  }
}
</script>
<style>

.small-padding {
  padding-left: 5px;
}

@media (max-width: 650px) {
  .v-timeline-item__divider{
    min-width: 40px !important;
  }

  .theme--light.v-timeline:before {
    left: 20px !important;
  }

  .v-timeline--dense .v-timeline-item__body{
    max-width: 100% !important;
  }
}
</style>
