const prompt = require('prompt-sync')();
function large(){
    let num1 = prompt("Enter the first Number:");
    let num2 = prompt("Enter the second Number:");
    if (num1>num2){
        console.log(num1+"is greater than"+num2);
    }
    else{
        console.log(num2+"is greater than"+num1);
    }
}
function check(){
    let num = prompt("Enter a Number:");
    if (num%2==0){
        console.log("This is an even number");
    }
    else{
        console.log("This is an odd number");
    }
}
large();
check();