// anonymous functions in javascript
// anonymous functions are functions that do not have a name

// below is an example of such function:
// The below function shall take the name of the variable they ar econtained

const greet = function(name) {
    console.log("Hello there, hope your monday is going well ",);
}
console.log(typeof(greet));
greet();



// below is another anonymous function that takes in two parameters and adds them together
(function(){
    console.log("Welcome to the world of programming...");
})();