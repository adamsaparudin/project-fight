<template>
  <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import FBSignInButton from 'vue-facebook-signin-button'
Vue.use(FBSignInButton)
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,public_profile',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      FB.api('/me', {fields: 'name,email,gender,picture'}, dude => {
        axios.post('http://localhost:3000/api/users', dude)
        .then( (res) => {
          localStorage.setItem('token', res.data.token);
          window.location = "http://localhost:8080/"
        }).catch( (err) => {
          console.log(err);
        })
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}

</script>

<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
