const url = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
fetch(url)
.then(response => response.json())

.then(data => {
const badMovies = data.filter(data => data.rating <= 4)
 console.log(badMovies)
return badMovies;

  const badMoviesSince2000 = badMovies.filter(data => data.year >= 2000)
  console.log(badMoviesSince2000);
  return badMoviesSince2000;
  
  const badMoviesTitle = badMoviesSince2000.map(data => data.title)
  console.log(badMoviesTitle);
  return badMoviesTitle;
})

