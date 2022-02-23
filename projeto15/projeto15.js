const numeros = document.querySelectorAll(".numero")

numeros.forEach((num)=>{
    num.innerText = '0'
    
    const funcao = () =>{
        const limite = +num.getAttribute("data-target")
        const c = +num.innerText

        const increment = limite/200

        if(c < limite){
            num.innerText = `${Math.ceil(c + increment)}`
            setTimeout(funcao, 1); 
        }

        
    }

    funcao()
})