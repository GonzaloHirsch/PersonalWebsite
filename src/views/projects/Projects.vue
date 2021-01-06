<template>
<v-container style="margin-top: 70px" class="mb-4">
  <v-row justify='center' align='center' class="mt-4 mb-1">
    <h1 class="text-primary light-text">{{ $t('projects.title')}}</h1>
  </v-row>
  <v-col>
    <v-row justify='center' align='center'>
      <span v-html="$t('projects.explain')"/>
    </v-row>
  </v-col>
  <v-list three-line dark>
        <v-list-item :to="{ name: 'GameOfLife'}">
          <v-list-item-content>
            <v-list-item-title v-text="$t('projects.gol.title')"></v-list-item-title>
            <v-list-item-subtitle v-html="$t('projects.gol.explain')"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text v-text="$t('projects.gol.addedOn')"></v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
  </v-list>
</v-container>
</template>

<script>

export default {
  name: 'Projects',
  components: {
  },
  mounted () {
    // Make the header more visible
    this.$store.dispatch('changeGreetingVisibility', false)
  }
}
</script>
