const name = "Faiq";
const surname = "Rasulzadeh";
const birthYear = 2002;
// const fullName = name + " " + surname;

// const fullName = `${name} ${surname} and my age is ${2022 - birthYear}`;

const fullName = `My full name is
Mushvig
im a teach at CODE
`

console.log(fullName);

const myVar = 5;

if(myVar === 5) {
    console.log(5)
} else if(myVar === 4) {
    console.log(4)
} else {
    console.log("UNDEFINED")
}

myVar === 5
    ? console.log(5)
    : myVar === 4
        ? console.log(4)
        : console.log("UNDEFINED")


const myArray = ["Mushvig", "Niftaliyev", 1995, 27, "Taurus"];

// console.log(myArray);

const myArray2 = new Array("Faiq", "Rasulzade", 2002, 20, "Twins");

// console.log(myArray2);

const myArray3 = Array.of("Tamerlan", "Alimardanli", 1991, 31, "Cancer");

myArray3.push("new value");
console.log(myArray3);

myArray3.unshift("new new value");
console.log(myArray3);

myArray3.pop();
console.log(myArray3);
// console.log(myArray3[0])

// myArray3[0] = "Tural";
// console.log(myArray3[0]);

// myArray3[12] = "CODE";
// console.log(myArray3.length);

// pop push shift unshift
// const newArray = new Array(5);

// console.log(newArray);

// const newArray2 = Array.of(5);

// console.log(newArray2);