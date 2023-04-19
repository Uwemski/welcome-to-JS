/*
 GAME RULES:

 - The game has 2 players, playing in rounds
 - In each a turn , a player roles a dice as many time as he wishes. Each result gets added to his ROUND score
 - But if the player rolls a 1, all his round score gets lost. After that, it's the playesr's next turn
 - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that it's the
 next player's turn
 - The first player to reach 100 points on GLBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display= 'none';
/*document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';*/

document.querySelector('#name--0').textContent = 'Odili';
document.querySelector('#name--0').style.color = 'white';
document.getElementById('name--1').innerHTML = '<b> Ngozi </b>';
document.querySelector('#name--1').style.color = 'yellow';

var x = document.querySelector('#name--0').innerHTML;
console.log(x);
var y = document.getElementById('name--1').textContent;
console.log(y);


/*document.querySelector('.btn--roll').addEventListener('click', function () {
   
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.Display the result
    var diceDOM= document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    //3. Update the round score only IF the rolled number was NOT a 1 
}); */


//document.querySelector('#current--' + activePlayer).textContent = dice; 
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x= document.querySelector('#score--0').textContent;
//console.log(x);   
















