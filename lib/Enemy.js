const Potion = require('./Potion')

const Character = require('./Character');


// // Enemy Constructor function 

// function Enemy(name, weapon) {

//     this.name = name;
//     this.weapon = weapon;
//     this.potion = new Potion();

//     this.health = Math.floor(Math.random() * 10 + 85);
//     this.strength = Math.floor(Math.random() * 5 + 5);
//     this.agility = Math.floor(Math.random() * 5 +5 );
// }
//     // ***** we are deleting these methods because we have set them up to be inherited from the Character Object *****//

//     // Enemy.prototype.getHealth = function() {
//     //     return `The ${this.name}'s health is now ${this.health}!`;
//     //   };
      
//     //   Enemy.prototype.isAlive = function() {
//     //     if (this.health === 0) {
//     //       return false;
//     //     }
//     //     return true;
//     //   };
      
//     //   Enemy.prototype.getAttackValue = function() {
//     //     const min = this.strength - 5;
//     //     const max = this.strength + 5;
      
//     //     return Math.floor(Math.random() * (max - min) + min);
//     //   };
      
//     //   Enemy.prototype.reduceHealth = function(health) {
//     //     this.health -= health;
      
//     //     if (this.health < 0) {
//     //       this.health = 0;
//     //     }
//     //   };

// // inherit prototype methods from Character here:
// Enemy.prototype = Object.create(Character.prototype);


// Enemy.prototype.getDescription = function() {
//   return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };



//********** conver constructor function  to ES6 class constructor *********// 
// Enemy inherits from the Character class

class Enemy extends Character  {

  // use constructor() method to define properties
  constructor (name, weapon) {

    // call parent constructor here:
    super(name);

    // this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    // this.health = Math.floor(Math.random() * 10 + 85);
    // this.strength = Math.floor(Math.random() * 5 + 5);
    // this.agility = Math.floor(Math.random() * 5 +5 );

  }

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }

}

module.exports = Enemy; 