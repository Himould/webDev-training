
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


