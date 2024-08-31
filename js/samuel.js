
// // VARIABLE, ALERT, CONSOLE.LOG
// var myName = "niyi";
// console.log(myName.length)


// // LENGTH
// var tweet = prompt("type your tweet here"); // i had to comment the prompt
// var tweetCount = tweet.length;
// console.log("you have written " + tweet.length + " characters, you have " + (200 - tweet.length) + " characters left");

// // SLICE PROGRAMMERS ALWAYS COUNT FROM ZERO
// var school = "obafemi";
// console.log(school.slice(0,2));

// tweet.slice(0,5);

// console.log(prompt("type your tweet here").slice(0,5));

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

function bmiCalculator(weight, height){
    var bmi = weight / (height * height);
    return Math.round(bmi);
}
console.log(bmiCalculator(65, 1.8));





