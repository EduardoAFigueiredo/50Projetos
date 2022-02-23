const smallCups = document.querySelectorAll(".poteMenor")
const litros = document.querySelector('.l')
const porcentagem = document.querySelector('.porcentagem')
const potao = document.querySelector('.potao')

litros.innerText = '0'

smallCups.forEach((cup, id) =>{
    cup.addEventListener('click', () => funcao(id))
})

function funcao(id){
    if((smallCups[id].classList.contains('active') && !smallCups[id].nextElementSibling) || (smallCups[id].classList.contains('active') && !smallCups[id].nextElementSibling.classList.contains('active')) ){
        id--
    }

    smallCups.forEach((cup, id2) =>{
        if(id2 <= id){
            cup.classList.add("active")
        }
        else{
            cup.classList.remove("active")
        }
    })
    updateCopao()

}

function updateCopao(){
    const fullCups = document.querySelectorAll('.poteMenor.active').length
    const totalCups = smallCups.length

    if(fullCups ===0){
        porcentagem.style.visibility = 'hidden'
        porcentagem.style.height =0
    }
    else{
        porcentagem.style.visibility = 'visible'
        porcentagem.style.height = `${fullCups / totalCups * 280}px`
        porcentagem.innerText = `${fullCups / totalCups *100}%`
    }
    
    if(fullCups === totalCups){
        potao.style.visibility = 'hidden'
        potao.style.height = 0
    }
    else{
        potao.style.visibility = 'visible'
        litros.innerText = `${2 - (250 * fullCups / 1000)}`
    }
}