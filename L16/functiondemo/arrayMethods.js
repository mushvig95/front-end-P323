const studentInfo = [
    {
        name: "Faiq",
        surname: "Rasulzade",
        age: 20
    },
    {
        name: "Tural",
        surname: "Ismayilov",
        age: 21
    },
    {
        name: "Mirqubad",
        surname: "Akbarov",
        age: 26
    }
];

function getString(name, surname, age) {
    console.log(`Student full name is ${name} ${surname}. And age is ${age}`)
}

// for(let i = 0; i < studentInfo.length; i++) {
//     getString(studentInfo[i].name, studentInfo[i].surname, studentInfo[i].age)
// }

studentInfo.map((student) => {
    // getString(student.name, student.surname, student.age)
    console.log(`Student full name is ${student.name} ${student.surname}. And age is ${student.age}`)
});


const olderStudents = studentInfo.filter(studentItem => studentItem.age > 20);

console.log(olderStudents);

const array = [8,5,7,3,9,1];

const sortedArray = array.sort((var1, var2) => {
    return var1 < var2 ? 1 : -1
});

console.log(sortedArray);

studentInfo.forEach(student => console.log(student.name))