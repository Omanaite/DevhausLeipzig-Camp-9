//object Destructuring
function baz(){
    return {
        firstName: "Pablo",
        lastName: "Chandia",
        age: 32
    };
}

//const { age, lastName } = baz (); // => {firstName: "Pablo", lastName : "Chandia"}
console.log(lastName);

//array Destructuring
function foo(){
    return ["one", 22, true];
}

const [myString, myNumber, myBoolean] = foo();

const foo = ["one", "two", "three"];

const redd = foo[0];
const yelloww = foo[1];
const greenn = foo[2];

console.log(redd); // "one"
console.log(yelloww); // "two"
console.log(greenn); // "three"


const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;

console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

//rest Parameters

function sumUp(...numbers){ // => function sumUp(num1, num2){
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++){ // => for (num of numbers)
        sum = sum + numbers[i];// => sum =+ num // 5,10,16,23,31
        console.log (sum);  
    }
}

sumUp(2, 3, 5, 6, 7, 8);
//sumUp(3,5);