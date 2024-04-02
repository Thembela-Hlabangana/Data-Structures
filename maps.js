'use strict';
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

//MAPS: data structure used to map values with keys. Keys hav any type (arrays, maps, objects, etc)
let rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); //returns the whole map

rest //this is chaining the map
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, "we're open")
  .set(false, "we're closed");
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest.get('categories'));

let currentTime = 21;
console.log(
  rest.get(currentTime > rest.get('open') && currentTime < rest.get('closed'))
);

console.log(rest.has('name')); //checks if the map contains the follwoing -returns a boolean
rest.delete(2);
console.log(rest.has(2));
console.log(rest.size);

//use an array as a key
let arr = [1, 2];
rest.set(arr, 'This is an array Test');
console.log(rest.get(arr));

//use elements/objects as keys
rest.set(document.querySelector('h1'), 'This is an HTMl heading');
console.log(rest);

//remove all elements from the map
rest.clear();

///////////////////////////////////////////////////////////////

let question = new Map([
  ['question', 'What is your favourite colour?'],
  [1, 'Red'],
  [2, 'Green'],
  [3, 'Pink'],
  ['Correct', 3],
  [true, 'Correct'],
  [false, 'Incorrect'],
]);
console.log(question); //this is the same as calling object.entries(value)

//convert object to map
let hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//iterating over a map
console.log(question.get('question'));

for (let [key, value] of question) {
  //only print if the key is a number
  if (typeof key == 'number') console.log(`Answer ${key}:${value}`);
}

//get the users answeYour answerr
let answer = Number(prompt(question.get('question')));
console.log(answer);

if (answer === question.get('Correct')) {
  console.log('Well Done!');
} else {
  console.log('Wrong Answer.');
}

//convert map to array
let mapArr = [...question];
console.log(mapArr);
console.log(question.entries()); //displays full map
console.log(question.keys()); //displays only keys
console.log(question.values()); //displays all the values

//which data structure to use:

/*Questions to ask:
1. Do I just need a simple list of values? Use Array or set
2. Do I need key, value pairs (where key describes the values ,e.g., API's (may need to make an array of objects like with Yoobic))? use Object or Map

Arrays:
 * Use when you need to store values (may contain duplicates) in order 
 * When you need to manipulate data
Sets: 
 * Use when working with unique values
* When high-performance is Really important (e.g., when you need to search and delete items) 
* When you need to remove duplicates.
Objects: 
* More traditional and easier to write with. 
* Use when you need to include functions
* When working with JSON (can convert to Maps)
Maps: 
* Better performance
* Can have any data type
* Easy to iterate and easy to compute size. 
* Use when you need keys that are not only Strings 
* When when you simply need to map key to values
*/
