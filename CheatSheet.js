
alert("BEHIND YOU!")


function addNums(){
  num1 = document.getElementById('num1').value;
  num2 = document.getElementById('num2').value;
  console.log(parseInt(num1) + parseInt(num2));
}

function baddNums(){
  bnum1 = document.getElementById('bnum1').value;
  bnum2 = document.getElementById('bnum2').value;
  alert(parseInt(bnum1) + parseInt(bnum2));
}

function caddNums(){
  cnum1 = document.getElementById('cnum1').value;
  cnum2 = document.getElementById('cnum2').value;
  document.getElementById('cresult').innerHTML = (parseInt(cnum1) + parseInt(cnum2));
}

function combine(){
  word1 = document.getElementById('word1').value;
  word2 = document.getElementById('word2').value;
  console.log(word1 + ' ' + word2);
}


var basses = [ ['fender jazz', 'fender percision'], ['gibson grabber', 'gibson eb'], ['schecter ultra bass', 'ibanez atk-300'] ];
//this will oubput ibanez atk-300
console.log(basses[2][1]);

var gibsons = ['les paul', 'sg', 'es-335', 'rd artist', 'explorer', 'flying v', 'melody maker'];
var fenders = ['stratocaster', 'telecaster', 'jaguar', 'jazzmaster', 'coronado', 'toronado'];
var schecters = ['blackjack', 's-1 custom', 'ultra ii', 'ultra iii', 'ultra vi', 'corsair', 'pt fastback'];
var guitars = [gibsons, fenders, schecters];
//this will output  jaguar
console.log(guitars[1][2]);

var fakingguitar = {brand: 'schecter', model: 'ultra ii', color: 'gray', wood: 'mahogany'};
//this will output gray. 
console.log(fakingguitar['color']);

console.log(gibsons !== fenders);
/*true*/

var num1 = 10;
var num2 = 20;
console.log(num1 + num2);   
/* 30 */

var user = ['Jeffrey', 'R', 'Bowne'];
console.log(user[0] + " " + user[2]);
/* Jeffrey Bowne */

var userinfo = {Age: '30', Hair: 'Brown', Eyes: 'Hazel', Height: 'tall'};
console.log(userinfo.Height + ' ' + userinfo.Hair + ' ' + userinfo.Eyes);
/* tall Brown Hazel */

console.log(user[0] + ' ' + user[2] + ' plays an ' + guitars[2][2] + ' and a ' + basses[0][0]);
/* Jeffrey Bowne plays an ultra ii and a fender jazz */


for(var i = 0; i< gibsons.length; i++) {
  console.log(i + ' ' + gibsons[i])
}

x = 5
while(x < 10) {
  console.log("Number " + x);
  x++;
}



