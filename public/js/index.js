function qs (element) {
    return document.querySelector(element)
}

let $main = qs('.container')
let $subtitle = qs('.subtitulo')
let $link = qs('a')
let $paragraph = document.querySelectorAll('p')

let userName = prompt('Ingrese su nombre')