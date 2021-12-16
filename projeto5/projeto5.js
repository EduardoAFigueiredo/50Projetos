const imagem = document.querySelector('.imagem')
const carrega = document.querySelector('h3')

aumentar(carrega)
console.log(imagem)
function aumentar(carrega){
    let i = 1
    let j = 19
    let opacidade = 1   
    setInterval(function adiciona(){
        if(i ==101){
            return
        }
        carrega.innerHTML = i+'%'
        carrega.style.opacity = opacidade
        if(i % 10 == 0){
            opacidade -= 0.1
        }
        if(i % 5 == 0){
            imagem.style.filter = `blur(${j}px)`
            j -= 1
            
        }
        if(i==100){
            j = 0
            opacidade -= 0.1
            imagem.style.filter = `blur(${j}px)`
            carrega.style.opacity = opacidade
        }
        
        i++
        
    }, 20)   
}
