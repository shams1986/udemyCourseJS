"use strict";



let numberOfFilms;

function start(){
     numberOfFilms = +prompt("wieviel filmen hast du angesehen ?","");

     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("wieviel filmen hast du angesehen ?","");
     }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors:{},
    genres:[],
    private: false

};

function detectPersonalLevel(){

    if(personalMovieDB.count < 10){
        console.log('prosmotrenno dovolno malo filmov');

    }else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log('vi klassicheskiy zritel');

    }else if(personalMovieDB.count > 30){
        console.log('vi kinoman');

    }else{
        console.log('proizoshla oshibka');
    }

}

detectPersonalLevel();



function rememberFilms(){
    let count = 0;

    while(count < 2){

         const a = prompt("Eine zu letzt gesehene film ?",""),
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


}

rememberFilms();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);


function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ihre Lieblings Genre ${i} ?`);
    }
}

writeYourGenres();


function learJS(lang, callback){
    console.log(`ya uchu ${lang}`);
    callback();
}


function done('JavaScript', function(){
    console.log('ya proshol etot urok');
});







