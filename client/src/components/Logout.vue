<template>
  <div class="logout">
    <h1>{{ msg }}</h1>

    <fbLogin></fbLogin>

  </div>
</template>

<script>
import fbLogin from './LoginFacebook'

export default {
  name: 'logout',
  data () {
    return {
      msg: 'Logout page'
    }
  },
  mounted: function() {
    this.logout()
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      window.location.href = "/"
    }
  },
  components: {
    fbLogin
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.fb-btn {
  padding: 10px 20px;
  background-color: #3b5998;
  color: #fff;
  border: solid 1px #fff;
  border-radius: 5px;
  font-size: 14px;
}
</style>
