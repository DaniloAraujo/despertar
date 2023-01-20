const data = new Date()
const botao = document.querySelector('#btnCulto');
const dia = data.getDay()
const hora = data.getHours()


botao.setAttribute('disabled', '')

if (((dia === 0 && hora >= 10 && hora <= 10) || (dia === 3 && hora >= 19 && hora <= 22))) {
    botao.removeAttribute('disabled')

}