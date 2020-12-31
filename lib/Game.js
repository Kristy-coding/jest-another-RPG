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
    Game.prototype.startNewBattle = function() {
        if (this.player.agility > this.currentEnemy.agility) {
            this.isPlayerTurn = true;
        } else {
            this.isPlayerTurn = false;
        }

        console.log('Your stats are as follows');
        console.table(this.player.getStats());
        console.log(this.currentEnemy.getDescription());

        this.battle();
    };

    Game.prototype.battle = function() {
        if (this.isPlayerTurn) {
            inquirer
                .prompt ({
                    type: 'list',
                    message: 'What would you like to do?',
                    name: 'action',
                    choices: ['Atatck', 'Use potion']
                })
                .then (({action}) => {
                    if (action === 'Use potion') {
                        //check inventory
                        if (!this.player.getInventory()) {
                            console.log("You don't have any potions!")
                            // if inventory is false (empty) return a.k.a exit function to end the player turn
                            return; 
                        }
                        // if the inventory is not empty, then the code following the if statement will still execute... it will prompt the user for a specific potion selection
                        inquirer 
                            .prompt ({
                                type: 'list',
                                message: 'Which potion would you like to use?',
                                name: 'action',
                                //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. Here the map() method is looping through the player.getInventory array and returning a new array that displays the index of the potion and the name. The map() method can take in 3 potential parameters. Here we choise to use 2 parameters. 
                                choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
                            })
                            .then (({action}) => {

                                //split() is a string method (we are going to split the string on every colon + space and returning an array of the items before and after the split location)
                                const potionDetails = action.split(': ');
                                // potionDetails now equals an arrya that looks something like ['2', 'agility'], potionDetails at index [0] refers to the number 2. Earlier we added a number to the indexes to make them more human readable. To get the true potion index number back we need to subtract 1 

                                this.player.usePotion(potionDetails[0]- 1);
                                //potionDetails[1] refers to the name in the split potionDeatials array
                                    if (potionDetails[1]=== 'agility') {
                                        console.log(`You used an ${potionDetails[1]} potion`)
                                    } else {
                                    console.log(`You used a ${potionDetails[1]} potion.`);
                                    }
                            });
                    } else {
                        const damage = this.player.getAttackValue();
                        this.currentEnemy.reduceHealth(damage);

                        console.log(`You attacked the ${this.currentEnemy.name}`);
                        console.log(this.currentEnemy.getHealth());
                    }
                });
        } else {
            const damage = this.currentEnemy.getAttackValue();
            this.player.reduceHealth(damage);

            console.log(`You were attacked by the ${this.currentEnemy.name}`);
            console.log(this.player.getHealth());
        }
    };
}



module.exports = Game;