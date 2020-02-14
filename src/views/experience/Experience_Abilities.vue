<template>
 <div class="pa-4">
<h1 class="text-center">{{$t('experience.abilities.title')}}</h1>
<v-expansion-panels
      multiple
    >
      <v-expansion-panel v-for="(ability, i) in abilities" :key="i">
        <v-expansion-panel-header :class="`font-weight-light ` + (isScreenExtraSmall() ? '.subtitle-2 small-padding' : 'headline')">{{getTitle(ability)}}</v-expansion-panel-header>
        <v-expansion-panel-content v-html="getDescription(ability)">
        </v-expansion-panel-content>
      </v-expansion-panel>
      </v-expansion-panels>
    </div>
</template>

<script>

export default {
  name: 'Experience_Abilities',
  methods: {
    isScreenExtraSmall: function () {
      return this.$vuetify.breakpoint.xsOnly
    },
    getTitle: function (ref) {
      return this.$t('experience.abilities.' + ref + '.title')
    },
    getDescription: function (ref) {
      return this.$t('experience.abilities.' + ref + '.description')
    }
  },
  data: () => ({
    abilities: [
      'programmingLanguages',
      'dbms',
      'frameworks',
      'specificSoftware',
      'languages'
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
