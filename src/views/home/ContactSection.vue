<template>
  <v-container  class="text-basic">
    <v-layout
      text-center
      justify-center
      wrap
      :class='$vuetify.breakpoint.xsOnly ? "about-section-small" : "about-section"'
    >
    <h1 class="text-uppercase mb-6 contact-title">{{$t('contact.contact')}}</h1>
      <h2 class="mt-4 mb-6 contact-subtitle">{{ $t('contact.send_me')}}</h2>
          <!--
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
          -->
          <v-flex xs12>
            <v-btn
            x-large
            :href='link'
            class="color-btn send-btn my-4"
            dark
            outlined
          >
            <v-icon left>mdi-send</v-icon>
            {{ $t('contact.send')}}
          </v-btn>

          <h3 class="my-4 contact-text">Gonzalo Hirsch</h3>
          <p class="contact-text">{{ $t('contact.email')}}</p>
          <v-flex>
            <v-btn
          fab
          :small='!$vuetify.breakpoint.xsOnly'
          class='mx-2'
          href='https://github.com/GonzaloHirsch'
          target='_blank'>
            <v-icon>
              mdi-github
            </v-icon>
          </v-btn>
          <v-btn
          fab
          :small='!$vuetify.breakpoint.xsOnly'
          class='mx-2'
          href='https://www.linkedin.com/in/gonzalo-hirsch-5b4854155/'
          target='_blank'>
            <v-icon>
              mdi-linkedin
            </v-icon>
          </v-btn>
          </v-flex>
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
  },
  computed: {
    link: function () {
      var link = 'mailto:hirschgonzalo@gmail.com?subject='
      link += encodeURIComponent(this.subject)
      link += '&body='
      link += encodeURIComponent(this.body)
      return link
    }
  }
}
</script>

<style>
  @import './../../assets/styles/general.css';
  @import './../../assets/styles/buttons.css';
  @import './../../assets/styles/contact.css';

  .about-section {
    padding: 100px 150px;
    text-align: center;
  }

  .about-section-small {
    padding: 40px 15px;
    text-align: center;
  }

  .send-btn {
    padding: 30px;
  }
</style>
