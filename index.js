
const user_guesses = 10;


// console.log(document.querySelector("div > form > label"));

// selecting levels to hide after they clicked 
const levels = document.querySelector(".levels");

// selecting form class to show them after level button clicked 
const form = document.querySelector(".form");


const buttons = document.querySelectorAll(".level");
console.log(buttons);

function easy(){
  const easy = document.querySelector("div > form > label");
  easy.innerHTML = "Guess a number(1-5)";
  
}
function medium(){
  const easy = document.querySelector("div > form > label");
  easy.innerHTML = "Guess a number(1-10)";
  
}
function hard(){
  const easy = document.querySelector("div > form > label");
  easy.innerHTML = "Guess a number(1-20)";
  
}

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    const level = Number(e.target.id);
    console.log(level);
    random_number = Number(Math.floor(Math.random() * level)+1);
    console.log(random_number);
    if(level === 5){
      levels.style.display = "none";
      form.style.display = "unset";
      easy();
      submit.addEventListener("click", answer);   
    } else if(level === 10){
      levels.style.display = "none";
      form.style.display = "unset";
      medium();
      submit.addEventListener("click", answer);      
    } else if(level === 20){
      levels.style.display = "none";
      form.style.display = "unset";
      hard();
      // answer(random_number);
      submit.addEventListener("click", answer);
    }
  })
})

const submit = document.getElementById("subt");
console.log(submit);
const guessed_num = document.getElementById("guessfield");
console.log(guessed_num);
// const random_number = Math.floor(Math.random() * 100)+1;
// console.log(random_number);

// submit.addEventListener("click", answer);

function answer(level){
    // random_number = Number(Math.floor(Math.random() * level)+1);
    // console.log(random_number);
    const user_enter_num = Number(guessed_num.value);
    console.log(isNaN(user_enter_num));
    if (isNaN(user_enter_num)){
        document.querySelectorAll("div > .guessing > p")[0].innerHTML = "oops, Enter number only"
        document.querySelectorAll("div > .guessing > p")[1].innerHTML = ""
    }else
    {
      if (random_number === user_enter_num){
        document.querySelectorAll("div > .guessing > p")[0].innerHTML = "The number is "+ random_number + " and your number is "+ user_enter_num;
        document.querySelectorAll("div > .guessing > p")[1].innerHTML = "Congratulation you have guessed the number"
      } 
      else{
        document.querySelectorAll("div > .guessing > p")[0].innerHTML = "The number is "+ random_number + " and your number is "+ user_enter_num;
        document.querySelectorAll("div > .guessing > p")[1].innerHTML = "oops, looks like you failed try again"
      } 
    }
}
