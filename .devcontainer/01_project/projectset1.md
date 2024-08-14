# Projects related to DOM
## project link
[click here](http://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution code
const buttons = document.querySelectorAll('.button');
//console.log(buttons)
const body = document.querySelector('body')
buttons.forEach(function(keys){
  console.log(keys);
  keys.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target)
    
    if(e.target.id==='grey')
     body.style.backgroundColor=e.target.id;
     if(e.target.id==='white')
     body.style.backgroundColor=e.target.id;
     if(e.target.id==='blue')
     body.style.backgroundColor=e.target.id;
     if(e.target.id==='yellow')
     body.style.backgroundColor=e.target.id;
  })
})

## project 1

``` javasript
console.log("priya")

```
## project 2
let random = parseInt(Math.random()* 100 +1)
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const prevguess = document.querySelector('.guesses')
const remain = document.querySelector('.lastResult')
const lowORhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const para = document.createElement('p');
let prevnum=[];
let numguess=1;
let playgame = true;
if(playgame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess= parseInt(userInput.value);
    validcheck(guess);

  })
 
}

function validcheck(guess){
  if(isNaN(guess)){
    alert('pls enter a valid number')
  }
  else if( (guess < 1)|| (guess>100) ){
    alert('plz enter a valid number')
  }
  else{
    prevnum.push(guess)
    if(numguess===11){
      displayguess(guess);
      displaymessege(`your game is over and the no was ${random}`)
      endgame()
    }
    else{
      displayguess(guess);
      guesscheck(guess);
     }
    
  }
}

function guesscheck(guess){
  if(guess===random){
    displaymessege('you guessed it right')
    endgame()
  }
  else {
    if(guess<random){
      displaymessege('ans is higher')  
    }
    else {
      displaymessege('ans is lower')
    }
  }
}

function displayguess(guess){
  userInput.value=' '
  prevguess.innerHTML+= `${guess}  `
  numguess++
  remain.innerHTML= `${11-numguess}`
  


}

function displaymessege(messege){
  lowORhigh.innerHTML=`<h2> ${messege} </h2>`
}

function endgame(){
  userInput.value='';
  userInput.setAttribute('disabled', '' )
  para.classList.add('button')
  para.innerHTML ='<h2 id="newgame">start a new game</h2> '
  startOver.append(para)
  playgame = false;
  startgame()


}

  function startgame(){
   const newgamebutton=document.querySelector('#newgame')
   newgamebutton.addEventListener('click',function(e){
    random = parseInt(Math.random()* 100 +1)
    prevnum=[];
    numguess=1;
    prevguess.innerHTML=''
    remain.innerHTML= `${11-numguess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(para)
    playgame = true;


   });
}


