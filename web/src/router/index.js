import Vue from 'vue'
import VueRouter from 'vue-route'
import example from '../store/example'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: example }
  // TODO Need 404 page for * path
]

export default new VueRouter({
  mode: 'history',
  routes
})
