<template>
  <v-select
    style="height:100%; width:100% !important"
    v-model="$i18n.locale"
    :items="langs"
    dark
    solo
    />
</template>

<script>
export default {
  name: 'LanguageSwitch',
  data: () => ({
    langs: ['es', 'en']
  })
}
</script>
