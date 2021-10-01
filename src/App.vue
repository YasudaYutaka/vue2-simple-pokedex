<template>
  <v-app>
    <AppToolBar />
    
    <v-main>
      <transition name="slide" type="animation" appear>
        <router-view />
      </transition>
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
  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    transition: opacity .5s;
    opacity: 0;
  }

  @keyframes slide-in {
      from {
          transform: translateY(20px);
      }
      to {
          transform: translateY(0);
      }
  }

  @keyframes slide-out {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(20px);
      }
  }
</style>

