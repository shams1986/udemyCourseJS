"use strict";

const numberOfFilms = prompt("wieviel filmen hast du angesehen ?","");

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors:{},
    genres:[],
    privat: false

};

const a = prompt("Eine zu letzt gesegene film ?",""),
      b = prompt("bewerte diese film"),
      c = prompt("Eine zu letzt gesegene film ?",""),
      d = prompt("bewerte diese film");


personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);















