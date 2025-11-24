"use strict"; 

// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);   



// цикли -----------------------------  --------------------------------
// let result = '';
// const length = 7;

// for (let i = 1; i <= length; i++) {
//     for (let j = 1; j <= i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

// // Місце для першої задачі
// function firstTask() {
//     for (let i = 5; i <= 10; i++) {
//         console.log(i)
//     }
// }

// // Місце для другої задачі
// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//         if(i === 13) {
//             break;
//         }
//         console.log(i)
//     }
// }

// // Місце для третьої задачі
// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }


// // Місце для четвертої задачі

// function foursTask() {
//     let i = 2
//     while (i <= 16) {
//         if(i % 2 !== 0) {
//             console.log(i);
//         }
//         i++;    
//     } 
// }
// // Місце для пʼятої задачі

//  function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers.push(i);
//     }
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// // Перша задача адвансед
// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     // Не трогаем
//     return result;
// }

// // Друга задача адвансед
// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//          if(typeof (data[i]) === 'nubmer') {
//             data[i] = data[i] * 2
//          } else if (typeof (data[i]) === 'string'){
//             data[i] = `${data[i] + " - done"}`
//          }
//      }
//      console.log(data);
// }

// // Третя задача адвансед
// function thirdTask() {

//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 0; i < data.length; i++) {
//         result[i] = data[data.length - 1 - i];
//     }

//     console.log(result);
//     return result;
// }

// // перша задача експерт
// function firstTask() {
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)
// }


let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log('Ви переглянули мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ви класичний глядач');
} else if (personalMovieDB.count >= 30) {
    console.log('Ви кіноман');
} else {
    console.log('Сталася помилка');
}

console.log(personalMovieDB);

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
    