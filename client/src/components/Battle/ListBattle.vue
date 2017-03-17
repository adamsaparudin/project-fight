<template lang="html">
  <div class="ListBattle">
    <Heading></Heading>

    <header>
        <div class="header-content">
            <div class="header-content-inner">
              <br><br><br><br><br><br><br><br>
                <a href="#about" class="btn btn-primary btn-xl page-scroll">Choose Battle Now!</a>
            </div>
        </div>
    </header>

    <section class="bg-primary" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="section-heading">BATTLE LIST</h2>
                    <hr class="light">
                    <br><br>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div v-for="Battle in listBattle" class="col-md-3">
                    <div class="item">
                        <div class="content">
                            <a :href="'http://localhost:8080/battle/' + Battle._id">
                              <img style="width: 200px; height:300px;" :src="Battle.photo"></img></a>
                            <div>
                                <a href="#" style="color:#fff">{{ Battle.name }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br><br><br>

        <div class="container">
            <div class="row">
                <nav aria-label="Page navigation">
                  <ul class="pagination">
                    <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    <li><a href="#">1 </a></li>
                    <li><a href="#">2 </a></li>
                    <li><a href="#">3 </a></li>
                    <li><a href="#">4 </a></li>
                    <li><a href="#">5 </a></li>
                    <li><a href="#">6 </a></li>
                    <li><a href="#">7 </a></li>
                    <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                  </ul>
                </nav>
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
      listBattle : ''
    }
  },
  methods : {
    getListBattle (){
      axios.get('http://localhost:3000/api/competitions/')
        .then( (res) => {
          this.listBattle = res.data
        }).catch( (err) => {
          console.log(err);
        })
    }

  },
  mounted : function(){
    this.getListBattle()
  },
  components: {
    Heading,
    Footing
  }
}
</script>

<style lang="css">
</style>
