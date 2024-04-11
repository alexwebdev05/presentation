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

    <!-- Language -->
    <langBlue @click="changeLang" style="z-index: 99;"></langBlue>

    <!-- Home -->
    <section id="home">
      <article id="greeting-presentation-photo-cv">
        <div id="greeting-presentation">
          <h1 class="title1 underline shadowed-left resp-centered" v-t="'home.greeting'"></h1>
          <p class="text1 bold shadowed-left resp-centered" v-t="'home.specialization'"></p>
          <p class="text2 margin-top shadowed-left" v-t="'home.beautifulText'"></p>
        </div>
        <div id="photo-cv">
          <img id="personalPhoto" class="shadowed-left" :src="$t('home.img')" alt="">
          <buttonBlue @click="downloadPdf" class="text2 black-text" v-t="'home.cv'"></buttonBlue>
        </div>
      </article>

      <article id="contact-buttons-about-me">
        <div id="contact-buttons">
          <a href="https://linkedin.com/in/álex-frías-angulo-34b1b3271" target="_blank"><buttonBlue  class="text2 black-text"><img :src="$t('contact.linkedin.img')" class="logo"><p v-t="'contact.linkedin.name'"></p></buttonBlue></a>
          <a href="https://github.com/Sniffsec" target="_blank" class="text2 black-text"><buttonBlue class="text2 black-text"><img :src="$t('contact.github.img')" class="logo"><p v-t="'contact.github.name'"></p></buttonBlue></a>
        </div>
        <div id="about-me">
          <div id="divRight-content">
            <h1 class="title2 underline2" v-t="'home.aboutMeTitle'"></h1>
            <p class="text2 margin-top" v-t="'home.aboutMeText'"></p>
          </div>
        </div>
      </article>
      <picture id="next" @click="scrollKnowledge">
        👇
      </picture>
    </section>

    <!-- Knowledges -->
    <section id="knowledges">
      <h1 class="title2 underline2 shadowed-left" v-t="'knowledges.title'"></h1>
      <article id="web-dev">
        <div id="divRight-content">
          <h1 class="title2 underline2" v-t="'knowledges.part1.title'"></h1>
          <p class="text2" v-t="'knowledges.part1.text'"></p>
        </div>
        <sliderBlue :sliderContent="sliderContent.slider1" class="web-dev-slider-r shadowed-left"></sliderBlue>
      </article>

      <article id="networks">
        <sliderBlue :sliderContent="sliderContent.slider2" class="web-dev-slider-l shadowed-left"></sliderBlue>
        <div id="divRight-content">
          <h1 class="title2 underline2" v-t="'knowledges.part2.title'"></h1>
          <p class="text2" v-t="'knowledges.part2.text'"></p>
        </div>
      </article>
      
      <article id="design">
        <div id="divRight-content">
          <h1 class="title2 underline2" v-t="'knowledges.part3.title'"></h1>
          <p class="text2" v-t="'knowledges.part3.text'"></p>
        </div>
        <img :src="$t('knowledges.part3.img')" alt="My design" id="mydesign" class="shadowed-left">
      </article>
    </section>

    <!-- Contact -->
    <section id="contact">
      <h1 class="title2 underline2 shadowed-left"></h1>
      <div id="final-contact-buttons" class="margin-top">

        <section class="cont-sections">
          <a href="https://linkedin.com/in/álex-frías-angulo-34b1b3271" target="_blank"><buttonBlue  class="text2 black-text"><img :src="$t('contact.linkedin.img')" class="logo"><p v-t="'contact.linkedin.name'"></p></buttonBlue></a>
          <p class="text2 black-text margin-top shadowed-left" v-t="'contact.linkedin.contName'"></p>
        </section>
          
        <section class="cont-sections">
          <a href="https://github.com/Sniffsec" target="_blank" class="text2 black-text"><buttonBlue class="text2 black-text"><img :src="$t('contact.github.img')" class="logo"><p v-t="'contact.github.name'"></p></buttonBlue></a>
          <p class="text2 black-text margin-top shadowed-left" v-t="'contact.github.contName'"></p>
        </section>

        <section class="cont-sections">
          <a @click="copy"><buttonBlue class="text2 black-text"><img class="logo" :src="$t('contact.mail.img')"><p v-t="'contact.mail.name'"></p></buttonBlue></a>
          <p class="text2 black-text margin-top shadowed-left" v-t="'contact.mail.contName'"></p>
        </section>
        
      </div>
    </section>

    <!-- Footer -->
    <footerBlue v-t="'footer.text'"></footerBlue>

  </div>
</template>

<script>

// Objects
import { components } from './js/modules'

// Methods
import { scrollKnowledge, copy, downloadPdf, changeLang } from './js/methods'

// Sliders
import { sliderContent } from './js/modules'

export default {
  name: 'App',
  data() {
    return {
      language: this.$i18n.locale,
      sliderContent
    }
  },
  components: {
    'buttonBlue': components.buttonCollection,
    'sliderBlue': components.sliderCollection,
    'footerBlue': components.footerCollection,
    'langBlue': components.langCollection
  },
  methods: {
    scrollKnowledge,
    copy,
    downloadPdf,
    changeLang
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

#divRight-content {
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: linear-gradient(45deg, rgba(3, 49, 201, 0.4), rgba(17, 239, 255, 0.4)) ;
    filter: drop-shadow(-6px 10px 5px rgba(0, 0, 0, 0.5));
}

.logo {
  height: 2rem;
  margin-right: 0.5rem;
}

@media screen and (max-width: 920px) {
  .logo {
    height: 1.5rem;
  }
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