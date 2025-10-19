function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

/*

3.1 Retrieve Player Information
numPointsScored(playerName):
You need to search through both the "home" and "away" teams to find the player's name.
Once found, you should return the points value for that player.
Here's a guide to structure your function:

*/

function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
}
//shoeSize(playerName):
//This will follow a similar logic to numPointsScored but will return the shoe size instead.
   function shoeSize(playerName) {
       const game = gameObject();
       for (let team in game) {
           if (game[team].players[playerName]) {
               return game[team].players[playerName].shoe;
           }
       }
   }
/*
3.2 Retrieve Team Information
*/
//teamColors(teamName):
//You need to check both teams and match the teamName to return the colors.
   function teamColors(teamName) {
       const game = gameObject();
       for (let team in game) {
           if (game[team].teamName === teamName) {
               return game[team].colors;
           }
       }
   }
//teamNames():
//This involves extracting both team names into an array.
   function teamNames() {
       const game = gameObject();
       return [game.home.teamName, game.away.teamName];
   }

/*
3.3 Retrieve Player Numbers and Stats
*/
//playerNumbers(teamName):
//Find the team by name, then create an array of player numbers.
   function playerNumbers(teamName) {
       const game = gameObject();
       for (let team in game) {
           if (game[team].teamName === teamName) {
               return Object.values(game[team].players).map(player => player.number);
           }
       }
   }
//playerStats(playerName):
//Search both teams for the player's stats and return the corresponding object.
   function playerStats(playerName) {
       const game = gameObject();
       for (let team in game) {
           if (game[team].players[playerName]) {
               return game[team].players[playerName];
           }
       }
   }
/*
3.4 Advanced Challenge

bigShoeRebounds():
You need to iterate over all players, find the one with the largest shoe size, and return their rebounds.
*/
   function bigShoeRebounds() {
       const game = gameObject();
       let largestShoeSize = 0;
       let rebounds = 0;

       for (let team in game) {
           for (let player in game[team].players) {
               if (game[team].players[player].shoe > largestShoeSize) {
                   largestShoeSize = game[team].players[player].shoe;
                   rebounds = game[team].players[player].rebounds;
               }
           }
       }

       return rebounds;
   }
//Try implementing these functions step-by-step, and use console.log() to test each one. 
//If you run into any issues or have questions about specific parts, feel free to ask!


/*
mostPointsScored():
You'll need to iterate through all players in both teams, track which player has the highest points, and return that player's name.
*/
function mostPointsScored() {
    const game = gameObject();
    let highestPoints = 0;
    let topScorer = '';

    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].points > highestPoints) {
               highestPoints = game[team].players[player].points;
               topScorer = player;
           }
        }
    }

    return topScorer;
}
//winningTeam():
//Calculate the total points for each team and compare them to determine the winner.
   function winningTeam() {
       const game = gameObject();
       let homePoints = 0;
       let awayPoints = 0;

       for (let player in game.home.players) {
           homePoints += game.home.players[player].points;
       }

       for (let player in game.away.players) {
           awayPoints += game.away.players[player].points;
       }

       return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
   }
//playerWithLongestName():
//You'll need to compare the length of each player's name and keep track of the longest one.
   function playerWithLongestName() {
       const game = gameObject();
       let longestName = '';

       for (let team in game) {
           for (let player in game[team].players) {
               if (player.length > longestName.length) {
                   longestName = player;
               }
           }
       }

       return longestName;
   }
//Advanced Logic
//doesLongNameStealATon():
//First, identify the player with the longest name, then check if they have the most steals compared to other players.
   function doesLongNameStealATon() {
       const longestNamePlayer = playerWithLongestName();
       const game = gameObject();
       let mostSteals = 0;

       for (let team in game) {
           for (let player in game[team].players) {
               if (game[team].players[player].steals > mostSteals) {
                   mostSteals = game[team].players[player].steals;
               }
           }
       }

       // Check if the player with the longest name has the most steals
       for (let team in game) {
           if (game[team].players[longestNamePlayer]) {
               return game[team].players[longestNamePlayer].steals === mostSteals;
           }
       }
   }
