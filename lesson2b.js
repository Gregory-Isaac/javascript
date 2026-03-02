// comparison opeartors
// they usualy evaluate to a bulean value 
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2); 
console.log(number1 >= number2);
console.log(number1 <= number2);
console.log(number1 > number2)
console.log(number1 < number2);
console.log(number1 != number2);

//triple equal sign - research in java script
// logical operators are used to evaluate two or more conditions
//logical AND operator (&&) - returns true if both conditions are true
console.log((number1 < number2 ) && (number2 > number1) && (number3 > number2));

//logical OR operator (||) - returns true if at least one condition is true
console.log((number1 < number2 ) || (number2 > number1))

//logical NOT operator (!) - returns true if the condition is false
console.log(!(number1 < number2));