// import './js/'
// import './assets/scss/main.scss'
// import './assets/css/main.css'

// import Vue from 'vue'
window.Vue = require('vue')
import store from './store/index'
import router from './router'
import App from './App.vue'

// Vue.component('example-component', require('./components/Example.vue').default)

new Vue({
  // data () {
  //   return {
  //     component: false,
  //   }
  // },
  el: '#app',
  router,
  store,
  render: h => h(App) 
})
