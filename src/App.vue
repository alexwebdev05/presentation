<script>
import axios from 'axios';

// Components
import lButton from './components/langButton.vue'
import button from './components/button.vue'
import card from './components/card.vue'
import slider from './components/slider.vue'
import myFooter from './components/footer.vue'
import { sliderContent } from './components/index'
  
export default {
  name: 'App',
  data() {
    return {
      language: this.$i18n.locale,
      sliderContent
    }
  },
  components: {
    LButton: lButton,
    Button: button,
    Card: card,
    Slider: slider,
    MyFooter: myFooter
  },
  methods: {
    downloadPdf() {
      axios({
        method: 'get',
        url: 'CV.pdf',
        responseType: 'blob'
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'CV.pdf');
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}

// Styles
import './assets/styles/me.css'
import './assets/styles/projects.css'
import './assets/styles/studies.css'
import './assets/styles/knowledges.css'

import './assets/styles/text.css'

</script>

<template>
  
  <div id="contaier"  class="content">

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
    <LButton></LButton>
    
    <!-- Me -->
    <section id="meContainer">
      <article>
        <div>
          <h2 v-t="'home.greeting'" class="title phone-center"></h2>
          <h2 v-t="'home.specialization'" class="subtitle"></h2>
          <p v-t="'home.beautifulText'"></p>
        </div>
        <div id="photoCv">
          <img id="personalPhoto" :src="$t('home.img')" alt="">
          <Button @click="downloadPdf" v-t="'home.cv'"></Button>
        </div>
      </article>

      <div id="aboutMeContainer">
        <div id="contact-buttons">
          <a :href="$t('contact.linkedin.url')" target="_blank"><Button><img class="logoButton" :src="$t('contact.linkedin.img')"><p v-t="'contact.linkedin.name'"></p></Button></a>
          <a :href="$t('contact.github.url')" target="_blank"><Button><img class="logoButton" :src="$t('contact.github.img')"><p v-t="'contact.github.name'"></p></Button></a>
        </div>

        <div class="textContainer">
          <h1 class="title2" v-t="'home.aboutMeTitle'"></h1>
          <p v-t="'home.aboutMeText'"></p>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projContainer">
      <h1 class="title2" v-t="'projects.title'"></h1>
      <div>
        <Card :imagePath="$t('projects.project1.path')" :imageUrl="$t('projects.project1.url')"></Card>
      </div>
    </section>

    <!-- Studies -->
    <section id="studiesContainer">
      <h1 class="title2" v-t="'studies.title'"></h1>
      <div>
        <p><span v-t="'studies.slot3.name'"></span><span v-t="'studies.slot3.center'"></span><span v-t="'studies.slot3.date'"></span></p>
        <p><span v-t="'studies.slot2.name'"></span><span v-t="'studies.slot2.center'"></span><span v-t="'studies.slot2.date'"></span></p>
        <p><span v-t="'studies.slot1.name'"></span><span v-t="'studies.slot1.center'"></span><span v-t="'studies.slot1.date'"></span></p>
      </div>
    </section>

    <!-- Knowledges -->
     <section id="knowledgesContainer">
      <h1 class="title2" v-t="'knowledges.title'"></h1>
      <div class="knowledgesContent">
        <div class="textContainer">
          <h1 class="title2" v-t="'knowledges.part1.title'"></h1>
          <p v-t="'knowledges.part1.text'"></p>
        </div>
        <Slider :sliderContent="sliderContent.slider1"  class="web-dev-slider-r shadowed-left" />
      </div>

      <div class="knowledgesContent phone-rev">
        <Slider :sliderContent="sliderContent.slider2"  class="web-dev-slider-r shadowed-left" />
        <div class="textContainer">
          <h1 class="title2" v-t="'knowledges.part2.title'"></h1>
          <p v-t="'knowledges.part2.text'"></p>
        </div>
      </div>

      <div class="knowledgesContent">
        <div class="textContainer">
          <h1 class="title2" v-t="'knowledges.part3.title'"></h1>
          <p v-t="'knowledges.part3.text'"></p>
        </div>
        <Slider :sliderContent="sliderContent.slider3"  class="web-dev-slider-r shadowed-left" />
      </div>
     </section>

     <!-- Contact -->
    <section>
      <div id="contact">
        <section class="cont-sections">
          <a href="https://linkedin.com/in/álex-frías-angulo-34b1b3271" target="_blank"><Button><img class="logoButton" :src="$t('contact.linkedin.img')"><p v-t="'contact.linkedin.name'"></p></Button></a>
          <p class="margin-top" v-t="'contact.linkedin.contName'"></p>
        </section>
          
        <section class="cont-sections">
          <a href="https://github.com/alexwebdev05" target="_blank" class="text2 black-text"><Button><img class="logoButton" :src="$t('contact.github.img')"><p v-t="'contact.github.name'"></p></Button></a>
          <p class="margin-top" v-t="'contact.github.contName'"></p>
        </section>

        <section class="cont-sections">
          <a @click="copy"><Button><img class="logoButton" :src="$t('contact.mail.img')"><p v-t="'contact.mail.name'"></p></Button></a>
          <p class="margin-top" v-t="'contact.mail.contName'"></p>
        </section>
        
      </div>
    </section>

     <!-- Footer -->
     <MyFooter v-t="'footer.text'"></MyFooter>

  </div>

</template>

<style>

:root {
  /* Containers gradient */
  --gradient-col1: rgba(3, 49, 201, 0.4);
  --gradient-col2: rgba(17, 239, 255, 0.4);

  /* Text */
  --text-color: white;
  --underline-col1: rgb(0, 17, 255);
  --underline-col2: rgb(184, 0, 201);

  /* Other */
  --shadow: rgb(0, 0, 0, 0.5);
}

* {
  margin: 0;
  padding: 0;
  color: var(--text-color);
}

body {
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #191724;
}

::-webkit-scrollbar-thumb {
  background-color: #515268;
  border-radius: 20px;
  border: 3px solid #272435;
}

#app {
  margin: 0 25rem;
  display: flex;
  justify-content: center
}

#contaier {
  
  max-width: 60rem;
}

/* .content {
  background-color: rgb(128, 128, 128, 0.1);
} */

.logoButton {
  width: 1.5rem;
  margin-right: 0.5rem;
}

.textContainer {
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, var(--gradient-col1), var(--gradient-col2)) ;
  filter: drop-shadow(-6px 10px 5px var(--shadow));

  flex: 0.55;
}
/* big screen */


/* Small screens */
@media (max-width: 1450px) {
  #app {
    margin: 0 15rem;
  }
}

@media (max-width: 1150px) {
  #app {
    margin: 0 10rem;
  }
}

@media (max-width: 980px) {
  #app {
    margin: 0 3rem;
  }
}

/* Phone */
@media (max-width: 750px) {
  .title {
    font-size: 2.5rem;
  }

  .title2 {
    font-size: 1.5rem;
  }

  #meContainer article {
    text-align: center;
    flex-direction: column;
  }

  .phone-center {
    width: 100%;
  }

  #personalPhoto {
    width: 10rem;
  }

  #contact-buttons {
    display: none;
  }

  #aboutMeContainer {
    display: contents;
    justify-content: center
  }

  .knowledgesContent {
    flex-direction: column;
  }

  .phone-rev {
    flex-direction: column-reverse;
  }

  #contact {
    flex-direction: column;
  }

  .margin-top {
    margin: 0.5rem 0 2rem 0;
  }
}

@media (max-width: 500px) {
  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
}

</style>