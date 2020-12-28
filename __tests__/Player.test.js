
const Potion = require ('../lib/Potion.js');

// jest.mock replaces the Potion constructors implementation with our faked data 
// now if new Potion() is ever called within the test file (or any subsquent modules attached to the test file) the mocked data will be returned 

jest.mock('../lib/Potion.js');

//console.log(new Potion());

const Player = require ('../lib/Player.js');
const { TestScheduler } = require('jest');

test('creates a player object', ()=> {
    const player = new Player ('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );

});

test("gets player's stats as an oject", ()=> {
    const player = new Player ('Dave');

    // here we are checking that player.getStats() returns as object with four specific properties

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');

});

test ('get inventory from player or returns false', ()=> {

    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));
  
    player.inventory = [];
  
    expect(player.getInventory()).toEqual(false);
});

test ("gets player's health value", ()=> {
    const player = new Player ('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()))
});

test ('checks if player is alive or not', ()=> {
    const player = new Player ('Dave');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

test ("substracts from player's health", ()=> {
    const player = new Player ('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0)
});