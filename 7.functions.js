//Defining a function

const square = function (x) {
    return x * x;
};
console.log(square(12));
// → 144


const hello = function () {
    console.log('hello world');
};

hello();


const get_Power = function (base, exponent) {
    let count;
    let result = 1;
    for (count = 0; count < exponent; count++) {
        result = result * base;
    }
    return result;
};

console.log(get_Power(7, 2));


let x = 10;
if (true) {
    let y = 20;
    //y is local in if statments
    var z = 30;
    console.log(x + y + z);
    // → 60
}
// y is not visible here
console.log(x + z);
// → 40

console.log("The future says:", future());
function future() {
    return "You'll never have flying cars";
}



const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};


const square1 = (x) => { return x * x; };
const square2 = x => x * x;


function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");


function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5


function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64