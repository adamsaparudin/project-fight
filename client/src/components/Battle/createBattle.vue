<template lang="html">
    <div class="create-battle">
      <form>
        <input type="text" v-model="battle.name">
        <input type="text" v-model="battle.description">
        <input type="text" v-model="battle.place">
        <input type="text" v-model="battle.time">
        <input type="text" v-model="battle.category_name">
        <input type="text" v-model="battle.catagory_tipe">
        <input type="text" v-model="battle.photo">
        <br><br>
        <button type="button" v-on:click = "createBattle">Submit</button>
      </form>
    </div>
</template>

<script>

import axios from 'axios'
import Heading from '../LoggedInComp/Heading'
import Footing from '../Footing'

export default {
  data(){
    return {
      battle : {
        name : '',
        description : '',
        place : '',
        time : '',
        category_name : '',
        catagory_tipe : '',
        photo : ''
      }
    }
  },
  methods : {
    createBattle (){
      axios.post('http://localhost:3000/api/competitions/',battle)
      .then((res) => {
        window.location.href = '/list-battle'
      }).catch((err)=>{
        window.location.href = '/create-batlle'
      })
    }
  },
  components : {
    Heading,
    Footing
  }
}
</script>

<style lang="css">
</style>
