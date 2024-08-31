
/*// VARIABLE, ALERT, CONSOLE.LOG
// var myName = "niyi";
// console.log(myName.length)
var dogAge = prompt("what is your dog age");
humanAge = ((dogAge - 2) * 4) + 21
console.log("your age is " + humanAge);


// // LENGTH
var tweet = prompt("type your tweet here"); // i had to comment the prompt
var tweetCount = tweet.length;
console.log("you have written " + tweet.length + " characters, you have " + (200 - tweet.length) + " characters left");

// SLICE PROGRAMMERS ALWAYS COUNT FROM ZERO
var school = "obafemi";
console.log(school.slice(0,2));

tweet.slice(0,5);

// coding exercise
function lifeInAge (age){
    var lifeRemaining = (90 - age);
    var ageInWeeks = lifeRemaining * 52;
    var ageInDays = lifeRemaining * 365;
    console.log("you have " + ageInWeeks + " weeks, " + ageInDays + " days left");
}
lifeInAge(30);

// console.log(prompt("type your tweet here").slice(0,5));

var yourName = prompt("what is your name");
var firstLetter = yourName.slice(0, 1);
var upper = firstLetter.toUpperCase()
var lower = yourName.slice(1, length.yourName);
lower.toLowerCase()
alert("Hello " + upper + lower);

// FUNCTIONS, FLOOR, CALLING FUNCTION,RETURN

function getMilk(money, costPerBottle){
    var numberOfBottles = Math.floor(money/costPerBottle)
    console.log("Hello boss, I bought " + calcNoBottles(money, costPerBottle) + " bottles of milk.");
    return calChange(money, costPerBottle); 
}

function calcNoBottles (startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);
    return numberOfBottles;
}

function calChange(startingMoney, costPerBottle){
    var change = startingMoney % costPerBottle // modulus gives the remainder of number
    return change;
}

console.log("here is your " + "$" + getMilk(5, 4) + " change" );

// CHALLENGE -- BMI CALCULATOR

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.




/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

// function bmiCalculator(weight, height){
//     var bmi = weight / (height * height);
//     return Math.round(bmi);
// }
// console.log(bmiCalculator(65, 1.8));

// LOVE CALCULATOR
prompt("type your lovers name");
prompt("type your name");

var N = Math.random() * 100;
 N = Math.floor(N) + 1
// console.log("your love is " + A + "%");
alert("your love is " + N + "%")




