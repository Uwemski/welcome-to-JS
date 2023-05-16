/*
 GAME RULES:
 - The game has 2 players, playing in rounds
 - In each a turn , a player roles a dice as many time as he wishes. Each result gets added to his ROUND score
 - But if the player rolls a 1, all his round score gets lost. After that, it's the player's next turn
 - The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that it's the
 next player's turn
 - The first player to reach 100 points on GLOBAL score wins the game
*/

/*
 YOUR # CHALLENGES
 Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
 (Hint: Always save the previous dice roll in a seperate variable).
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
 (Hint: you can read that value with the .value property in Javascript. This is a good oppourtunity to use google to figure this out).
3. Add another dice to the game, so that there are 2 dices now. The player looses his current score whem one of them is a 1.
 (Hint: you will need css to position the second dice, so take a look at the css code for the first one to find out).*/




 var scores, roundScore, activePlayer, gamePlaying, lastDice;

 init(); 
 
 /*document.querySelector('.current-score').textContent = '0';
 document.querySelector('.score').textContent = '0';  
 document.getElementById('name--0').textContent = 'uwemAbasi';
 document.getElementById('name--1').textContent = 'Blessing';*/
 
 var lastDice;
 document.querySelector('.btn--roll').addEventListener('click', function() { 
     if(gamePlaying) { 
         //create a variable to store result of random number
      var dice = Math.floor(Math.random() *6) +1;
      var diceDOM = document.querySelector('.dice'); //for clean and efficient code 
 
      //display the dice when roll dice is clicked on the UI
      diceDOM.style.display = 'block';
      //use the dom to mainpulate image
      diceDOM.src = 'dice-' + dice + '.png';
 
      //if the number is 1, next player's turn
      if (dice === 6 && lastDice === 6) {
        scores[activePlayer] = 0;
        document.querySelector('#score--'+ activePlayer).textContent = '0';
        nextPlayer();
      } else if(dice != 1) {
        roundScore += dice;
 
        document.getElementById('current--' + activePlayer).textContent = roundScore;
      } else {
          nextPlayer();
      }

      lastDice = dice;
      console.log(lastDice, dice);
      
    }
     
 });
 
 
 document.querySelector('.btn--hold').addEventListener('click', function() { 
    if(gamePlaying) {
        //Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
 
        //Update the UI
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
 
     
        //Check if player won the game
        if (scores[activePlayer] >= 50) {
             document.querySelector('#name--' + activePlayer).textContent = 'WINNER!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            gamePlaying = false;
        }else {
             //Next player's turn
            nextPlayer();
            }
    }
    
 });
 
 document.querySelector('.btn--new').addEventListener('click', init);
     
 function init() {
     scores = [0, 0];
     roundScore = 0; 
     activePlayer = 0;
     gamePlaying = true;
    

     document.querySelector('.dice').style.display = 'none';
     document.getElementById('score--0').textContent = '0';
     document.getElementById('current--0').textContent = '0';
     document.getElementById('score--1').textContent = '0';
     document.getElementById('current--1').textContent = '0';
     document.getElementById('name--0').textContent = 'Player 1';
     document.getElementById('name--1').textContent = 'Player 2';
     document.querySelector('.player--0').classList.remove('player--winner');
     document.querySelector('.player--1').classList.remove('player--winner');
     document.querySelector('.player--0').classList.remove('player--active');
     document.querySelector('.player--1').classList.remove('player--active');
 
     document.querySelector('.player--0').classList.add('player--active');
 
 
 }
    
 function nextPlayer() {
     activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
     roundScore = 0;
     
 
     document.querySelector('#current--0').textContent = '0';
     document.querySelector('#current--1').textContent = '0'; 
 
     document.querySelector('.player--0').classList.toggle('player--active');
     document.querySelector('.player--1').classList.toggle('player--active');
 
     document.querySelector('.dice').style.display = 'none';
 }
 
 
 