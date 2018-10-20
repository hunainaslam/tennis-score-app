class Player {
  constructor(playerName) {
    this.playerName = playerName;
    this.score = 0;
  }

  setScore(points) {
    this.score = points;
  }

  getScore() {
    return this.score;
  }
}

class Game {
  constructor(players) {
    this.players = players;
  }

  matchStart() {
    this.currentGame = new Game(this.players);
    return this.currentGame;
  }

  pointWonBy(player) {
    let player1;
    let player2;

    this.players.forEach(p => {
      if (p === player) {
        player1 = p;
      }
      else {
        player2 = p;
      }
    });

    if(player1.score == 40 && player2.score != 40) {
      console.log('Game Finished');
    }

    if(player.score == 0) {
      player.score = 15;
    }
    else if(player.score == 15) {
      player.score = 30;
    }
    else {
      player.score = 40;
    }

    console.log(player.playerName,':',player.score);

    if(player1.score == 40 && player2.score == 40) {
      console.log('Deuce');
    }
  }
}

const p1 = new Player('player 1');
const p2 = new Player('player 2');

const tennisGame = new Game([p1, p2]);
tennisGame.matchStart();

tennisGame.pointWonBy(p1);
tennisGame.pointWonBy(p1);
tennisGame.pointWonBy(p1);
tennisGame.pointWonBy(p2);
tennisGame.pointWonBy(p2);
tennisGame.pointWonBy(p1);