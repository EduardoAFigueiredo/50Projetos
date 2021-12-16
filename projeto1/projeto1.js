const tags = document.querySelectorAll('.panel')

tags.forEach( (panel) =>{
    panel.addEventListener("click", () =>{
        removeActiveClass()
        panel.classList.add('active')
    })
})

function removeActiveClass(){
    tags.forEach((panel) =>{
        panel.classList.remove('active')
    })
}