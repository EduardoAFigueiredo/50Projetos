const botao = document.querySelector('button')
const du = document.querySelector('.botao')
const input = document.querySelector('input')

botao.addEventListener('click', ()=> {
    du.classList.toggle('active')
    input.focus()
})
