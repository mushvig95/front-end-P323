

// var studentName = "Baylar";
// var studentSurname = "Sadiqov";

// getFullName(studentName, studentSurname);



// function getFullName(name, surname) {
//     console.log(`My name is ${name} ${surname}`);
// }


// const getAge = function (stName) {
//     if(stName === "Salman") {
//         console.log("GANGHSTA SHIT")
//     } else {
//         console.log("NORMAL RAP")
//     }
//     return stName === "Salman" ? "GANGHSTA SHIT" : "NORMAL RAP";
// };

// console.log(getAge("Salman"));


// (
//     function(name) {
//         console.log("I AM IMMEDIATELY INVOKED FUNCTION and My NAME IS ", name);
//     }
// )("Khasay");


// getAge("Salman");





// const studentName = "Faiq";
// const studentSurname = "Rasulzade"

function getAgeByBirthYear(birthYear){
    return 2022-birthYear
}

function getStudentInfo(stName, stSurname ,birthYear, ageCalculationFunction) {
    console.log(`My name is ${stName} ${stSurname} and I am ${ageCalculationFunction(birthYear)}`)
}

getStudentInfo("Baylar", "Sadiqov", 2002, getAgeByBirthYear);


var getFullName = name => console.log("My full name is ", name);

getFullName("Khasay");