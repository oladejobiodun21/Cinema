// script.js
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    displayResults(query);
});

const movies = [
    { 
        title: 'Prison Break', 
        year: '2005', 
        poster: 'https://via.placeholder.com/100x150?text=Prison+Break', 
        trailer: 'https://www.example.com/trailer-prison-break.mp4'
    },
    { 
        title: 'IF', 
        year: '2023', 
        poster: 'https://via.placeholder.com/100x150?text=IF', 
        trailer: 'https://www.example.com/trailer-if.mp4'
    },
    { 
        title: 'Swagger', 
        year: '2021', 
        poster: 'https://via.placeholder.com/100x150?text=Swagger', 
        trailer: 'https://www.example.com/trailer-swagger.mp4'
    }
];

function displayResults(query) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));

    if (filteredMovies.length > 0) {
        filteredMovies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            movieItem.innerHTML = `
                <h3>${movie.title}</h3>
                <p>Year: ${movie.year}</p>
                <img src="${movie.poster}" alt="${movie.title}">
                <video controls>
                    <source src="${movie.trailer}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            resultsContainer.appendChild(movieItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No movies found</p>';
    }
}
