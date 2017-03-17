<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import jwt from 'jwt-decode'
export default {
  data() {
    return {
      test: "test",
      objUser: jwt(localStorage.getItem("token"))._doc
    }
  },
  name: 'app',
  methods: {}
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
