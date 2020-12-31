
const Potion = require('./Potion')

const Character = require('./Character');

// // Player constructor function

// function Player(name= '') {
//     this.name = name;

//     // health is = to a random number between 95-105
//     // strength is = to a random number between 7-12
//     // agility is = to a random mumber between 7-12 
//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 + 7);
//     this.agility = Math.floor(Math.random() * 5 + 7);

//     this.inventory = [new Potion('health'),new Potion()];

// }
// // inherit prototype methods from Character here:
// Player.prototype = Object.create(Character.prototype);


// // when using prototype syntax to create methods you are only creating the methods once on the constructor itself. New player objects simply inherit the methods from the constructor rather than having their own instances of that method

//     // getStats() will return an object with various player properties 
// Player.prototype.getStats = function () {
//     return {
//         potions: this.inventory.length,
//         health: this.health, 
//         strength: this.strength,
//         agility: this.agility,
//     };
// };

// // getInventory() returns the inventory array or false if the array is empty 
// Player.prototype.getInventory = function () {
//     if (this.inventory.length){
//         return this.inventory
//     }
//     return false;
// };

//     //*****/ we are deleting these methods because we have set them up to be inherited from the Character Object *****//

//     // Player.prototype.getHealth = function() {
//     //     return `${this.name}'s health is now ${this.health}!`;
//     // };

//     // Player.prototype.isAlive = function() {
//     //     if(this.health === 0) {
//     //         return false;
//     //     }
//     //     return true;
//     // };

//     // Player.prototype.reduceHealth = function (health) {
//     //     this.health -= health;

//     //     if(this.health < 0) {
//     //         this.health = 0
//     //     }
//     // };

//     // Player.prototype.getAttackValue = function() {
//     //     const min = this.strength - 5;
//     //     const max = this.strength + 5;

//     //     // return a random number between 
//     //     return Math.floor(Math.random() * (max - min) + min)
//     // };

// Player.prototype.addPotion = function (potion) {
//     this.inventory.push(potion);
// };

// Player.prototype.usePotion = function(index) {
//     const potion = this.getInventory().splice(index,1)[0];
        
//     switch (potion.name) {
//         case 'agility':
//             this.agility += potion.value;
//             break;
//         case 'health':
//             this.health += potion.value;
//             break;
//         case 'strength':
//             this.strength + potion.value;
//             break;
//     }
// };


//********** conver constructor function  to ES6 class constructor *********//
// Player inherits from Character class 

class Player extends Character {

    // use constructor() method to define properties
    constructor (name = '') {

        // call parent constructor here:
        super(name);

        // this.name = name;

        // this.health = Math.floor(Math.random() * 10 + 95);
        // this.strength = Math.floor(Math.random() * 5 + 7);
        // this.agility = Math.floor(Math.random() * 5 + 7);

        this.inventory = [new Potion('health'), new Potion()];   
    }

    getStats() {

        // getStats() returns a stats object 
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        const potion = this.inventory.splice(index, 1)[0];
    
        switch (potion.name) {
          case 'agility':
            this.agility += potion.value;
            break;
          case 'health':
            this.health += potion.value;
            break;
          case 'strength':
            this.strength += potion.value;
            break;
        }
    }
}

//exporting the fuction Player 
module.exports = Player