<template>
<v-layout
      text-center
      justify-center
      wrap
    >
<v-flex xs12 jus class="grey darken-3">
    <v-flex xs12 style="color: white" class="bottom-text">
    {{$t('bottom.made')}}. Copyright © 2020. All rights reserved.
    </v-flex>
</v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'Bottom',
  data: () => ({
  })
}
</script>

<style>
@import "./..//assets/styles/fonts.css";

</style>
