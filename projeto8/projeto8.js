const inputE = document.querySelector('#email')
const inputS = document.querySelector("#senha")

const labels = document.querySelectorAll('label')


labels.forEach(label =>{
    label.innerHTML = label.innerText
        .split('')
        .map((letra, idx)=> `<span style="transition-delay:${idx*50}ms;">${letra}</span>`)
        .join('')
})
