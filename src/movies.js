// Iteration 1: All directors? - Get the array of all directors.

// function getAllDirectors (moviesArray){
//     return moviesArray.map((moviesArray) => moviesArray.director); 
// }

function getAllDirectors (pelis){
    return pelis.map((el) => el.director);
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// let directorsMap = function getAllDirectors (pelis){
//     return pelis.map((el) => el.director);
// };

// let directorsMapArr = new map(directorsMap);

// let unicos = [...directorsMapArr.values()];
// return unicos;


// function getAllDirectors(moviesArray) {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) {}
function howManyMovies(pelis) {
    return pelis.filter((el) => {
    const stevenSpielberg = el.director === "Steven Spielberg"; 
    const dramaMovie = el.genre.includes("Drama");
    return stevenSpielberg && dramaMovie;
    }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(pelis) {
    if (pelis.length === 0) return 0;
    let sum = pelis.reduce((a, b) => a += b.score || 0, 0);
    console.log ((sum / pelis.length).toFixed(2))
    return Number((sum / pelis.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(pelis) {
    const pelisDramaticas = pelis.filter((el) => el.genre.includes("Drama"));
    const pelisDramaticasAv = scoresAverage(pelisDramaticas);
    return pelisDramaticasAv;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(pelis) {
    const pelisClon = [...pelis];
    pelisClon.sort((older, newer) => {
        if(older.year > newer.year){
            return 1;
        } else {
            return -1        
        }
    });
    return pelisClon
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
