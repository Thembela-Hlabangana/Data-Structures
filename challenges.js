'use strict';

/*Coding challenge 1
let players1 = [];
let players2 = [];

let gk = 'Felix';
let fieldPlayers = [
  'Jared',
  'Austin',
  'Albert',
  'Eugene',
  'Neuer',
  'Pavard',
  'Martin',
];
let allPlayers = []; //all players from both teams
let playersFinal = []; //includes subs used

let gameDetails = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer', 'Pavard', 'Martin'],
    ['Burki', 'Shulz', 'Hummels', 'Lewandowski'],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 7th 2025',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

players1 = [gk, ...gameDetails.team1];
allPlayers = [...fieldPlayers, ...gameDetails.players];
playersFinal = [...fieldPlayers, 'Thiago', 'Coutinho', 'Perisic'];
//variable for each odd
let {
  odds: { team1, draw, team2 },
} = game;

let printGoals = function (...playerNames) {
  console.log(playerNames);
  console.log('Total goals: ', playerNames.length);
};
printGoals(...gameDetails.scored);

//the lower the odds, the more likely to win they are
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/
////////////////////////////////////////////////////////////////////

//Coding challenge 2
/*
let gameDetails = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer', 'Pavard', 'Martin'],
    ['Burki', 'Shulz', 'Hummels', 'Lewandowski'],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 7th 2025',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
for (let [i, player] of gameDetails.scored.entries()) {
  console.log(`Goal: ${i + 1}: ${scored}`);
}

let avgOdds = Object.values(gameDetails.odds);
let teams = Object.entries(gameDetails.odds);
console.log(avgOdds);
let placeHolder = 0;

//2. average odds
for (let odd of avgOdds) placeHolder += odd;
placeHolder /= avgOdds.length;
placeHolder /= avgOdds.length;
console.log(placeHolder);

//3.
console.log(`Odd of victory ${gameDetails.team1}: ${avgOdds[0]}`);
console.log(`Odd of draw: ${avgOdds[1]}`);
console.log(`Odd of victory ${gameDetails.team2}: ${avgOdds[2]}`);

//4.
for (let [team, odd] of Object.entries(gameDetails.odds)) {
  let playerScore = team === 'x' ? 'draw' : `victory ${gameDetails[team]}`;
  console.log(`Odd of ${playerScore} ${odd}`);
}


const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'Substitution'],
  [47, 'Goal'],
  [64, 'Yellow Card'],
  [65, 'Substitution'],
  [80, 'Red card'],
  [86, 'Goal'],
]);

let events = [new Set(gameEvents.values())];
console.log(events);
console.log(gameEvents.delete(64));
console.log('An event happened approximately every 9 mins');
console.log(gameEvents.keys());
for (let [key, val] of gameEvents) {
  //remember that it is a key value pair!!!!
  let showEvent =
    key <= 45 ? `[First Half] ${key}: ${val}` : `[Second Half] ${key}: ${val}`;
  console.log(showEvent);
}
*/

//Coding challenge 3:
const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'Substitution'],
  [47, 'Goal'],
  [64, 'Yellow Card'],
  [65, 'Substitution'],
  [80, 'Red card'],
  [86, 'Goal'],
]);

let userNames = function (names) {
  let fullName = names.split('_');
  let namesUpper = [];
  for (let n of fullName) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join().replace(',', ''));
};
userNames('thembela_hlabangana');
userNames('albert_rodriguez');
userNames('htoo_thein');

//Challgenge
