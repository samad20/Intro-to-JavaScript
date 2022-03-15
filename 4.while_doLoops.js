let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
// → 0
// → 2
// ... etcetera”

let yourName;
do {
    yourName = prompt("Who are you?");
}
while (!yourName);
console.log(yourName);
