export function scrollKnowledge() {
    const knowledge = document.getElementById('knowledges')
    knowledge.scrollIntoView({ behavior: 'smooth' })
}

import { langData } from '../lang/esp-eng'
export function copy() {
    navigator.clipboard.writeText(langData.contact.mail.contName)
}