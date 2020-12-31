// these are all game dependencies (inquirer, Enemy object, player object) to require inquirer we also had to "npm install inquirer"
const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

// game constructor function a.k.a creation of Game object  

function Game () {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    //undefined... we will assign them when the initializeGame() method is called. Including them here simply helps convey which properties a Game object is intended to have
    this.currentEnemy;
    this.player;

    Game.prototype.initializeGame = function() {
        this.enemies.push(new Enemy('goblin', 'sword'));
        this.enemies.push(new Enemy('orc', 'baseball bat'));
        this.enemies.push(new Enemy('skeleton', 'axe'));
        this.currentEnemy = this.enemies[0];

        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: 'What is your name?'
            })
            // destructure name from the prompt object 
            .then(({name}) => {
                //because we used ES6 arrow function here "this" references the scope outside of inquirer and refers to the Game object in the scope above?? Lexical scoping by calling a normal function would mean that this can only reference the object in the scope which is was defined?? 
                this.player = new Player(name);

                //make characters fight by starting a new round 
                this.startNewBattle()
            });
    };
}



module.exports = Game;