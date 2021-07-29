'use strict'
//console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent= '😊 correct number!';

//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 10;
//document.querySelector('.guess').value=23;
//console.log(document.querySelector('.guess').value);


//////////eventlistner///////////
const number = Math.trunc(Math.random()*20)+1
console.log(number);
let score = 20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);

 if (!guess){
  document.querySelector('.message').textContent = '🥺No Number'
}else if(guess===number){
  document.querySelector('.message').textContent= '😊 correct number!';
  document.querySelector('.number').textContent=number;
   if(score>highscore){
     highscore=score;
    document.querySelector('.highscore').textContent=highscore;

   }

  document.querySelector('.number').textContent=number;
  document.querySelector('body').style.
  backgroundColor= '#60b347'; 
  document.querySelector('.number').style.width = '30rem';

}else if (guess>number){
  if(score>0){
    document.querySelector('.message').textContent = 'too high!';
    score=score-1;
    ////score--
    document.querySelector('.score').textContent = score;
  }else{
    document.querySelector('.message').textContent='you lost!!!';
  }
  }else if (guess<number){
    document.querySelector('.message').textContent='too low :((';
    if(score>0)
    score=score-1;
    ////score--
    document.querySelector('.score').textContent = score;
    if(score>0){
      document.querySelector('.message').textContent = 'too low!';
      score=score-1;
      ////score--
      //document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent='you lost!!!';
    }

  }
  }
)


