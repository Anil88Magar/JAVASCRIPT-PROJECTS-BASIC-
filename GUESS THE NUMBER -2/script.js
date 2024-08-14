const input = document.querySelector('.guess')
const button = document.querySelector('.check')
const message = document.querySelector('.message')
const displayScore = document.querySelector('.score')
const highScore = document.querySelector('.highScore')
const randomNumber = parseInt(Math.random() *20 +1 );

let score = 20;
button.addEventListener('click',(e)=>{
    
    const guess = parseInt(input.value);
    if(isNaN(guess)){
        message.innerHTML = 'Please enter a valid number.';
        score -- ;
        displayScore.textContent = score ;
    }else if(guess > 20){
         message.innerHTML = 'Please enter a number less than 20.';
         score -- ;
        displayScore.textContent = score ;
    }else if(guess < 1){
        message.innerHTML = 'Please enter a number greater than 1.'
        score -- ;
        displayScore.textContent = score ;
    }else if (guess > randomNumber){
        message.innerHTML =" Too low !";
        score -- ;
        displayScore.textContent = score ;
    }else if(guess < randomNumber){
        message.innerHTML = "Too High.";
        score -- ;
        displayScore.textContent = score ;
    }else{
        message.innerHTML = "Correct guess, You won !!"
    }
})