function qs (element) {
    return document.querySelector(element)
}

let $main = qs('.container')
let $subtitle = qs('.subtitulo')
let $link = qs('a')
let $paragraph = document.querySelectorAll('p')

let userName = prompt("Ingrese su nombre"); 
//prompt('Ingrese su nombre') ?? 'Invitad@'

userName.trim() !== ""
? ($subtitle.innerText += `${userName}`)
: ($subtitle.innerText += "Invitad@");
$subtitle.style.textTransform = "uppercase"
$link.style.color = "#E51B3E"

let background = confirm('¿Desea colocar un fondo de pantalla?')

background && document.body.classList.add('fondo')

$paragraph.foreac

$main.style.display = "block"