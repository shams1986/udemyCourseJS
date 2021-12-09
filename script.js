"use strict";



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

/*
function learnJS(lang, callback) {
    console.log(`ya uchu ${lang}`);
    callback();
}


learnJS('JavaScript', function () {
    console.log('ya proshol etot urok');
}); 



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
    if (typeof(options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`${options[key][i]}`);
        }
    } else {
        console.log(`${key} = ${options[key]}`);
    }
} */

/* const arr = [1, 2, 32, 7, 6, 8];

//metod sort prinimaet 'callback' function
arr.sort(compareNum);

//sorteruet int array po vozrastaniyu
function compareNum(a, b) {
    return a - b;
}

console.log(arr); 

 arr.pop();
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
 



//razbivaet stroku i pomeshaet ego v array
 const str = 'bbb, eee, sss, aaa';
const products = str.split(', ');
console.log(products);
// soedinyaet elemnti array i vidaet v odnoi stroke
console.log(products.join('; '));

products.sort();
console.log(products); */

/*
Urok 22: 

const obj = {
    a: 4,
    b: 6,
    objIn: {
        x: 10,
        y: 20
    }
};

const add = {
    e: 300,
    h: 400
};

// 2 objects join
const added = Object.assign(obj, add);

// make first level(poverhtnostniy) copy from object obj 
const clone = Object.assign({}, obj);


const oldArr = ['a', 'b', 'c'];
//array clone
const newArr = oldArr.slice();
newArr[1] = 'bbb';


// 'spread' operator( operator razvorota)
const video = ['youtube', 'vimeo', 'rutube'],
    blog = ['wordpress', 'livejournal', 'blogger'];

//operator '...bread' peredaet elementi massiva video kak otdelnie elementi
const internet = [...video, ...blog, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const logArr = [4,3,6];
log(...logArr); 
log(logArr[0],logArr[1],logArr[2]); 
*/

/* 
// urok 23: osnovi oop: prototipno orientirovannoe nasledovanie

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }
};


const john = {
    health: 200
};

//metod '__proto__'  depracate(ustarel i ne ispolzuetsya)
john.__proto__ = soldier;
console.log(john.armor);


//seichas vmesto '__proto__' nujno ispolzovat takie komandi kak
//Object.create(), Object.getPrototypeOf() i Object.setPrototypeOf()

//ustanavlivaet protype dlya 'john' ot soldata
Object.setPrototypeOf(john,soldier); //<--> john.__proto__ = soldier;
john.sayHello();

//Sozdaetsya noviy object 'mike' kotoriy budet prototipna nasledovatsya ot 'soldier'
const mike = Object.create(soldier);
mike.sayHello();


 */