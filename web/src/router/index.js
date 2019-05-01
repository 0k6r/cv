import Vue from 'vue'
import VueRouter from 'vue-router'
import CV from '../components/CV.vue'

Vue.use(VueRouter)

// const routes = [
//   { path: '/', name: 'cv', component: CV }
//   // TODO Need 404 page for * path
// ]

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'cv', component: CV }
  ]
})
