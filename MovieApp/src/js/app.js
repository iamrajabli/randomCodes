'use strict';

const movieContainer = document.querySelector('#movies__container'),
searchBtn = document.querySelector('.fa-magnifying-glass'),
searchInput = document.querySelector('.header__search input');


const getData = async (url) => {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'authorization': 'apikey 2xRlYIeT57WLIrI1nGHlzt:6qko0UR550kkNBcbhVsuDT'
        }
    });

    if (!res.ok) {
        throw new Error(`Invalid url - ${url}`);
    }

    return await res.json();
}
searchBtn.addEventListener('click', () => {

    const searchText = searchInput.value.trim();
    movieContainer.innerHTML = '';

    getData(`https://api.collectapi.com/imdb/imdbSearchByName?query=${searchText}`)
    .then(data => {
         data.result.forEach(item => {
                movieContainer.innerHTML+= `
                <div class="movie__item">
                <div class="movie__item-left">
                    <img src="${item.Poster}" alt="Not found image!">
                </div>
                <div class="movie__item-right">
                    <h3 class="title">${item.Title}</h3>
                    <h5>Drama - <span class="year">${item.Year}</span> 102'</h5>
                    <div class="movie__item-content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed autem, corporis, accusantium repellat
                        quas incidunt nesciunt cum ea dolorem perferendis voluptatem doloribus porro! Tempore cumque
                        excepturi velit voluptates provident. Dolor!
                    </div>
                    <a href="#" class="btn btn-primary">More info</a>
                </div>
                </div>
                
                `
         });  
    });
})
