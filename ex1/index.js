/**
 * Title: Basic Node Example
 * Description: Simple file that declares a few functions and invoke
 * Author: Leslie Lewid
 * Date: 18/08/18
 * 
 */


// Dependencies
var mathLib = require('./lib/math');
//-> import는 js를 먼저 보고 없으면 그 폴더에 index.js를 가져옴
var jokesLib = require('./lib/jokes');

var app = {};

app.config = {
    'timeBetweenJokes' : 1000
};


app.printAJoke = function(){

    var allJokes = jokesLib.allJokes();

    var numberOfJokes = allJokes.length;

    var randomNumber = mathLib.getRandomNumber(1, numberOfJokes);

    var selectedJoke = allJokes[randomNumber -1];

    console.log(selectedJoke);

};

app.indefiniteLoop = function(){
    setInterval(app.printAJoke, app.config.timeBetweenJokes);
}

app.indefiniteLoop();