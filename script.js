'use strict';
//destructuring is a way to break arrays down into a smaller structure like an object

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

let weekdays = ['mon', 'tues', 'wed', 'thu', 'fri'];

let openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
/////////////////////////////////////////////////////////////////////////////////
// Data needed for first part of the section
const restaurant = {
  //this is an object literal
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //displays starter and main items placed in function, returns an array
  order(starterIndex, mainIndex) {
    //do not need to add 'order:function'
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //enhanced object literal
  openingHours,

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = '777 Heaven Road',
  }) {
    //destructured with default indexes
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to:
      ${address} at ${time}`
    );
  },

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here's your pasta with: ${ingredient1}, ${ingredient2}, ${ingredient3} `
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////////////////////////////////////////////////////
/*Does not replace arrays
//SETS: A group of unique objects, placed in an order that doesn't matter (cannot have duplicates) -> can hold mixed datatypes
let ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissoto']);
console.log(ordersSet); //removes duplicates
console.log(new Set('Thembi')); // T,h,e,...
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza')); //checks if set has the object
ordersSet.add('Garlic Bread');
ordersSet.delete('Pizza'); //removes all instances of pizza
console.log(ordersSet);
ordersSet.clear(); //delete all of the elements in the set

for (let order of ordersSet) {
  console.log(order);
}

//Example
let staff = ['waiter', 'chef', 'waiter', 'manager', 'waiter', 'chef'];
let uniqueStaff = [...new Set(staff)]; //put the unique staff set in an array
console.log(uniqueStaff);

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'waiter', 'chef']).size
); //no need for the OG array

console.log(new Set('Thembela').size); //shows how many letters in the name

////////////////////////////////////////////////////////////////////////////////////////////
/* LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES
let properties = Object.keys(openingHours); // array of property names -> thur,fri, sat
let openStr = `We are open on ${properties.length} days: `;
for (let day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//property values
let value = Object.values(openingHours);
console.log(value);

//entries = names + values
let entries = Object.entries(openingHours);
console.log(entries);

for (let [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open}, and close at ${close}`); //print each key and value
}
//////////////////////////////////////////////////////////////////////
/*OPTIONAL CHAINING (?.)
console.log(restaurant.openingHours.monday?.open); //check if 'openingHours.monay' exists before accessing open
console.log(restaurant.openingHours?.monday?.open); //check if 'openingHours' exists, then check if monday exists and then 'open

let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//log to vonsole whether restaurant is open/closed on the days
for (let day of days) {
  let open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at: ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1 ?? 'method "order" doesn\'t exist'));

//Arrays
let users = [{ name: 'Thembela', email: 'tnh@gmail.com' }];
console.log(users[0]?.name ?? 'This array is empty');
////////////////////////////////////////////////////////////////////
//THE FOR-OF LOOP
/*
let menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let item of menu) {
  console.log(item);
}
for (let [i, elem] of menu.entries()) {
  //list of arrays
  console.log(`${i + 1}: ${elem}`);
}*/

/*
restaurant.orderDelivery({
  time: '22:30',
  address: '123 Fake Road',
  mainIndex: 2,
  starterIndex: 2,
});

////////////////////////////////////////////////////////////
//DESTRUCTURE OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; //renaming the variables
console.log(restaurant, hours, tags); //useful for when you're working with third party data

// these are default vals
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 123;
const obj = { a: 25, b: 7, c: 21 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(`Open: ${open} - Closed: ${close}`);

//////////////////////////////////////////////////////////////////////////
//Logical Assignment operators
let rest1 = {
  name: 'Capri',
  numGuests: 21,
};
let rest2 = {
  name: 'La Piazza',
  owner: 'Neo',
};

//OR assignment operator
rest2.numGuests = rest2.numGuests || 10; //set default value
rest1.numGuests = rest1.numGuests || 10;

rest1.numGuests ||= 10; //remember that 0 is a falsey value

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;

rest2.owner &&= 'Anonymous'; //both are truthy
*/

/////////////////////////////////////////////////////////////////////////
/*SPREAD OPERATOR
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr]; //adding one and two to the beginning of arr
console.log(newArr);

//log individual elements of newArr
console.log(...newArr);

//write a new array and then add another element to it
let newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(...newMenu);

//copy array
let mainMenuCopy = [...restaurant.mainMenu];

//join 2 or more arrays
let fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(`Full Menu: `, ...fullMenu);

//Iterables: Maps, Arrays, sets, strings, NOT objects
let str = 'Thembela';
let letters = [...str, ' ', 'H.']; //expands the string and each letter is an array element
console.log(letters);

//Real World Example:
let ingredients = [
  prompt("Lets's make pasta! Ingr. 1?"),
  prompt('Ingr. 2?'),
  prompt('Ingr. 3?'),
];

console.log(ingredients);
restaurant.orderPasta(...ingredients); //nnow everything added to prompt will display

//////////////////////////////////////////////////////////////////
//OBJECTS
/*let newRestaurant = { foundIn: '2000', ...restaurant, founder: Thembela };
console.log(newRestaraunt);*/
/*
let restaurantCopy = { ...restaurant };
restaurantCopy.name = "Albert's place";
console.log(restaurantCopy.name);
console.log(restaurant.name);

/////////////////////////////////////////////////////////////////////////
//Rest Pattern () and Params
///SPREAD is on right side of =, e.g.,
const demoArr = [1, 2, ...[3, 4]];
///REST is on left side of =
const [x, y, ...others] = [1, 2, 3, 4, 5, 6];

//can only put one element in a destructured assignment
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//1) Array
let { sat, ...weekDays } = restaurant.openingHours; //friday and thursday opening hours are now in a weekdays array
console.log(weekDays);

//2)Functions
let add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    number[i];
    console.log(sum);
  }
};
add(1, 5, 4, 2);

let p = [7, 8, 9, 10];
add(...p); //this will manually calculate the elemtns of p

restaurant.orderPizza('Cheese', 'ribs', 'pineapple', 'garlic'); // will print [cheese, [ribs,...]]

//works with nullish values (null and undefined)
//restaurant.numGuests = 0; //---> num guests is 0 not undefined so it will return 0 below
let guestsCorrect = restaurant.numGuests ?? 10; //numGuests is undefined so it will go to 10,
console.log(guestsCorrect);*/

//////////////////////////////////////////////////////////////////////////////////
/*SHORT-CIRCUITING: use, return any data type
console.log('----------------------------OR-----------------------------');

console.log(3 || 'Thembela'); //returns 3
console.log(' ' || 'Thembela'); //returns Thembela
console.log(true || 0); //returns true
console.log(undefined || null); //returns null, undefined is a falsy value
console.log(undefined || 0 || '' || 'Hello' || 23); //hello is truthy, so result is true

//both of the below won't work if numGuests is 0
let guests = restaurant.numGuests ? restaurant.numGuests : 10; //set default val to 10
let guests1 = restaurant.numGuests || 10; //if numGuests is undefined, the default value is 10
console.log(guests1);

console.log(
  '-----------------------------------------AND---------------------------------'
);

console.log(0 && 'Thembela'); //if first value is falsy it won't even look at the second value
console.log(7 && 'Thembela'); //both are truthy so they will work
console.log('Albert' || 31 || null || 'Hello' || 23); //short circuits because of null value

//the below orderPizza method exists so I can add pineapple and ribs to my pizza
let order1 =
  restaurant.orderPizza && restaurant.orderPizza('Pineapple', 'ribs');
*/

////////////////////////////////////////////////////////////////////////////////
/*DESTRUCTURE AN ARRAY

const arr = ['a', 'b', 'c'];
const [x, y, z] = arr; //this is a destructured array
console.log(x, y, z);
console.log(arr); //original array remains the same

let [main, secondary] = restaurant.categories;
const [one, , two] = restaurant.location; // two is now the third element int he array
console.log(main, secondary);

//swap variables around like a bubble sort
[main, secondary] = [secondary, main];
console.log('Switching variables....');
console.log(main, secondary);

//receive 2 return values from a function
//Essentially crestes two variables from a single function call
let [starter, mainCourse] = restaurant.order(2, 0);

let nestedArr = [5, 7, [17, 21]];
let [r, , t] = nestedArr;
console.log(r, t); // view 2/3 values in the array

//destructure a nested array
let [firstNested, , [nested1, nested2]] = nestedArr;
console.log(nested1);

//create default values
let [p = 1, q = 2, o = 3] = [7, 9];
console.log(p, q, o);
*/
