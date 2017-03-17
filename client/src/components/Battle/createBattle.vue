<template lang="html">
    <div class="create-battle">
      <Heading></Heading>

      <header>
          <div class="header-content">
              <div class="header-content-inner">
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                  <a href="#about" class="btn btn-primary btn-xl page-scroll">Detail Battle</a>
              </div>
          </div>
      </header>

      <section class="bg-primary" id="about">
          <div class="container">
              <div class="row">
                  <div class="col-lg-8 col-lg-offset-2 text-center">
                      <h2 class="section-heading">ABOUT THIS BATTLE</h2>
                      <hr class="light">
                      <br><br>
                  </div>
              </div>
          </div>

          <div class="container">
              <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-4 col-md-offset-4">
                      <div class="well well-sm">
                          <div class="row">
                              <div class="col-sm-6 col-md-4">
                                  <img src="https://unsplash.it/200/300/?blur" alt="" class="img-rounded img-responsive" />
                              </div>
                              <div class="col-sm-6 col-md-8">
                                <form>
                                  Name : <input type="text" v-model="battle.name"> <br>
                                  Descriptions : <input type="text" v-model="battle.description"> <br>
                                  Place : <input type="text" v-model="battle.place"> <br>
                                  Time : <input type="text" v-model="battle.time"> <br>
                                  Category Name : <input type="text" v-model="battle.category_name"> <br>
                                  Category Tipe : <input type="text" v-model="battle.catagory_tipe"> <br>
                                  Photo : <input type="text" v-model="battle.photo"> <br>
                                  <br><br>
                                  <button type="button" v-on:click = "createBattle">Submit</button>
                                </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>



      <Footing></Footing>
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
      axios.post('http://localhost:3000/api/competitions/', this.battle)
      .then((res) => {
        window.location.href = '/list-battle'
      }).catch((err)=>{
        window.location.href = '/create-battle'
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

  form {
    color: #000;
  }

</style>
