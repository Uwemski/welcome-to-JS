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


document.querySelector('.dice').style.display= 'none';
document.getElementById('score--0').textContent= '0';
document.getElementById('current--0').textContent= '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--1').textContent = '0';



document.querySelector('.btn--roll').addEventListener('click', function() {
    //add the math random 
    var dice = Math.floor(Math.random()*6 ) +1;
    document.querySelector(.dice).textContent = dice;
    
    //display the dice picture
    //document.querySelector('.btn').style.display = 'block'; 
   
    //2. Display the dice
    //we saved the value of document.querySelector('.dice) into a diceDOM variable to avoid repeating ourselves
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display ='block';
    diceDOM.src = 'dice-' + dice + '.png'; 

    //3. Update the roundScore IF the rolled number was NOT a 1
    if ( dice !== 1){
        //add
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    } else{
        activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
        roundScore = 0;    
        //next player's turn

        //document.getElementById('current--0').textContent = '0';
        //document.getElementById('current--1').textContent = '0';
    }
    

})

//document.querySelector('#current--' + activePlayer).textContent = dice; 
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x= document.querySelector('#score--0').textContent;
//console.log(x);   
















