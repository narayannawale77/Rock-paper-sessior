let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let winner = document.querySelector('#winner');

let choices = ['rock', 'paper', 'scissors'];

function getRandomNum(){
    return Math.floor(Math.random()*3) + 1 ;
}

// Rock vs. Scissors: Rock wins.
// Scissors vs. Paper: Scissors wins.
// Paper vs. Rock: Paper wins.
rock.addEventListener('click', function(){
    let r = getRandomNum(); 
    if(r === 1){
        //drwan
        displayMessage('Drawn')
    }
    else if(r === 3){//scissor
        //Win
        displayMessage('You')
    }
    else{
        //lose//com select paper
        displayMessage('Computer')
    }
    displayChoice('rock', r);
})

paper.addEventListener('click', function(){
    let r = getRandomNum(); 
    if(r === 2){
        //drwan
        displayMessage('Drawn');
        

    }
    else if(r === 1){//rock
        //Win
        displayMessage('You')
    }
    else{
        //lose//com select sessor
        displayMessage('Computer')
    }
    displayChoice('paper', r)
})
scissors.addEventListener('click', function(){
    let r = getRandomNum() ;
    if(r === 3){
        //drwan
        displayMessage('Drawn')
    }
    else if(r === 2){ //paper
        //Win
        displayMessage('You')
    }
    else{
        //lose//com select rock
        displayMessage('Computer')
    }
    displayChoice('scissors', r);
})
function displayMessage(message){
    document.getElementById('win').innerText = message;
}
function displayChoice(message, r){
    document.getElementById('YourChoice').innerText = message;
    if(r === 1){
        document.getElementById('compChoice').innerText = 'Rock';
    }else if(r === 2){
        document.getElementById('compChoice').innerText = 'Paper';
    }else{
        document.getElementById('compChoice').innerText = 'scissors';
    }
}