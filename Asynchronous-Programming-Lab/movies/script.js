let baseUrl = 'http://localhost:3030/data';
let movieListElement = document.getElementById('movie-list');

document.getElementById('load-movies').addEventListener('click', () => {
    fetch(`${baseUrl}/movies`)
        .then(res => res.json())
        .then(movies => {
            movies.forEach(movie => {
                let liElement = document.createElement('li')
                liElement.textContent = movie.title;

                movieListElement.appendChild(liElement);
            });
        })
        .catch(error => {
            console.log(error)
        })
});

document.getElementById('add-movie').addEventListener('click', () => {
    fetch(`${baseUrl}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Man of Steel'
        })
    })
        .then(res => {
            console.log('sent');
        })
})