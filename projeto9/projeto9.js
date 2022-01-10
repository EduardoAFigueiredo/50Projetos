const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const botoes = document.querySelectorAll('button')


botoes.forEach((botao) =>{
    const le = botao.innerText
    console.log(le)
    botao.addEventListener('click', ()=>{
        stopSongs()
        document.getElementById(le).play()
    })
})

function stopSongs(){
    sounds.forEach((sound)=>{
        const song = document.getElementById(sound)
        console.log(song)
        song.pause()
        song.currentTime = 0
    })
}