import Vue from 'vue'
import Router from 'vue-router'
import jwt_decode from 'jwt-decode'

import Home from '@/components/Home'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import ListBattle from '@/components/Battle/ListBattle'
import BattleOne from '@/components/Battle/BattleOne'
import HomeProfile from '@/components/Profile/HomeProfile'
import CreateBattle from '@/components/Battle/CreateBattle'

Vue.use(Router)

function checkToken(to, from, next) {
  //let decoded = jwt.decode(localStorage.getItem("token"), "Kelompok3Hacktiv8")
  if(localStorage.getItem("token") !== null) {
    console.log(jwt_decode(localStorage.getItem("token"))._doc);
    next()
  }
  else
    to('/login')
}


export default new Router({
  mode: "history",

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/create-battle',
      name: 'CreateBattle',
      component: CreateBattle,
      beforeEnter: checkToken
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: HomeProfile,
      beforeEnter: (to, from, next) => {
        //let decoded = jwt.decode(localStorage.getItem("token"), "Kelompok3Hacktiv8")
        if(localStorage.getItem("token") !== null) {
          next()
        }
        else
          window.location.href='/login'
      }
    },
    {
      path: '/list-battle',
      name: 'List-Battle',
      component: ListBattle,
      beforeEnter: (to, from, next) => {
        //let decoded = jwt.decode(localStorage.getItem("token"), "Kelompok3Hacktiv8")
        if(localStorage.getItem("token") !== null) {
          next()
        }
        else
          window.location.href='/login'
      }
    },
    {
      path: '/battle/:id',
      name: 'Battle',
      component: BattleOne,
      beforeEnter: (to, from, next) => {
        //let decoded = jwt.decode(localStorage.getItem("token"), "Kelompok3Hacktiv8")
        if(localStorage.getItem("token") !== null) {
          next()
        }
        else
          window.location.href='/login'
      }
    }
  ],
})
