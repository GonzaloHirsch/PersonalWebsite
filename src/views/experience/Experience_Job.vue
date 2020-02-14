<template>
 <div>
<h1 class="text-center">{{$t('experience.job.title')}}</h1>
<v-timeline dense>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      :small="isScreenExtraSmall()"
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <v-expansion-panels
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header :class="`font-weight-light ${year.color}--text ` + (isScreenExtraSmall() ? '.subtitle-2 small-padding' : 'headline')">Full-Stack Developer</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
      </v-expansion-panels>
    </v-timeline-item>
  </v-timeline>
    </div>
</template>

<script>

export default {
  name: 'Experience_Job',
  methods: {
    isScreenExtraSmall: function () {
      return this.$vuetify.breakpoint.xsOnly
    }
  },
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '1960'
      },
      {
        color: 'green',
        year: '1970'
      },
      {
        color: 'pink',
        year: '1980'
      },
      {
        color: 'amber',
        year: '1990'
      },
      {
        color: 'orange',
        year: '2000'
      }
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
