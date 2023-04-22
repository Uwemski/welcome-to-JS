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

scores = [0,1];
roundScore = 0;
activePlayer = 0; 

/*document.querySelector('.current-score').textContent = '0';
document.querySelector('.score').textContent = '0';  
document.getElementById('name--0').textContent = 'uwemAbasi';
document.getElementById('name--1').textContent = 'Blessing';*/

document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--1').textContent = '0';



document.querySelector('.btn--roll').addEventListener('click', function() {
    //add the math random 
    var dice = Math.floor(Math.random()*6 ) +1;
    diceDOM = document.querySelector('.dice');
    
    //display the dice picture and let it display a random number when clicked
    diceDOM.style.display = 'block'; 
    diceDOM.src = 'dice-' + dice + '.png';

    //3. If dice is 1 what should hapen and what not should happen
    if ( dice !== 1) {
        roundScore += dice;
        document.getElementById('current--' +activePlayer).textContent = roundScore;
    } else {
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore =0;

        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');
    }
});


  













