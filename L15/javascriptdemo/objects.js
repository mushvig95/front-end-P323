class UserInfo {
    constructor(name, surname, yearOfBirth, age, zodiac){
        this.name = name;
        this.surname = surname;
        this.birthYear = yearOfBirth;
        this.age = age;
        this.zodiacSign = zodiac
    }
    getFullName() {
        console.log(`My full name ${this.name} ${this.surname}`);
    }
}

class SuperUserInfo extends UserInfo {
    constructor(name, surname, yearOfBirth, age, zodiac, superPower) {
        super(name, surname, yearOfBirth, age, zodiac);
        this.superPower = superPower;
    }
}

// const myInfo = {
//     name: "Mushvig",
//     surname: "Niftaliyev",
//     yearOfBirth: 1995,
//     age: 27,
//     zodiac: "Taurus"
// }

const myInfo = new UserInfo("Mushvig", "Niftaliyev", 1995, 27, "Taurus");

const tamerlanInfo = new UserInfo("Tamerlan", "Alimardanli", 1991, 31, "Cancer");

const salmanInfo = new SuperUserInfo("Salman", "Haziyev", 2004, 18, "Cancer", "GangstaRapShit");

// const searchedKey = "zodiacSign";


// console.log(myInfo[searchedKey]);

myInfo.getFullName();

salmanInfo.getFullName();