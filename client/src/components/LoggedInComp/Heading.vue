<template lang="html">
  <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
              </button>
              <a class="navbar-brand page-scroll"><img width="35px"></a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                  <li>
                      <img :src="objUser.profilePic"></img>
                  </li>
                  <li>
                      <a class="page-scroll" href="/">Home</a>
                  </li>
                  <li>
                      <a class="page-scroll" href = "#">{{ objUser.name }}</a>
                  </li>
                  <li>
                      <a class="page-scroll" href="/logout">Logout</a>
                  </li>
                  <li>
                      <a class="page-scroll" href="/create-battle">Create Battle</a>
                  </li>
              </ul>
          </div>
          <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
  </nav>
</template>

<script>
import jwt from 'jwt-decode'
export default {
  data() {
    return {
      objUser: ''
    }
  },
  method: {
    setUser() {
      if(localStorage.getItem("token") !== null) {
        console.log("Fired");
        this.objUser = jwt(localStorage.getItem("token"))._doc
      }
      else
        this.objUser = ''
    }
  },
  mounted: function() {
    if(localStorage.getItem("token") !== null)
      this.objUser = jwt(localStorage.getItem("token"))._doc
    else
      this.objUser = ''
  },
  name: 'HeadingLogin'
}
</script>

<style lang="css">
</style>
