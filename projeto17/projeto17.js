const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1fc2c95d89bc066f02c31584d29fe2fe&page=1'
const img = 'https://image.tmdb.org/t/p/w1280/'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=1fc2c95d89bc066f02c31584d29fe2fe&query="'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview} = movie
        
        const movieA = document.createElement('div')
        movieA.classList.add('movie')

        movieA.innerHTML = `
        <img src="${img + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview} 
        </div>
        `

        main.appendChild(movieA)
    })
}

function getClassByRate(vote){
    if( vote >= 8){
        return 'green'
    }
    else if(vote >= 5){
        return 'yellow'
    }
    else{
        return 'red'
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm != ''){
        getMovies(SEARCH_URL + searchTerm)
        search.value = ''
    }
    else{
        window.location.reload()
    }
})