import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue';
import PokemonList from '../components/PokemonList.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Pokedex',
    name: 'PokemonList',
    component: PokemonList
  },
]

const router = new VueRouter({
  routes
})

export default router
