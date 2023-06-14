let saoPaulo = document.querySelector('#sao_paulo')
let rioDeJaneiro = document.querySelector('#rio_de_janeiro')
let salvador = document.querySelector('#salvador')

let slide = document.querySelector('.slide')

slide = [saoPaulo, rioDeJaneiro, salvador] 

function setaDireita() {
    document.querySelector('img').src = "./img/salvador.png"
}

function setaEsquerda() {
    alert('esquerda')
}