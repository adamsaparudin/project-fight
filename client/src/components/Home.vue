<template lang="html">
  <div class="Homepage">
    <Heading></Heading>
    <header>
        <div class="header-content">
            <div class="header-content-inner">
              <br><br><br><br><br><br><br>
                <a href="#about" class="btn btn-primary btn-xl page-scroll">Find Out More</a>
            </div>
        </div>
    </header>

    <section class="bg-primary" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="section-heading">Join the battle!</h2>
                    <hr class="light">
                    <h3 class="text-faded">It's suitable for everyone who want to be a cool fighter!</h3><br>
                    <h4 class="text-faded">Be a winner for your life, love, and luck.</h4>
                    <h4 class="text-faded">Coz your life is a battle!</h4><br>
                    <h3 class="text-faded">Come on! Do what you love!</h3><br>
                    <a href="#services" class="page-scroll btn btn-default btn-xl sr-button">Get Started!</a>
                </div>
            </div>
        </div>
    </section>

    <aside id="services">
        <div class="container text-center">
            <div class="call-to-action">
                <br><br><br>
                <a href="#" class="btn btn-default btn-xl sr-button">Register Now!</a>
                <br><br><br>
            </div>
        </div>
    </aside>
    <Footing></Footing>
  </div>
</template>

<script>
import Heading from './Heading'
import Footing from './Footing'

export default {
  name: 'Home',
  components: {
    Heading,
    Footing
  }
}
</script>

<style lang="css">
</style>
