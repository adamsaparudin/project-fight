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
      objUser: ''
    }
  },
  name: 'app',
  methods: {},
  mounted: function() {
    if(localStorage.getItem("token") !== null)
      this.objUser = jwt(localStorage.getItem("token"))._doc
    else
      this.objUser = ''
  }
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
