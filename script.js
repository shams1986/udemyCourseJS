"use strict";


/* 
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("wieviel filmen hast du angesehen ?", "");
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private: false

};

function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log('prosmotrenno dovolno malo filmov');

    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('vi klassicheskiy zritel');

    } else if (personalMovieDB.count > 30) {
        console.log('vi kinoman');

    } else {
        console.log('proizoshla oshibka');
    }

}

detectPersonalLevel();



function rememberFilms() {
    let count = 0;

    while (count < 2) {
        const a = prompt("Eine zu letzt gesehene film ?", ""),
            b = prompt("bewerte diese film");

        if (a != null && b != null && a.length <= 50 &&
            b.length <= 50 && a != "" && b != "") {

            personalMovieDB.movie[a] = b;
            count++;
            console.log('done');
        } else {
            console.log('error');
        }
    }


}

rememberFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ihre Lieblings Genre ${i} ?`);
    }
}

writeYourGenres();


function learnJS(lang, callback) {
    console.log(`ya uchu ${lang}`);
    callback();
}


learnJS('JavaScript', function () {
    console.log('ya proshol etot urok');
}); */

/* 

UROK 20: Objecti

const options = {
    name: 'shams',
    wight: 105,
    hight: 191,
    canDo: {
        sport: 'bjj',
        prog: 'JavaScript'
    },
    makeTest:function(){
        console.log('function Test');
    }
};

const{sport,prog} = options.canDo;

console.log(options['name']);
console.log(sport);

options.makeTest();


for (let key in options) {
    if (typeof (options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`${options[key][i]}`);
        }
    } else {
        console.log(`${key} = ${options[key]}`);
    }
} */

const arr = [1, 2, 3, 4, 6, 8];

const str = prompt(", ");
const products = str.split(', ');
console.log(products);

/* arr.pop();
console.log(arr);

arr.push(22);
console.log(arr);

console.log(arr.shift());
console.log(arr);


// tak ne delat
arr[50] = 33;
console.log(arr.length);
console.log(arr);

for(let value of arr){
    //zdes mojno ispolzovat 'break' i 'continue'
    console.log(value);
}


// tak mojno perebirat arr s pomoshyu funkcii 'callback'
arr.forEach(function (item, i, arr) {
    console.log(`index ${i} : ${item} vom array ${arr}`);
});
 */




