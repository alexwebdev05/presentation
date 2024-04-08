export function scrollKnowledge() {
    const knowledge = document.getElementById('knowledges')
    knowledge.scrollIntoView({ behavior: 'smooth' })
}

export function copy() {
    navigator.clipboard.writeText('sniffsec@proton.me')
}

import axios from 'axios';
export function downloadPdf() {
    axios({
        method: 'get',
        url: '../../public/CV.pdf',
        responseType: 'blob'
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url;
        link.setAttribute('download', 'CV.pdf')
        document.body.appendChild(link)
        link.click()
      })
      .catch((error) => {
        console.log(error)
      })
}

export function changeLang() {
  this.language = this.language === 'en' ? 'es' : 'en';
  this.$i18n.locale = this.language;
}