<template>
  <v-app>
    <AppToolBar />
    
    <v-main>
     <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppToolBar from './components/shared/AppToolBar.vue';
  export default {
    components: {
      AppToolBar,
    }
  }
</script>

<style>

</style>

