import { images } from '../components'

export const messages = {
  es: {
    home: {
      greeting: "¡Hola! Soy Álex",
      specialization: "{'<'}Desarrollo web, cloud, redes y sistemas{'/>'}",
      beautifulText: "Soy muy trabajador y me esfuerzo mucho para aprender y formarme en la mayor cantidad de areas posibles.",
      img: images.PersonalPhoto,
      cv: "Descargar CV",
      aboutMeTitle: "Sobre mí",
      aboutMeText: "Soy un estudiante de ASIR al que le apasiona el desarrollo web, ya que siempre me ha gustado crear y diseñar, por ello diseño todas mis webs. Además, al estar estudiando en ASIR, tengo una buena base en el desarrollo de servidores. Por último, soy una persona a la que le gusta investigar sobre Linux y ciberseguridad."
    },
    projects: {
      title: 'Proyectos',
      project1: {
        name: '3dForniture',
        path: 'project1.png',
        url: 'https://994ca11c.3dforniture.pages.dev/'
      }
    },
    knowledges: {
      title: "Conocimientos",
      part1: {
        title: 'Desarrollo web',
        text: 'El desarrollo web es mi punto fuerte ya que es mi apartado favorito de la informática. Tengo conocimientos sólidos en Html, Css, JavaScript y me se manejar bien con React, Vue y Three.js para modelos 3D'
      },
      part2: {
        title: 'Redes y sistemas',
        text: 'Tengo la capacidad de hacer bases de datos en MySQL, MongoDB y Oracle ya sea en local como en la nube con AWS. También sé diseñar y hacer la red de ordenadores empresas pequeñas.'
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
        name: "GitHub",
        contName: 'alexwebdev05',
        img: images.githubLogo
      },
      mail: {
        name: "Email",
        contName: "alexwebdev05{'@'}proton.me",
        img: images.mailLogo
      }
    },
    footer: {
      text: 'Esta página esta hecha por mi y el código esta publicado en mi GitHub.'
    },
  },
  en: {
    home: {
      greeting: "¡Hello! I'm Álex",
      specialization: `{'<'}Web development, cloud, networks and systems{'/>'}`,
      beautifulText: "I am very hardworking and I strive a lot to learn and train myself in as many areas as possible.",
      img: images.PersonalPhoto,
      cv: "Download CV",
      aboutMeTitle: "About me",
      aboutMeText: "I'm a student of network systems administration who is passionate about web development, because I love to create and design. Besides, studying network systems administration, I have a good base on database development. Finally, I like to investigate about Linux and cibersecurity."
    },
    projects: {
      title: 'Projects',
      project1: {
        name: '3dForniture',
        path: '../assets/media/project1.png',
        url: 'https://994ca11c.3dforniture.pages.dev/'
      },
    },
    knowledges: {
      title: "Knowledges",
      part1: {
        title: "Web development",
        text: "Web development is my main skill because it is my favourite part of computing. I have solid skills with Html Css and JavaScript, and I'm good with React, Vue and Three.js for 3D models."
      },
      part2: {
        title: "Networks and systems",
        text: "I know how to make MySQL, MongoDB and Oracle databases locally or in the cloud with AWS. Also, I know how to set up the network for small companies."
      },
      part3: {
        title: "Art of design",
        text: "I have taken a middle grade of digital prepress, which gives me the knowledge about design and how to use the images. It gives me an advantage to make attractive designs for my websites.",
        img: images.part3Img
      }
    },
    contact: {
      title: "Contact",
      linkedin: {
        name: "Linkedin",
        contName: "Álex Frías Angulo",
        img: images.linkedinLogo
      },
      github: {
        name: "GitHub",
        contName: "alexwebdev05",
        img: images.githubLogo
      },
      mail: {
        name: "Email",
        contName: "alexwebdev05{'@'}proton.me",
        img: images.mailLogo
      }
    },
    footer: {
      text: `This page was made by me, and the code is in my GitHub.`
    },
  }

}
