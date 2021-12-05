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
import SeoulMain from '/views/seoul/SeoulMain'
import Jeju from '/views/jeju/Jeju'
import Busan from '/views/busan/Busan'
import Daegu from '/views/daegu/Daegu'
import Jeonju from '/views/jeonju/Jeonju'
import Yeosu from '/views/yeosu/Yeosu'
import Cheonggyecheon from '/views/seoul/Cheonggyecheon'
import Gyeongbokgung from '/views/seoul/Gyeongbokgung'
import HanokVillage from '/views/seoul/HanokVillage'
import Insadong from '/views/seoul/Insadong'
import NaksanPark from '/views/seoul/NaksanPark'
import NSeoulTower from '/views/seoul/NSeoulTower'
import SeoulForest from '/views/seoul/SeoulForest'
import Yeouido from '/views/seoul/Yeouido'


Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/', component: Home},
    {path:'/about', component: About},
    {path:'/contact', component: Contact},
    {path:'/tours', component: Tours},
    {path:'/SeoulMain', component: SeoulMain},
    {path:'/Jeju', component: Jeju},
    {path:'/Busan', component: Busan},
    {path:'/Daegu', component: Daegu},
    {path:'/Jeonju', component: Jeonju},
    {path:'/Yeosu', component: Yeosu},
    {path:'/Cheonggyecheon', component: Cheonggyecheon},
    {path:'/Gyeongbokgung', component: Gyeongbokgung},
    {path:'/HanokVillage', component: HanokVillage},
    {path:'/Insadong', component: Insadong},
    {path:'/NaksanPark', component: NaksanPark},
    {path:'/NSeoulTower', component: NSeoulTower},
    {path:'/SeoulForest', component: SeoulForest},
    {path:'/Yeouido', component: Yeouido},
    {path:'*', component: NotFound}
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
