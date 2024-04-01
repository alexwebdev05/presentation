<template>
  <div id="content">

    <!-- Background -->
    <section class="father-background">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div class="bubbles-container">
        <div class="bubble1"></div>
        <div class="bubble2"></div>
        <div class="bubble3"></div>
        <div class="bubble4"></div>
        <div class="bubble5"></div>
        <div class="interactive"></div>
      </div>
    </section>

    <!-- Lenguage -->
    <!-- <langBlue></langBlue> -->

    <!-- Home -->
    <section id="home">
      <article id="greeting-presentation-photo-cv">
        <div id="greeting-presentation">
          <h1 class="title1 underline shadowed-left resp-centered">{{ home.greeting }}</h1>
          <p class="text1 bold shadowed-left resp-centered">{{ home.specialization }}</p>
          <p class="text2 margin-top shadowed-left">{{ home.beautifullText }}</p>
        </div>
        <div id="photo-cv">
          <img id="personalPhoto" class="shadowed-left" :src="home.img" alt="">
          <a href="./assets/media/CV.pdf" download="cv.pdf"><buttonBlue class="text2 black-text">{{ home.cv }}</buttonBlue></a>
        </div>
      </article>

      <article id="contact-buttons-about-me">
        <div id="contact-buttons">
          <a href="https://linkedin.com/in/álex-frías-angulo-34b1b3271" target="_blank"><buttonBlue  class="text2 black-text"><img :src="contact.linkedin.img" class="logo">{{ contact.linkedin.name }}</buttonBlue></a>
          <a href="https://github.com/Sniffsec" target="_blank" class="text2 black-text"><buttonBlue class="text2 black-text"><img :src="contact.github.img" class="logo">{{ contact.github.name }}</buttonBlue></a>
        </div>
        <div id="about-me">
          <divBlue>
            <h1 class="title2 underline2">{{ home.aboutMeTitle }}</h1>
            <p class="text2 margin-top">{{ home.aboutMeText }}</p>
          </divBlue>
        </div>
      </article>
      <picture id="next" @click="scrollKnowledge">
        👇
      </picture>
    </section>

    <!-- Knowledges -->
    <section id="knowledges">
      <h1 class="title2 underline2 shadowed-left">{{ knowledges.title }}</h1>
      <article id="web-dev">
        <divBlue>
          <h1 class="title2 underline2">{{ knowledges.part1.title }}</h1>
          <p class="text2">{{ knowledges.part1.text }}</p>
        </divBlue>
        <sliderBlue :sliderContent="sliderContent.slider1" class="web-dev-slider-r shadowed-left"></sliderBlue>
      </article>

      <article id="networks">
        <sliderBlue :sliderContent="sliderContent.slider2" class="web-dev-slider-l shadowed-left"></sliderBlue>
        <divBlue>
          <h1 class="title2 underline2">{{ knowledges.part2.title }}</h1>
          <p class="text2">{{ knowledges.part2.text }}</p>
        </divBlue>
      </article>
      
      <article id="design">
        <divBlue>
          <h1 class="title2 underline2">{{ knowledges.part3.title }}</h1>
          <p class="text2">{{ knowledges.part3.text }}</p>
        </divBlue>
        <img :src="knowledges.part3.img" alt="My design" id="mydesign" class="shadowed-left">
      </article>
    </section>

    <!-- Contact -->
    <section id="contact">
      <h1 class="title2 underline2 shadowed-left">{{ contact.title }}</h1>
      <div id="final-contact-buttons" class="margin-top">

        <section class="cont-sections">
          <a href="https://linkedin.com/in/álex-frías-angulo-34b1b3271" target="_blank"><buttonBlue  class="text2 black-text"><img :src="contact.linkedin.img" class="logo">{{ contact.linkedin.name }}</buttonBlue></a>
          <p class="text2 black-text margin-top shadowed-left">{{ contact.linkedin.contName }}</p>
        </section>
          
        <section class="cont-sections">
          <a href="https://github.com/Sniffsec" target="_blank" class="text2 black-text"><buttonBlue class="text2 black-text"><img :src="contact.github.img" class="logo">{{ contact.github.name }}</buttonBlue></a>
          <p class="text2 black-text margin-top shadowed-left">{{ contact.github.contName }}</p>
        </section>

        <section class="cont-sections">
          <a @click="copy"><buttonBlue class="text2 black-text"><img :src="contact.mail.img" class="logo">{{ contact.mail.name }}</buttonBlue></a>
          <p class="text2 black-text margin-top shadowed-left">{{ contact.mail.contName }}</p>
        </section>
        
      </div>
    </section>

    <!-- Footer -->
    <footerBlue>{{ footer.text }}</footerBlue>

  </div>
</template>

<script>
// Objects
import {components} from './js/router.js'

// Lenguages
import { langData } from './lang/esp-eng'

// Methods
import { scrollKnowledge, copy } from './js/methods.js'

export default {
  name: 'App',
  components: {
    'buttonBlue': components.buttonCollection,
    'divBlue': components.DivCollection,
    'sliderBlue': components.sliderCollection,
    'footerBlue': components.footerCollection,
    'langBlue': components.langCollection
  },
  data() {
    return langData
  },
  methods: {
    scrollKnowledge,
    copy
  }
}

</script>

<style>

* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

a {
  text-decoration: none;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  height: 2rem;
  margin-right: 0.5rem;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #191724; /* color del track */
}

::-webkit-scrollbar-thumb {
  background-color: #515268; /* color del thumb */
  border-radius: 20px;
  border: 3px solid #272435; /* crea un padding alrededor del thumb */
}

</style>