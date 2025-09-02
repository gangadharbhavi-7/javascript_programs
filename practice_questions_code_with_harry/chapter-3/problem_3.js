real = 12;
while(true){
  let num = prompt("Enter a number:");
  if(num == real){
    console.log("You guessed it right");
    break;
  }
  else if(num < real){
    console.log("Too low");
  }
  else if(num > real){
    console.log("Too high");
  }
  else{
    console.log("Invalid input");
  }
}
