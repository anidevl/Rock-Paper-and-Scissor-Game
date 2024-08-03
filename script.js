let buttonCount = 0 ;
let compChoice='';
let score= JSON.parse(localStorage.getItem('score')) || {
    Won:0,
    Lose:0,
    Draw:0,
}
generateScore();
// localStorage.clear();
function buttonClicked(userChoice){
   userChoiceDisplay(userChoice);
   compChoice=computerChoiceDisplay();
   generateResult(userChoice,compChoice);
  /*
  
  we will not only generate score using generateScore() function but also store our score value in localStorage. I know this will be a little verbose and can be done in another function but if it is possible then why not do it.

  */  
   generateScore();
   localStorage.setItem('score',JSON.stringify(score));
}
function userChoiceDisplay(userChoice){
    let displayUser= document.querySelector('.user-choice');
    if(userChoice==='paper'){
        displayUser.classList.add('js-paper');
        displayUser.classList.remove('js-rock');
        displayUser.classList.remove('js-scissor');
    }
    else if(userChoice==='rock'){
        displayUser.classList.add('js-rock');
        displayUser.classList.remove('js-paper');
        displayUser.classList.remove('js-scissor');
    }
    else{
        displayUser.classList.add('js-scissor');
        displayUser.classList.remove('js-paper');
        displayUser.classList.remove('js-rock');
    }

}
function computerChoiceDisplay(){
    compChoice = randomGenerate();
    let displayComp= document.querySelector('.computer-choice');
    if(compChoice==='paper'){
        displayComp.classList.add('js-paper');
        displayComp.classList.remove('js-rock');
        displayComp.classList.remove('js-scissor');
    }
    else if(compChoice==='rock'){
        displayComp.classList.add('js-rock');
        displayComp.classList.remove('js-paper');
        displayComp.classList.remove('js-scissor');
    }
    else{
        displayComp.classList.add('js-scissor');
        displayComp.classList.remove('js-paper');
        displayComp.classList.remove('js-rock');
    }
    return compChoice;
   
}
function randomGenerate(){
    let rand = Math.random()*3;
    if(rand>0 && rand<=1){
       return compChoice='paper';
    }
    else if(rand>1 && rand <=2){
        return compChoice='rock';
    }
    else{
        return compChoice='scissor';
    }
}
function generateResult(userChoice,compChoice){
    let userStatus=document.querySelector(".user-status");
    let computerStatus= document.querySelector(".computer-status");
    if(compChoice==userChoice){
          userStatus.innerText='User : Draw';
          computerStatus.innerText='Computer : Draw';
          return score.Draw+=1;
    }
    else if(userChoice=='paper' && compChoice=='scissor'){
        userStatus.innerText='User : Lose';
        computerStatus.innerText='Computer : Won';
        return score.Lose+=1;
    }
    else if(userChoice=='paper' && compChoice=='rock'){
        userStatus.innerText='User : Won';
        computerStatus.innerText='Computer : Lose';
        return score.Won+=1;
    }
    else if(userChoice=='rock' && compChoice=='paper'){
        userStatus.innerText='User : Lose';
        computerStatus.innerText='Computer : Won';
        return score.Lose+=1;
    }
    else if(userChoice=='rock' && compChoice=='scissor'){
        userStatus.innerText='User : Won';
        computerStatus.innerText='Computer : Lose';
        return score.Won+=1;
    }
    else if(userChoice=='scissor' && compChoice=='rock'){
        userStatus.innerText='User : Lose';
        computerStatus.innerText='Computer : Won';
        return score.Lose+=1;
    }
    else if(userChoice=='scissor' && compChoice=='paper'){
        userStatus.innerText='User : Won';
        computerStatus.innerText='Computer : Lose';
        return score.Won+=1;
    }
    else{
        console.log("Invalid choice");
    }
}
function generateScore(){
    
    document.querySelector('.score-status').innerText=`Score : Won : ${score.Won} Lose : ${score.Lose} Draw : ${score.Draw} `;

    
}