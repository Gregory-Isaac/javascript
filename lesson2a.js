//object data type
// an object in javascript is a data type that stores data in form of key value pairs

let person = {
    name: "gregory isaac",
    age: 18,
    isregistred: true,
};

console.log("the details of the person is: ", person);

// first methods is by the use of square brackets
console.log(person["Age"]);

// second method is by the use of dot notation
console.log(person.name);

//check the data type of the person variable
console.log(typeof (person));

//array data type
// an array is a data type that can store multiple values in a single variable
fruits = ["apple", "banana", "orange", "grape"];
console.log("the fruits are: ", fruits);

//to access the items of an arry we use the index
console.log(fruits[3]);

//you can slice items of an array
console.log(fruits.slice(1, 3));