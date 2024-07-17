// Images
import linkedinLogo from "../assets/logos/linkedin.svg"
import githubLogo from "../assets/logos/github.svg"
import mailLogo from "../assets/logos/mail.svg"
import js from "../assets/logos/js.svg"
import vue from "../assets/logos/vue.svg"
import react from "../assets/logos/react.svg"
import html from "../assets/logos/html.svg"
import css from "../assets/logos/css.svg"
import mongodb from '../assets/logos/mongo.svg'
import node from '../assets/logos/nodejs.svg'
import mysql from '../assets/logos/mysql.svg'
import oracle from '../assets/logos/oracle.svg'
import PersonalPhoto from "../assets/media/photo-web.png"
import part3Img from '../assets/media/hand.png'

export const images = {
    linkedinLogo: linkedinLogo,
    githubLogo: githubLogo,
    mailLogo: mailLogo,
    js: js,
    vue: vue,
    react: react,
    html: html,
    css: css,
    mongodb: mongodb,
    node: node,
    mysql: mysql,
    oracle: oracle,
    PersonalPhoto: PersonalPhoto,
    part3Img: part3Img
}

// Components
import sliderCollection from "./slider.vue"
import buttonCollection from "./button.vue"
import footerCollection from './/footer.vue'
import langCollection from './langButton.vue'
import Card from './card.vue'

export const components = {
    sliderCollection: sliderCollection,
    buttonCollection: buttonCollection,
    footerCollection: footerCollection,
    langCollection: langCollection,
    Card: Card
}

// Slider content
export const sliderContent = {
    slider1: [
        { name: 'React', img: images.react },
        { name: 'Js', img: images.js },
        { name: 'Html', img: images.html },
        { name: 'Vue', img: images.vue }
        
    ],
    slider2: [
        { name: 'Mongo', img: images.mongodb },
        { name: 'Node', img: images.node },
        { name: 'MySQL', img: images.mysql },
        { name: 'Oracle', img: images.oracle }
    ]
}