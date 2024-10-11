
// miles to kilometer converter, note how i use Math.round to round it up to the nearest 2decimal
function converter(miles){
    let kilometers = miles / 1.60934
    return `the distance of ${miles}miles equals ${Math.round(kilometers * 100) / 100}km`;
}
// adding element to an array
const shoppinglist = ['milk', 'bread', 'apple'];
shoppinglist[1] = 'banana';
console.log(shoppinglist);
shoppinglist.splice(2,1, 'orange')

// Exercise 3.2
const shoplist = [];
shoplist[0] = 'milk';
shoplist.push('bread');
shoplist.push('apple');
shoplist.splice(1,1, 'banana','egg');
shoplist.pop([2]);

shoplist.sort()
console.log(shoplist);
const newlist = []
newlist.push('juice', 'pop');

const finalList = [shoplist.concat(newlist, newlist)];
console.log(finalList);
finalList.lastIndexOf('pop')

// exercise chapter 3 project
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
    {test: 'one', score: 55}, ['one', 'two']];
    theList.pop();
    theList.unshift('FIRST');
    theList[3] = 'hello world';
    theList[2] = 'middle';
    theList.push('LAST');

// project 2
const inventory = [];
 const item3 = {
    name: "computer",
    model: "imac",
    cost: 1000,
    qty: 3
 }
 const item2 = {
    name: "phone",
    model: "android",
    cost: 500,
    qty: 11
 }
 const item1 = {
    name: "tablet",
    model: "ipad",
    cost: 650,
    qty: 1
 }
inventory.push(item1, item2, item3);

// chapter 4

const myVar = true;
if (myVar){
    console.log('it is false')
}   else if (!myVar){
    console.log('it is true')
}

/* let age = prompt("How old are you?");
 age = parseInt(age);
 let message;
 if(age >= 21){
    message = "You can enter and drink.";
 }else if(age >= 19){
    message = "You can enter but not drink.";
 }else{
    message = "You are not allowed in!";
 }
 console.log(message); */

//  conditional tenary operator

const ID = false
const newMsg = (ID) ? "Allow in" : "Denied Access";
console.log(newMsg);

// ROCK PAPER SCISSORS GAME -- Rock will beat out Scissors, Paper will beat out Rock, and Scissors will beat out Paper

const myArr = ["Rock", "Paper", "Scissors"]; 
let computer = Math.floor(Math.random() * 3); 
let player = Math.floor(Math.random() * 3); 
let message = "player " + myArr[player] + " vs computer " + myArr[computer] + " "; 

if (player === computer) { 
    message = "it's a tie"; 
} else if (player > computer) { 
    if (computer == 0 && player == 2) { 
        message = "Computer Wins"; 
    } else { 
        message = "Player Wins"; 
    } 
} else { 
    if (computer == 2 && player == 0) { 
        message = "Player Wins"; 
    } else {    message += "Computer Wins"; 
    } 
} 
console.log(message);

// my time
let myTime = 9;
let output;
if (myTime >= 8 && myTime < 12) {
   output = "Wake up, it's morning";
} else if (myTime >= 12 && myTime < 13) {
   output = "Go to lunch";
} else if (myTime >= 13 && myTime <= 16) {
   output = "Go to work";
} else if (myTime > 16 && myTime < 20) {
   output = "Dinner time";
} else if (myTime >= 22) {
   output = "Time to go to sleep";
} else {
   output = "You should be sleeping";
}
console.log(output);

let val = 100;
 let message2 = (val > 100) ? `${val} was greater than 100` : `${val} was LESS or Equal to 100`;
 console.log(message2);

 let check = (val % 2) ? `Odd` : `Even`;
 check = `${val} is ${check}`;
 console.log(check);

//  another way to solve the fibonnaci 

function fibo(numOfTimes){
   let nr1 = 0;
   let nr2 = 1;
   let temp;
   fibonacciArray = [];
   while (fibonacciArray.length < numOfTimes) {
    fibonacciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp; 
  }  console.log(fibonacciArray);
}
fibo(5);

let counter = 0;
let step = 5;
do {console.log(counter)
counter += step} 
while (counter <= 100)

   let read = 0;
   while(read <= 20){
      console.log(read)
   read++
   }

   let evenNumber = [];
   let newCount = 0;
   while(newCount < 100){ if (newCount % 2 === 0){
      evenNumber.push(newCount)
   }
     newCount++
   }
   console.log(evenNumber);

// for loop, object inside of an array
   const myWork = [];
 for (let x = 1; x < 10; x++) {
    let stat = x % 2 ? true : false;
    let temp = {
        name: `Lesson ${x}`, status: stat
    };
    myWork.push(temp);
 }
 console.log(myWork);

 const arr = [1, 2, 3, 4, 5];
const [first, , third, ...rest] = arr;

console.log(first, third, rest);


/*function returnDay(day){
   let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   if (day > 7 || day < 1){
       return null;
   } else {
       return daysOfWeek[day - 1];
   }
 }

 document.queryselector('input[type="text"]');

 const eggImg = document.querySelector('img');
eggImg.src = 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200';
eggImg.alt = 'chicken';

const image = document.querySelector("img");
image.style.width = '150px';
image.style.borderRadius = '50%';
 
const container = document.querySelector('#container');
container.style.textAlign = 'center';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


const myColors = document.querySelectorAll('span');
for (let i = 0; i < myColors.length; i++){
myColors[i].style.color = colors[i];}

// Call-Stack

function multiply(x,y) {
   return x * y;
}

function square(x) {
   return multiply(x,x);
}

function isRightTriangle(a,b,c){
   return square(a) + square(b) === square(c);
}

isRightTriangle(3,4,5)

let age = prompt('age?', 18);


// let myMsg = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// console.log( myMsg );

// let message = (login == 'Employee') ? 'Hello' :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';

let user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)


if (age >= 14 && age <= 90){
   console.log(age)
}
if (ageReal <= 14 || ageReal >= 90){
   console.log(age)
}*/

let user = {
   name: "John",
   age: 30,
 
   sayHi() {
     // "this" is the "current object"
     console.log(this.name);
   }
 
 };
 
 user.sayHi(); // John

 let newUser = {
   name: "John",
   age: 30,
   isAdmin: true
 };
 
 for (let key in newUser) {
   // keys
   console.log( key );  // name, age, isAdmin
   // values for the keys
   console.log( newUser[key] ); // John, 30, true
 }