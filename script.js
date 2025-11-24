'use strict';

let numberOfFilms;
let loveGenre;
let personalMovieDB1 = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {   
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

function rememberMyFilms() {
    for (let i = 1; i <= 3; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

          if (a != null && b != null && a != '' && b!= '' & a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
          } else {
            console.log('error');
            i--;
          }        
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Ви переглянули мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Ви класичний глядач');
    } else if (personalMovieDB.count >= 30) {
        console.log('Ви кіноман');
    } else {
        console.log('Сталася помилка');
    }
}
detectPersonalLevel();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function showMyDB(privatStatus) {
    privatStatus = personalMovieDB.privat
    privatStatus ? console.log('Access Permited') : console.log(personalMovieDB)

    // switch(privatStatus) {
    //     case(false):  return console.log(personalMovieDB)
    //     case(true): return console.log('Access Permited')
    // }
}
showMyDB();

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        if (loveGenre != null && loveGenre != '') {
            personalMovieDB.movies[i - 1] = prompt(`Your love genre is ${i}`, '');
            console.log('Thanks')
          }     
    } 
}
writeYourGenres()