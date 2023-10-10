const form = document.querySelector("#form")
const reset = document.querySelector("#reset")
const submit = document.querySelector('#submit');
let previousGuess =document.querySelector('.prev');
let result = document.querySelector('.result');
let highLow = document.querySelector('.prob');
let arr=[]
let counter=0;
let flag=false;
let guess;

let generateNumber= ()=>{
    target=Math.floor(Math.random()*100)+1;
}
generateNumber();

console.log(target);
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    guess = document.querySelector('#num').value;
    if(counter<10 && flag==false){
        if(guess>100 || guess<1 || guess==null){
            highLow.innerHTML="Invalid guess, please enter values between 1 to 100"
        }else{
            counter++;
            arr.push(guess)
            let str = arr.join(' ');
            previousGuess.innerHTML=`Previous Guesses : ${str}`
            if(guess == target){
                result.innerHTML="Congrats! You guessed it Right."
                result.style.color ="green";
                highLow.innerHTML="";
                flag=true;
            }else if(guess>target){
                result.innerHTML="Wrong"
                result.style.color="Red";
                highLow.innerHTML="Last guess was too HIGH"
            }else{
                result.innerHTML="Wrong"
                result.style.color="Red";
                highLow.innerHTML="Last guess was too LOW"
            }
            document.querySelector('#num').value="";
        }
    }else if(flag==true){
        result.innerHTML="Congrats! You guessed it right."
    }else{
        result.innerHTML="Game Over, Click on New Game"
    }
    
   
    

})
reset.addEventListener('click',(e)=>{
    document.querySelector('#num').value="";
    counter=0;
    arr=[];
    previousGuess.innerHTML="";
    result.innerHTML="";
    highLow.innerHTML="";
    flag=false;
    generateNumber();
    console.log(target);
})

