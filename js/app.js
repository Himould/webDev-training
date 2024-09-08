// Objects
const product = {name: "Gummy Bears", 
                inStock: true, 
                price: 1.99, 
                flavors: ["grape", "apple", "cherry"]
            };
const restaurant = {
                name: 'Ichiran Ramen',
                address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
                city: 'Brooklyn',
                state: 'NY',
                zipcode: '11206',
            }
const fullAddress = `'${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}'`

// For loop, remember tit is seperated by semi colon
for (let i = 1; i <= 6; i++){
    console.log(i, 'Da ba dee da ba daa')  //console.log('Da ba dee da ba daa') this can work too without the i
};

for (let i = 25; i >= 0; i-= 5){
    console.log(i);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++){
    console.log(people[i].toUpperCase());
}

// Number Guess Game 

let maximum = parseInt(prompt("enter your maximum number"));
while (!maximum){
    maximum = parseInt(prompt(`enter a valid number`));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1
let guessedNumber = prompt(`enter your first guess! (type q to quit the game)`);
let attempt = 1

while (parseInt(guessedNumber) !== targetNumber){
    if (guessedNumber === "q") break;
    guessedNumber = parseInt(guessedNumber);
    if (guessedNumber > targetNumber){
        attempt++;
        guessedNumber = prompt(`Number too high, try again`);
    } else if (guessedNumber < targetNumber){
        attempt++;
        guessedNumber = (prompt(`Number too low, try again`));
    } else{
        guessedNumber = prompt(`Invalid guess. Please enter a number or 'q' to quit`)
    }
}
    if (guessedNumber === "q"){
        console.log(`YOU QUIT!!! TRY AGAIN ANOTHER TIME`)
    } else{
        console.log(`YOU GOT IT!!! AFTER ${attempt} guesses`);
    }
    
