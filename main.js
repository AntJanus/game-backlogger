var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('game-list.csv')
});

var crypto = require('crypto');

var games = [];

var gameWeights = {
  unplayed: 9,
  "briefly played": 7,
  briefly: 7,
  replay: 3,
  "wishlist-unplayed": 3,
  "wishlist-replay": 1,
  "wishlist-briefly": 2
};

var counter = 0;

lineReader.on('line', function(line) {
  if(counter === 0) { return counter++; }

  var gameData = line.split(', ');

  games.push({
    name: gameData[0],
    type: gameData[1],
    source: gameData[2],
    weight: gameWeights[gameData[1]] || 1
  });

}).on('close', function() {
  var weightedList = createWeightedList(games);

  pickGame(weightedList);
});

function createWeightedList(games) {
  var newList = [];

  games.forEach(function(game) {
    var iterator = 0;
    while(game.weight > iterator) {
      newList.push(game);

      iterator++;
    }
  });

  return newList;
}

function pickGame(weightedList) {
  var l = weightedList.length;
  var rand = getRandom(l);

  console.log(weightedList[rand]);
}

function getRandom(l) {
  return Math.floor(Math.random() * ((l-1) - 0));
}
