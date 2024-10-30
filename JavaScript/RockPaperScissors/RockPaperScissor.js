
   let score = JSON.parse(localStorage.getItem('score'));
   
   if (score === null) {
     score = {
       wins: 0,
       lost: 0,
       tie: 0
     }
   }
   
   
   document.querySelector('.jsscore').innerHTML = `Wins: ${score.wins}, Losses: ${score.lost}, Ties: ${score.tie}`;
    
  localStorage.getItem('score');
  JSON.parse(localStorage.getItem('score'));
  console.log (localStorage.getItem('score'));
  console.log (JSON.parse(localStorage.getItem('score')));

  function pickcomputermove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    console.log(computerMove);

    return computerMove;
  }
  
  function playgame (playerMove) {
    const computerMove = pickcomputermove ();
    
    let result = '';
    if(playerMove === 'rock') {
     if (computerMove === 'rock') {
     result = 'tie';
     } else  if (computerMove === 'paper') {
     result = 'you lose';
     } else if (computerMove === 'scissors') {
     result = 'you win';
     }
    }
    
    else if (playerMove === 'paper') {
     if (computerMove === 'rock') {
     result = 'you win';
     } else if (computerMove === 'paper') {
     result = 'tie';
     } else if (computerMove === 'scissors') {
     result = 'you lose';
     }
    }
    
    
    if (playerMove === 'scissors') {
     if (computerMove === 'rock') {
     result = 'you lose';
     } else if (computerMove === 'paper') {
     result = 'you win';
     } else if (computerMove === 'scissors') {
     result = 'tie';
     }
    }
    
    if (result === 'you win') {
      score.wins = score.wins + 1;
    } else if (result === 'you lose') {
      score.lost += 1;
    } else if (result === 'tie') {
      score.tie += 1;
    }
    
    document.querySelector('.jsresult').innerHTML = result;
    document.querySelector('.jsmove').innerHTML = `You <img src="JavaScript/rockpaperscissor/${playerMove}.png" alt="JavaScript/rockpaperscissor/${playerMove}.png" class="moveIcon"> <img src="JavaScript/rockpaperscissor/${computerMove}.png" alt="JavaScript/rockpaperscissor/${computerMove}.png" class="moveIcon"> Computer`;
    
    
    localStorage.setItem('score', JSON.stringify(score));
    
    
    
    
   alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
   Wins: ${score.wins}, Losses: ${score.lost}, Ties: ${score.tie}`);
   console.log (`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
   Wins: ${score.wins}, Losses: ${score.lost}, Ties: ${score.tie}`);
   
   updateScoreElement();
  }
  
  
  function updateScoreElement() {
    document.querySelector('.jsscore').innerHTML = `Wins: ${score.wins}, Losses: ${score.lost}, Ties: ${score.tie}`;
  }
  
