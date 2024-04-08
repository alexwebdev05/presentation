// Images
import { images } from '../js/modules'
import { langOption } from '../js/modules'

  let langData
  if (langOption.esp == true) {
    langData = {
      home: {
        greeting: "¡Hola! Soy Álex",
        specialization: "<Administrador de sistemas en red/>",
        beautifullText: "El mundo de la informática y todo su alrededor desprende una cantidad de posibilidades inimaginables con las cuales se pueden hacer cosas increíbles.",
        img: images.PersonalPhoto,
        cv: "Descargar CV",
        aboutMeTitle: "Sobre mí",
        aboutMeText: "Soy un estudiante de ASIR al que le apasiona el desarrollo web, ya que es un ámbito en el que se pueden crear obras visuales espectaculares. Además, al estar estudiando en ASIR, tengo una buena base en el desarrollo de servidores. Por último, soy una persona a la que le gusta investigar sobre Linux y el pentesting."
      },
      knowledges: {
        title: "Conocimientos",
        part1: {
          title: 'Desarrollo web',
          text: 'El desarrollo web es mi punto fuerte ya que es mi apartado favorito de la informática. Tengo conocimientos sólidos en HTML y CSS, y conocimientos intermedios en JavaScript y Vue.js.'
        },
        part2: {
          title: 'Redes y sistemas',
          text: 'Tengo la capacidad de hacer bases de datos en MySQL, MongoDB y Oracle ya sea en local como en la nube con AWS. También sé diseñar y hacer la red de ordenadores para una empresa pequeña.'
        },
        part3: {
          title: 'Artes gráficas',
          text: 'Cursé un grado medio de Preimpresión, el cual me ha dado experiencia en el área del diseño y la manera de tratar las imágenes e impresiones. De esta manera, tengo la ventaja de poder hacer diseños atractivos para mis páginas web.',
          img: images.part3Img
        }
      },
      contact: {
        title: 'Contacto',
        linkedin: {
          name: "Linkedin",
          contName: 'Álex Frías Angulo',
          img: images.linkedinLogo
        },
        github: {
          name: "Github",
          contName: 'Sniffsec',
          img: images.githubLogo
        },
        mail: {
          name: "Email",
          contName: 'sniffsec@proton.me',
          img: images.mailLogo
        }
      },
      footer: {
        text: 'Esta página ha sido creada completamente por mí. El código de la misma es abierto y se puede encontrar en mi GitHub.'
      },
      sliderContent: {
        slider1: [
          { name: 'Js', img: images.js },
          { name: 'Vue', img: images.vue },
          { name: 'Html', img: images.html },
          { name: 'Css', img: images.css }
        ],
        slider2: [
          { name: 'Mongo', img: images.mongodb },
          { name: 'Node', img: images.node },
          { name: 'MySQL', img: images.mysql },
          { name: 'Oracle', img: images.oracle }
        ]
      }
    }
  } else if (langOption.esp == false) {
    langData = {
      home: {
        greeting: "¡Hello! I'm Álex",
        specialization: "<Administrador de sistemas en red/>",
        beautifullText: "El mundo de la informática y todo su alrededor desprende una cantidad de posibilidades inimaginables con las cuales se pueden hacer cosas increíbles.",
        img: images.PersonalPhoto,
        cv: "Descargar CV",
        aboutMeTitle: "Sobre mí",
        aboutMeText: "Soy un estudiante de ASIR al que le apasiona el desarrollo web, ya que es un ámbito en el que se pueden crear obras visuales espectaculares. Además, al estar estudiando en ASIR, tengo una buena base en el desarrollo de servidores. Por último, soy una persona a la que le gusta investigar sobre Linux y el pentesting."
      },
      knowledges: {
        title: "Conocimientos",
        part1: {
          title: 'Desarrollo web',
          text: 'El desarrollo web es mi punto fuerte ya que es mi apartado favorito de la informática. Tengo conocimientos sólidos en HTML y CSS, y conocimientos intermedios en JavaScript y Vue.js.'
        },
        part2: {
          title: 'Redes y sistemas',
          text: 'Tengo la capacidad de hacer bases de datos en MySQL, MongoDB y Oracle ya sea en local como en la nube con AWS. También sé diseñar y hacer la red de ordenadores para una empresa pequeña.'
        },
        part3: {
          title: 'Artes gráficas',
          text: 'Cursé un grado medio de Preimpresión, el cual me ha dado experiencia en el área del diseño y la manera de tratar las imágenes e impresiones. De esta manera, tengo la ventaja de poder hacer diseños atractivos para mis páginas web.',
          img: images.part3Img
        }
      },
      contact: {
        title: 'Contacto',
        linkedin: {
          name: "Linkedin",
          contName: 'Álex Frías Angulo',
          img: images.linkedinLogo
        },
        github: {
          name: "Github",
          contName: 'Sniffsec',
          img: images.githubLogo
        },
        mail: {
          name: "Email",
          contName: 'sniffsec@proton.me',
          img: images.mailLogo
        }
      },
      footer: {
        text: 'Esta página ha sido creada completamente por mí. El código de la misma es abierto y se puede encontrar en mi GitHub.'
      },
      sliderContent: {
        slider1: [
          { name: 'Js', img: images.js },
          { name: 'Vue', img: images.vue },
          { name: 'Html', img: images.html },
          { name: 'Css', img: images.css }
        ],
        slider2: [
          { name: 'Mongo', img: images.mongodb },
          { name: 'Node', img: images.node },
          { name: 'MySQL', img: images.mysql },
          { name: 'Oracle', img: images.oracle }
        ]
      }
    }
  }
  export { langData }