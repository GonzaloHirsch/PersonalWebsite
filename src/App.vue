<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1 
          alt="Website Name" 
          class="shrink mr-2 hidden-md-and-up"
          transition="scale-transition"
          >GH</h1>
        <h1 
          alt="Website Name" 
          class="shrink mt-1 hidden-sm-and-down"
          >Gonzalo Hirsch</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
