// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map((movie) => movie.director);

  console.log('EXERCISE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result2 = movies.filter((movies) => movies.director === director);
  console.log('EXERCISE 2 ->', result2);
  return result2;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const givenDirector = movies.filter((movie) => movie.director === director);
  if (givenDirector.length === 0) {
    return 0;
  }
  const totalScore = givenDirector.reduce(
    (total, movie) => total + movie.score,
    0
  );
  const averageScore = totalScore / givenDirector.length;
  return parseFloat(averageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  let alphabeticMovies = movies.map((movie) => movie.title).sort();
  if (alphabeticMovies.length < 20) {
    return alphabeticMovies;
  } else {
    return alphabeticMovies.slice(0, 20);
  }
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  return [...movies].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
