<template>
  <v-container>
    <v-layout
      text-center
      justify-center
      wrap
    >
    <h1>{{$t('contact.contact')}}</h1>
      <v-flex xs12>
      <v-row no-gutters cols='12'>
        <v-col cols='12' sm='5'>
          <h2>{{ $t('contact.send_me')}}</h2>
          <v-flex xs12>
          <v-text-field
            :label="$t('contact.subject')"
            outlined
            v-model='subject'
          ></v-text-field>
          </v-flex>
          <v-flex xs12>
          <v-textarea
            :label="$t('contact.content')"
            outlined
            v-model='body'
          ></v-textarea>
          </v-flex>
          <v-flex xs12>
            <v-btn
          outlined=""
          :href='link'
          :disabled="isDisabled"
          @click="clearFields"
          >
          {{ $t('contact.send')}}
          </v-btn>
          </v-flex>
          </v-col>
          <v-col cols='12' sm='2'>
          <v-divider :vertical="$vuetify.breakpoint.smAndUp" :class=" $vuetify.breakpoint.smAndUp ? 'ma-0' : 'ma-4'"/>
          </v-col>
        <v-col cols='12' sm='5'>
          <h2>{{ $t('contact.contact_me')}}</h2>
          <h3>Gonzalo Hirsch</h3>
          <p>{{ $t('contact.email')}}</p>
          <v-flex>
            <v-btn
          fab
          small
          class='mx-2'
          href='https://github.com/GonzaloHirsch'
          target='_blank'>
            <v-icon>
              mdi-github-circle
            </v-icon>
          </v-btn>
          <v-btn
          fab
          small
          class='mx-2'
          href='https://www.linkedin.com/in/gonzalo-hirsch-5b4854155/'
          target='_blank'>
            <v-icon>
              mdi-linkedin-box
            </v-icon>
          </v-btn>
          </v-flex>
          </v-col>
      </v-row>
       </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ContactSection',
  data: () => ({
    subject: '',
    body: ''
  }),
  methods: {
    clearFields: function () {
      document.location.href = this.link
      this.subject = ''
      this.body = ''
    }
  },
  computed: {
    link: function () {
      var link = 'mailto:hirschgonzalo@gmail.com?subject='
      link += encodeURIComponent(this.subject)
      link += '&body='
      link += encodeURIComponent(this.body)
      return link
    },
    isDisabled: function () {
      return this.subject === '' || this.body === ''
    }
  }
}
</script>
