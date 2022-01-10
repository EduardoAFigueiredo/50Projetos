const contents = document.querySelectorAll('.content')

window.addEventListener('scroll', fe)

fe()

function fe(){
    const tam = window.innerHeight/ 5*4
    console.log(tam)
    contents.forEach(content =>{
        const contentTop = content.getBoundingClientRect().top
        console.log(contentTop)
        if(contentTop < tam){
            content.classList.add('show')
        }
        else{
            content.classList.remove('show')
        }
    })
}