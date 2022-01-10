const botoes = document.querySelectorAll('.faq-toggle')
console.log(botoes)

botoes.forEach(toggle =>{
    toggle.addEventListener('click', ()=>{
        toggle.parentNode.classList.toggle('active')
    })
})