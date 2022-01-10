const progress = document.getElementById('progress')
const ant = document.getElementById('ant')
const prox = document.getElementById('prox')
const circles = document.querySelectorAll(".circle")

let active = 1
console.log(circles.length)
prox.addEventListener('click', () =>{
    active++


    if(active > circles.length){
        active = circles.length
    }

    update()
})

ant.addEventListener('click', () =>{
    active--


    if(active < 1){
        active = 1
    }

    update()
})

function update(){
    circles.forEach((circle, id)=>{
        if(id < active){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    console.log((actives.length/circles.length) * 100)
    progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 + "%"

    if(active == 4 || active == 1){
        if(active == 4){
            prox.classList.add("disabled")
        }
        else{
            ant.classList.add("disabled")
        }
    }
    else{
        prox.classList.remove("disabled")
        ant.classList.remove("disabled")
    }
    
}
