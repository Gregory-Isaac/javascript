// functions with parameters
// parameters are values that get passed as arguments when we invoke a function
// they help us make our functions more flexible and reusable


function greeting(name) {
    console.log("Hello ", name ," How are you doing today?");
}

greeting("Greg Isaac");
greeting("Cecyl Smith");
greeting("John Doe");

console.log("================================");
//below is a function that takes in two parameters and adds them together
function addition(number1, number2) {
    sum = number1 + number2;
    console.log("The sum of the numbers is", sum);
}

addition(45,60);
addition(90,50);
addition(100,200);
console.log("================================");

function triangleArea(base, height) {
    area = (base * height) / 2;
    console.log("The area of the triangle is", area, "cm\u00B2");
}
triangleArea(10, 5);
triangleArea(20, 10);
triangleArea(15, 8);

function calculateSimpleInterest(principal, rate, time) {
    let simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}

// Given values
let principal = 50000;
let rate = 5;      
let time = 8;      

let result = calculateSimpleInterest(principal, rate, time);

console.log("Simple Interest is: " + result);