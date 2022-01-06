const key = document.getElementById("key")
const keyCode = document.getElementById("keyCode")
const code = document.getElementById("code")
const press = document.querySelector(".press")

window.addEventListener('keydown', (event)=>{
    press.style.display = 'none'
    key.style.display = 'block'
    keyCode.style.display = 'block'
    code.style.display = 'block'
    key.querySelector('#um').innerHTML = event.key
    keyCode.querySelector('#dois').innerHTML = event.keyCode
    code.querySelector('#tres').innerHTML = event.code
})
