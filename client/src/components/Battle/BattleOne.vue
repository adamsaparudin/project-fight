<template lang="html">
  <div class="BattleOne">
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
                                <div class="panel panel-danger">
                                    <ul class="list-group">
                                      <li class="list-group-item active">Battle Name:</li>
                                      <li class="list-group-item active">... Tinju ...</li>
                                      <li class="list-group-item active">Category:</li>
                                      <li class="list-group-item active">... Duel berat ...</li>
                                      <li class="list-group-item active">Start Date:</li>
                                      <li class="list-group-item active">... Coming soon ...</li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div class="container">
           <div class="row">
               <div class="col-lg-8 col-lg-offset-2 text-center">
                  <a href="#" class="page-scroll btn btn-default btn-xl sr-button">Join</a>
               </div>
           </div>
       </div>
    </section>

    <Footing></Footing>
  </div>
</template>

<script>
import Heading from '../LoggedInComp/Heading'
import Footing from '../Footing'
export default {


  components: {
    Heading,
    Footing
  }
}
</script>

<style lang="css">
</style>
