const tags = document.querySelector('.tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(e){
    const tagsE = e.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tags.innerHTML = ''
    tagsE.forEach((tag) =>{
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tags.appendChild(tagEl)
    })
    

}

function randomSelect(){
    const times = 30

    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()

        highLightTag(randomTag)

        setTimeout(() => {
            unhighLightTag(randomTag)
        }, 100);
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highLightTag(randomTag)
        }, 100);
    }, times * 100);
}

function  pickRandomTag(){
    const tagP= document.querySelectorAll('.tag')
    console.log(tagP[Math.floor(Math.random() * tagP.length)])
    return tagP[Math.floor(Math.random() * tagP.length)]
}

function highLightTag(tag){
    tag.classList.add('highLight')
}

function unhighLightTag(tag){
    tag.classList.remove('highLight')
}