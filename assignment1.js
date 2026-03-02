// Array of numbers
let numbers = [10, 20, 30, 40, 50];

// Array of strings
let fruits = ["apple", "banana", "mango"];

// Mixed array
let mixed = [10, "apple", true];

console.log(numbers[0]); // 10 → first item
console.log(fruits[2]);  // "mango" → third item
console.log(mixed[1]);   // "apple" → second item

fruits.push("orange"); // add at the end
fruits.unshift("kiwi"); // add at the start

//objects
let person = {
    name: "Gregory",
    age: 22,
    course: "Computer Science",
    isStudent: true
};
console.log(person.name);      // "Gregory"
console.log(person["age"]);    // 22
console.log(person.isStudent); // true

//array of objects
let students = [
    {name: "Gregory", age: 22},
    {name: "Alice", age: 21},
    {name: "Bob", age: 23}
];

console.log(students[0].name); // "Gregory"
console.log(students[2].age);  // 23
