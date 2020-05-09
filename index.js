const fifaData = require('./fifa.js')



// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let worldCupFinal= fifaData.filter(match=>match.Year===2014 && match.Stage==="Final");
console.log(worldCupFinal[0]["Home Team Name"]);
console.log(worldCupFinal[0]["Away Team Name"]);
console.log(worldCupFinal[0]["Home Team Goals"]);
console.log(worldCupFinal[0]["Away Team Goals"]);
console.log(worldCupFinal[0]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(match=> match.Stage === "Final");
};
console.log(getFinals(fifaData));
 

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback,data) {
    let years=[];
    callback(data).map(match=>{years.push(match.Year);
    });
    return years;
};

console.log(getYears(getFinals,fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data,getFinals) {

return getFinals(data).map(match=> match["Home Team Goals"]>match["Away Team Goals"]?match["Home Team Name"]:match["Away Team Name"])
};
    /* 1. make a variable that represents the finals games. 2. determine who the winners are. */


console.log(getWinners(fifaData,getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data,getYears,getWinners) {
    const winners = getWinners(data,getFinals);
    const years = getYears(data,getFinals);
return winners.map((teamName,index) => `In ${years[index]}, ${teamName} won the world cup!`)
};

console.log(getWinnersByYear(fifaData,getYears,getWinners));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data,teamInitials) {
//  let initials=fifaData.filter(match=>{if(match["Home Team Goals"]>match["Away Team Goals"]){return match["Home Team Initials "]}else{return match["Away Team Initials"]};}
// let wins=data.reduce(totalWins,match)=>{



// return wins;
};

getCountryWins(fifaData,initials);

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
