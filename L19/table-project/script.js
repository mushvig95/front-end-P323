const addStudentBtn = document.getElementById("add");
const tableBody = document.getElementById("table-body");
const studentList = [];

function generateId() {
    return Math.floor(Math.random() * 1000);
}

function isDataValid(student) {
    // if(Boolean(student.name) && Boolean(student.surname) && Boolean(student.birthday) && Boolean(student.age)) {
    //     return true
    // } else {
    //     return false
    // }

    return Boolean(student.name) && Boolean(student.surname) && Boolean(student.birthday) && Boolean(student.age)
}

function renderStudentList() {
    tableBody.innerHTML = "";
    studentList.map((student) => {
        const studentRow = `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.surname}</td>
                <td>${student.birthday}</td>
                <td>${student.age}</td>
                <td>${student.gender === "M" ? "Male" : "Female"}</td>
                <td>
                    <img src="./icons/delete.svg" alt="delete">
                    <img src="./icons/edit.svg" alt="edit">
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML("beforeend", studentRow);

    })
}

addStudentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newStudent = {
        id: generateId(),
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        birthday: document.getElementById("birthday").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("genderM").checked ? "M" : "F"
    }
    if(isDataValid(newStudent)) {
        document.getElementById("student-form").reset();
        studentList.push(newStudent);
        renderStudentList();
    } else {
        console.log("PLEASE FILL THE DATA");
    }
})