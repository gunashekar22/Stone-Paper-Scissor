const score=JSON.parse(localStorage.getItem('score'))||{
  win:0,
  lose:0,
  tie:0
}
console.log(JSON.parse(localStorage.getItem('score')));

let c,v,result,r;
function pickComputer()
{
  return Math.floor(Math.random()*3);
}
const paper=document.querySelector('.js-paper');
const rock=document.querySelector('.js-rock');
const scissors=document.querySelector('.js-scissors');
document.body.addEventListener('keydown',(event)=>
{
  if(event.key==='r')
  {
    playGame("Rock");
  }
  else if(event.key==='p')
  {
    playGame("Paper");
  }
  else if(event.key==='s')
  {
    playGame("Scissors");
  }
  else{
    
  }
  
})
rock.addEventListener('click',()=>
{
  v=playGame('Rock')
})
paper.addEventListener('click',()=>
  {
    v=playGame('Paper')
  })
  scissors.addEventListener('click',()=>
    {
      v=playGame('Scissors');
    })

function playGame(p1)
{
  console.log(p1);
  
  c=pickComputer();

    if(p1==='Scissors')
    {
      if(c==0)
        {
          result='Lose';
          r1='Rock';
          r='Computer picked Rock.You Lose.'
        }
        else if(c==1)
        {
          result='Win';
          r1='paper';
          r='Computer picked Paper.You win'
        }
        else{
          result='Tie';
          r1='Scissors';
          r='Computer picked Scissors.Tie'
        }
        calScore(result);
        theory(p1,r1);
        
        return r+'\n'+`Wins: ${score.win},Losses: ${score.lose},Ties:${score.tie}`
    
   }

   else if(p1==='Scissors')
   {
    if(c==0)
    {
      result='Win'
      r1='Rock'
      r= 'Computer picked Rock.You win.'
    }
    else if(c==1)
    {
      result='Tie'
      r1='Paper'
      r='Computer picked Paper.Tie'
    }
    else{
      result='Lose'
      r1='Scissors'
      r='Computer picked Scissors.You Lose'
    }
    calScore(result);
    theory(p1,r1);

    return r+'\n'+`Wins: ${score.win},Losses: ${score.lose},Ties:${score.tie}`

   }
   
   else
   {
    if(c==0)
      {
        result='Tie';
        r1='Rock'
        r='Computer picked Rock.Tie.'
      }
      else if(c==1)
      {
        result='Lose';
        r1='Paper'
        r='Computer picked Paper.You lose'
      }
      else{
        result='Win';
        r1='Scissors'
        r='Computer picked Scissors.You win'
      }
      calScore(result);
      theory(p1,r1);
      return r+'\n'+`Wins: ${score.win},Losses: ${score.lose},Ties:${score.tie}`
   }
}
function calScore(result)
{
  if(result==='Tie')
  {
    document.querySelector('.js-result').innerHTML=`${result}`;
  }
  else
  {
    document.querySelector('.js-result').innerHTML=`You ${result}`;
  }
  
  if(result==='Win')
    {
      score.win++;
    }
    else if(result==='Lose')
    {
      score.lose++;
    }
    else{
      score.tie++;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    
    
}
let c1,ans;
function reset()
{

  document.querySelector('.conf-mes').innerHTML='Are yo sure you want to reset the score? <button class="yes">Yes</button><button class="no">No</button>';
  let x=document.querySelector('.yes');
    x.addEventListener('click',()=>
    {
    score.lose=0,score.tie=0,score.win=0;
    console.log(score);
    localStorage.removeItem('score');
    updateScore();
    document.querySelector('.conf-mes').innerHTML=''
    }
  )
  let y=document.querySelector('.no');
    y.addEventListener('click',()=>
    {
    
    document.querySelector('.conf-mes').innerHTML=''
    }
  )
  


 
}
function updateScore()
{
document.querySelector('.js-score').innerHTML=`Wins:${score.win} ,Losses:${score.lose} ,Ties:${score.tie}`;
}
// document.querySelector('.js-score').innerHTML=`Wins:${score.win} ,Losses:${score.lose} ,Ties:${score.tie}`;
function theory(p1,r1)
 {
   //first-p1,second-r1
  document.querySelector('.js-moves').innerHTML=
  `You <img src="images/${paper}-emoji.png" class="img-edit">
<img src="images/${paper}-emoji.png" class="img-edit"> computer`
}
let autoPlaying=false;
let intervalId;
document.body.addEventListener('keydown',(event)=>
{
  if(event.key==='a')
  {
    autoPlay();
  }
  
})
document.body.addEventListener('keydown',(event)=>
  {
    if(event.key==='Backspace')
    {
      reset();
    }
    
  })
function autoPlay() {
  let x=document.querySelector('.Auto-play-button').innerHTML.trim();
  // console.log(x);
  
  if(x==='Auto Play')
  {
    document.querySelector('.Auto-play-button').innerHTML=
    'Stop Play';
    
    
      
    intervalId=setInterval(()=> {
      let x = pickComputer();
      let move;
      
      if (x === 0) {
        move = 'Rock';
      } else if (x === 1) {
        move = 'Paper';
      } else {
        move = 'Scissors';
      }
      
      
      playGame(move);
    }, 1000);
    autoPlaying=true;
  }
  else{
    clearInterval(intervalId);
    
    document.querySelector('.Auto-play-button').innerHTML=
    'Auto Play';
    autoPlaying=false;
  
  }
  
}

// function confRest()
// {
//   document.querySelector('.conf-mes').innerHTML='Are yo sure you want to reset the score? <button class="yes">Yes</button><button class="no">No</button>';
//   let x=document.querySelector('.yes')
//   x.addEventListener('click',()=>
//     {
//       return 'yes'
//     }
//   )
//   let y=document.querySelector('.no')
//     y.addEventListener('click',()=>
//       {
//         return 'no'
//       }
//     )
// }


