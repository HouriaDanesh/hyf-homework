

//short movie titles
const shortTitle = movies
.filter(function shortMovieTitle(movie) {
  return movie.title.length <= 5;
})
console.log(shortTitle);

//long movie titles
const longTitle = movies
.filter(function longMovieTitle(movie){
 return movie.title.length >= 20;
})
console.log(longTitle);

//number of movies made between 1980-1989
const eightyMovies = movies
.filter(function numberOfMovies (movie){
  return movie.year >= 1980 && movie.year <= 1989
})
console.log(eightyMovies);

//extra key called tag based on the rating
const movieTag = movies
.map(function TagKey(movie){
  if (movie.rating >= 7) {
    movie.tag = "Good";
  }
   else if (movie.rating >= 4)
  {
    movie.tag = "Average";
  } 
  else
  {
    movie.tag = "Bad";
  }
  return movies;
})
console.log(movieTag);

//Using chaining, filter array to contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const highRatedMovie = movies
  .filter(function MoviesRatingBiggerThanSix(movie){
  return movie.rating > 6
})
  .map(function justMovieRating(movie){
    return movie.rating;
  })
console.log(highRatedMovie);

//Count the total number of movies containing any of following keywords:Surfer, Alien or Benjamin.

const keywords = ["Surfer", "Alien", "Benjamin"];

const keywordMovie = movies
.filter(function filterKeyword(movie){
  return title.toLowerCase().includes(keyword.toLowerCase);
});
 const matchTitle = keywords
 .map(function matchKeyword(keyword){
  return title.includes(keyword)
 })

console.log(matchTitle);


//////////////////////////////////////
const numbers = [1, 2, 3, 4];
const newNumbers= numbers
.filter(function oddNumbers(element)
 {
    return element % 2 !== 0;
 })
        const doubledNumbers = newNumbers
        .map(function dobble(element) {
           
        return element*2;
    })
  ///////////////////////////////////////////////////  
