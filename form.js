let check = document.querySelector('.formulCheck');
let botao = document.querySelector('.botao');

check.addEventListener('click', () => {
    botao.getAttribute('disabled') != null ? botao.removeAttribute('disabled') : botao.setAttribute('disabled', '')
})