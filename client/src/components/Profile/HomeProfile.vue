<template lang="html">
  <div class="HomeProfile">
    <Heading></Heading>
    <header>
        <div class="header-content">
            <div class="header-content-inner">
              <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <a href="#about" class="btn btn-primary btn-xl page-scroll">I'm Ready!</a>
            </div>
        </div>
    </header>

    <h1>{{UserOne.name}}</h1>
    <section class="bg-primary" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="section-heading">SELECT YOUR FAVORITE BATTLE</h2>
                    <hr class="light">
                    <br><br>
                    <form>
                        <div class="btn-group">
                            <label for="location" style="font-size: 13pt">Location:  </label>
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                select arena <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                               <li class="dropdown-plus-title">
                                   Jakarta
                                   <b class="pull-right glyphicon glyphicon-chevron-up"></b>
                               </li>
                               <li><a href="#">Monas</a></li>
                               <li><a href="#">Taman Menteng</a></li>
                               <li><a href="#">Gelora Bung Karno</a></li>
                               <li><a href="#">Lapangan Banteng</a></li>
                               <li class="divider"></li>
                               <li><a href="#">Pelabuhan Tanjung Priok</a></li>
                               <li><a href="#">Ancol</a></li>
                               <li><a href="#">Taman Hutan Penjaringan</a></li>
                           </ul>
                       </div>
                       <br><br>
                       <div class="btn-group">
                           <label for="category" style="font-size: 13pt">Category: </label>
                           <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                               select category <span class="caret"></span>
                           </button>
                           <ul class="dropdown-menu" role="menu">
                              <li class="dropdown-plus-title">
                                  Duel ringan
                                  <b class="pull-right glyphicon glyphicon-chevron-up"></b>
                              </li>
                              <li><a href="#">Catur</a></li>
                              <li><a href="#">Debat</a></li>
                              <li><a href="#">Coding</a></li>
                              <li><a href="#">Makan</a></li>
                              <li class="divider"></li>
                              <li class="dropdown-plus-title">
                                  Duel berat
                                  <b class="pull-right glyphicon glyphicon-chevron-up"></b>
                              </li>
                              <li><a href="#">Tinju</a></li>
                              <li><a href="#">Gulat</a></li>
                              <li><a href="#">Panco</a></li>
                          </ul>
                      </div>
                    </form>
                    <br>
                    <a href="#" class="page-scroll btn btn-default btn-xl sr-button">Submit</a>
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

  data (){
    return {
      UserOne : ''
    }
  },
  mounted : function() {
    this.getUserOne()
  },
  methods : {
    getUserOne() {
      axios.get('http://localhost:3000/api/users/' + this.$route.params.id)
        .then( (res) => {
          this.UserOne = res.data
        }).catch( (err) => {
          console.log(err);
        })
    }
  },
  components: {
    Heading,
    Footing
  }
}
</script>

<style lang="css">
</style>
