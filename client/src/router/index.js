import Vue from 'vue'
import Router from 'vue-router'
//import jwt from 'jwt-simple'
import jwt_decode from 'jwt-decode'
import Hello from '@/components/Hello'
import Login from '@/components/Login'

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
      name: 'Hello',
      component: Hello,
      beforeEnter: (to, from, next) => {
        //let decoded = jwt.decode(localStorage.getItem("token"), "Kelompok3Hacktiv8")
        if(localStorage.getItem("token") !== null) {
          console.log(jwt_decode(localStorage.getItem("token"))._doc);
          next()
        }
        else
          window.location.href='/login'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ],
})
