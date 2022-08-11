// const students = {
//     name: "Salman",
//     slogan: "GANGSTA SHIT",
//     age: 17,
//     personalInfo: {
//         mode: "relaxalways",
//         musicStyle: "any rap that sounds cool"
//     }
// }

// const students2 = {...students, personalInfo: {...students.personalInfo}};
// students.personalInfo.mode = "angry";

// console.log(students);
// console.log(students2);

// let var1 = 5;
// let var2;
// var2 = var1;
// var1 = 8;

// console.log(var1);
// console.log(var2);

// const myArray = [1,2,3,4,5];

// const myArray2 = [...myArray];

// myArray.map(e => myArray2.push(e));

// myArray[0] = 9;

// console.log(myArray);
// console.log(myArray2);


// HTML QUERY

// getElementById
// getElementsByClassName
// getElementByTagName

// querySelector()
// querySelectorAll()


// const rootDiv = document.getElementById("head");

// const headerDiv = document.getElementsByClassName("heading-class");

// const stList = document.getElementsByTagName("li");

// console.log(rootDiv);

// console.log(headerDiv.length);

// console.log(stList)

// const wrapperDiv = document.querySelector(".wrapper");

// console.log(wrapperDiv);

// const headingDiv = document.querySelectorAll(".heading-class");

// console.log(headingDiv[0]);

const myStudentList = document.querySelector(".student-list");

// CHAINING
// console.log(myStudentList.lastElementChild.previousElementSibling);

console.log("INNERHTML")
console.log(myStudentList.innerHTML);
console.log("INNERTEXT")
console.log(myStudentList.innerText);
console.log("TEXTCONTENT")
console.log(myStudentList.textContent);


myStudentList.children[2].innerHTML = "<div><span>Hello</span></div>";
