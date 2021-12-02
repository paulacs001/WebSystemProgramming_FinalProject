import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '/scss/main.scss';
import VueRouter from 'vue-router';
import Home from '/views/Home'
import Contact from '/views/Contact'
import About from '/views/About'
import NotFound from '/views/NotFound'
import Tours from '/views/Tours'


Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/', component: Home},
    {path:'/about', component: About},
    {path:'/contact', component: Contact},
    {path:'/tours', component: Tours},
    {path:'*', component: NotFound}
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
