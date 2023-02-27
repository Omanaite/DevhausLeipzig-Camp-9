

let myNumber = 12;
let myString = "blablabla";

let string = myString.toUpperCase();

myString.toUpperCase();
//myNumber.toUpperCase(); => dont woek because the variable is number

function addition( num1: number, num2: number):number{
    return num1 + num2;
}

const test = addition(12, 12);
test

let myName: string | boolean = "Pablo";

myName = "Shari";
myName = true;

let myLastName: String;

myLastName = "pablo";

let myNickName: (number | string)[] = [];

let myArray: (String |number)[] = [];
myArray
myArray.push(2);
myArray.push("hallo");
myArray

const coords: [number,number] = [123456,456789];
coords.push(222);
coords

type Name = String | boolean;

let Mynamen: Name = "Blopa";


myLastName = "julian"

const myArr: (number | string)[] = [];

myArr.push(12);
myArr.push("dsfds");





type User = {
    firstName: string;
    lastName: string;
    email: string;
    hobbies: string[]
}

type Admin = {
    firstName: string;
    lastName: string;
    isAdmin: boolean;
}

type AllUser = User | Admin;

const user = {
    firstName: "julian",
    lastName: "vogel",
    email: "julian@web.de",
    hobbies: ["sport", "coding"]
}


function returnUserName(user: AllUser){
    if("isAdmin" in user){
        console.log(user.isAdmin)
    }
    return user.firstName;
}

const y = returnUserName(user)

let myTuple: [number, string] = [12, "hello"];


type Champion = {
    maxHealth : number;
    maxMana : number;
    primaryWeapons : (string | string)[];
    secondayWeapons : (string | string)[];
    skills : {
        firstSkillAndUses: (string | number)[];
        secondSkillAndUses: (string | number)[];
        thirdSkillAndUses: (string | number)[];
    }
    isRanked : boolean;
}

const barbarian = {
    maxHealth : 200,
    maxMana : 80,
    primaryWeapons : ["TwoHanded-Axe","TwoHanded-Axe"],
    secondayWeapons : ["Morning-Mace","OneHanded-Shield"],
    skills : {
        firstSkillAndUses : ["Berserker",4],
        secondSkillAndUses: ["Smash",4],
        thirdSkillAndUses: ["Iron Will",2]
    },
    isRanked: false
}

function returnSkillsInfo(barbarian: Champion){
    return barbarian.secondayWeapons;
}


const champInfo = returnSkillsInfo(barbarian);
champInfo;