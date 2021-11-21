"use strict";



const numberOfFilms = +prompt("wieviel filmen hast du angesehen ?","");



const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors:{},
    genres:[],
    privat: false

};

if(personalMovieDB.count < 10){
    console.log('prosmotrenno dovolno malo filmov');
}else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log('vi klassicheskiy zritel');
}else if(personalMovieDB.count > 30){
    console.log('vi kinoman');
}else{
    console.log('proizoshla oshibka');
}



let count = 0;

while(count < 2){

   const a = prompt("Eine zu letzt gesegene film ?",""),
         b = prompt("bewerte diese film");

    if(a != null && b != null && a.length <= 50 &&
        b.length <= 50 && a != "" && b != ""){

        personalMovieDB.movie[a] = b;
        count++;
        console.log('done');
    }else{
        console.log('error');
    }


}

console.log(personalMovieDB);















