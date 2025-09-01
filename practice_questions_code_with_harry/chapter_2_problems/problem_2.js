let operator="+";
let num1=10;
let num2=20;
console.log("The numbers are : " + num1 + " and " + num2);
console.log("The Operator is: " + operator);
switch(operator){
  case "+":
    console.log("The sum is: " +num1+num2);
    break;
  case "-":
    console.log("The difference is: " +num1-num2);
    break;
  case "*":
    console.log("The product is: " + num1*num2);
    break;
  case "/":
    console.log(num1/num2);
    break;

}
