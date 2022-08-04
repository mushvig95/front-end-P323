// console.log("This is hi from JS")

// PRIMITIVE
// NUMBER
// STRING
// BOOLEAN

let myVairable = 5;


myVairable = 3;

const myConst = 12;
console.log(myVairable);

console.log(myVairable);
console.log(myConst);

let var1 = 5;
let var2 = 5.5;

let var3 = var1 /  var2;

let khasayInfo1 = "Khasay, vallah sen";
let khasayInfo2 = "kadrsan";

let khasayTotal = khasayInfo1 + khasayInfo2;

// console.log(setir);

// console.log("The res is", var3);

// console.log(khasayTotal);

const variable1 = 5;
const variable2 = "5.5";
const variable3 = 3;



const total = variable1 + parseFloat(variable2) + variable3;

console.log(total);

// >, <, >=, <=, ==, ===, !=, !==
const myBool = 1 === "2";

console.log(myBool);

if(myBool) {
    console.log("Values are the same")
} else {
    console.log("Values are not the same");
}

// TERNARY OPERATOR
myBool ?  console.log("Values are the same") : console.log("Values are not the same");

if(variable1 === 1) {
    console.log("My var is 1")
} else if(variable1 === 2) {
    console.log("My var is 2")
} else if(variable1 === 4) {
    console.log("My var is 4")
} else {
    console.log("My var is ", variable1);
}

switch(variable1) {
    case "1":
        console.log("My var is 1");
        break;
    case "2":
        console.log("My var is 2");
        break;
    default:
        console.log("My var is ", variable1)
}


const myName = prompt("Enter your name");

console.log(myName);

alert("THIS IS ALERT");