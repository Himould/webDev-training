
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