// console.log(parseInt(Math.random() * 100 + 1));

const randomNumber = parseInt(Math.random() * 100 + 1)

const Submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guesSlot=document.querySelector('#.guesses')
const ramaining=document.querySelector('#.lastResult')
const startOver=document.querySelector('#.Resultparas')

let p = document.createElement('p')

let prevGuess=[];
let numGuess=1;

let playGame=true;