let distance = 750;  // change this value to test
let amount;

if (distance >= 0 && distance <= 100) {
    amount = 5;
}
else if (distance >= 101 && distance <= 500) {
    amount = 10;
}
else if (distance >= 501 && distance <= 1000) {
    amount = 20;
}
else if (distance >= 1001) {
    amount = 40;
}
else {
    amount = "Invalid distance";
}

console.log("Distance: " + distance);
console.log("Amount to Pay: " + amount + " USD");