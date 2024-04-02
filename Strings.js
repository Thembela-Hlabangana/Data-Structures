'use strict';

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

let airline = 'TAP Air Portugal';
let plane = 'A320';

console.log(plane[0]); //T
console.log(plane[1]); //A
console.log(plane[2]); //P

console.log(airline.length);
console.log('A350'[0]);
console.log(airline.indexOf('P'));
console.log(airline.lastIndexOf('p'.toUpperCase()));

//slice method:
console.log(airline.slice(4)); //returns 'Air Portugal'
console.log(airline.slice(4, 7)); //returns 'Air' end(7) - beginning(3)
//to avoid having to hard code the slice values just use lastIndexOf()
console.log(airline.slice(0, airline.lastIndexOf(' '))); //returns 'TAP'
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //returns 'Portugal'
console.log(airline.slice(-2)); //returns 'al'
console.log(airline.slice(1, -1)); //returns 'AP Air Portuga'

let checkMiddleSeat = function (seat) {
  // B and E are middle seats
  let s = seat.slice(-1);
  let choice =
    s == 'B' || s == 'E'
      ? console.log('You have a middle seat')
      : console.log('You have a aisle/window seat');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3C');

//fix capitalization in name
let passenger = 'EuGenE';
let passengerLower = passenger.toLowerCase();
let passengerCorrect = passengerLower[0].toUpperCase().slice(1);
console.log(passengerCorrect);

//compare emails
let email = 'hello@tnh.io';
let loginEmail = ' Hello@tnh.Io \n';
let lowerEmail = loginEmail.toLowerCase().trim(); //trim removes white space and '\n'
console.log(lowerEmail == email);

//replacing values in strings
let priceGBP = '288,98';
let priceUS = priceGBP.replace(',', '.');
console.log(priceUS);

let announcement = 'All passengers on flight: A350, board using door 21';
console.log(announcement.replace('door', 'gate:'));
//replace multiple items at once
let announcement2 =
  'All passengers on flight: A350, I repeat A350. Board using door 21';
console.log(announcement2.replace(/A350/g, 'A380'));

//booleans
let airoplane = 'Airbus A350';
console.log(airoplane.includes('A320')); //false
console.log(airoplane.includes('Airbus')); //true
console.log(airoplane.startsWith('Air')); //true
console.log(airoplane.endsWith('50')); //true

//practice exercise

let checkBaggage = function (items) {
  let baggage = items.toLowerCase();
  baggage.includes('gun') || baggage.includes('knife')
    ? console.log('You are not allowed on board')
    : console.log('You are allowed on board');
};
checkBaggage('Have have snacks, a gun for protection and a camera');
checkBaggage('I have some socks and a laptop and a tire');

console.log('a-very-nice-string'.split('-')); //returns an array of each word in the sentence
console.log('Thembela Nqobile Hlabangana'.split(' '));

let [firstName, surname] = 'Thembela  Hlabangana'.split(' ');
console.log(firstName);

console.log(['Ms.', firstName, surname].join(' '));

//capitalize full name
let capitalizeName = function (userName) {
  let allNames = userName.split(' ');
  let namesUpper = [];
  for (let n of allNames) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('thembela nqobile hlabangana');

//Add padding
let message = 'Go to gate 12';
console.log(message.padStart(5, '-').padEnd(25, '-'));

//example using credit card number
let maskCreditCard = function (number) {
  let str = number + '';
  let last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(123456798));
console.log(maskCreditCard('987412533'));

//repeat string multiple times
let message2 = 'Bad weather, all departures DELAYED... ';
console.log(message2.repeat(5)); //it'll repeat 5 times

let planesInLine = function (n) {
  console.log(`There are ${n} planes in line`.repeat(n));
};
planesInLine(6);
planesInLine(7);
planesInLine(12);

for (let flight of flights.split('+')) {
  let [type, from, to, time] = flight.split(';');
  let output = `${type.replaceAll('_', ' ')} ${from
    .slice(0, 3)
    .toUpperCase()} ${to.slice(0, 3).toUpperCase()} ${time.replace(':', 'h')}`;
  console.log(output);
}
