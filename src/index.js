//fetch all movies present in the db
//render as thumbnails in the nav bar
const thumbnails = document.querySelector('#movie-list');
const movieInfo = document.querySelector('#movie-info');
const movieTitle = document.querySelector('#title');
const movieRelease = document.querySelector('#year-released');
const movieDesc = document.querySelector('#description');
const movieWatched = document.querySelector('#watched');
const movieBloodAmount = document.querySelector('#amount');

fetch('http://localhost:3000/movies')
  .then(response => response.json())
  .then(jsonArr => {
    renderMovies(jsonArr)
    renderFirstMovie(jsonArr)
  })

//render movie helper function
function renderMovies(json) {
  for (const item of json) {
    let image = document.createElement('img');
    image.src = item.image;
    image,alt = item.title;
// attach listener
    // image.addEventListener('click', () => displayMovieDetails(item))
    thumbnails.append(image);
  }
}

//render first movie 
function renderFirstMovie(json) {
  const firstMovie = json[0];
  document.querySelector('img#detail-image').src = firstMovie.image
  document.querySelector('h1#title').textContent = firstMovie.title;

}