
const Potion = require ('../lib/Potion.js');

// jest.mock replaces the Potion constructors implementation with our faked data 
// now if new Potion() is ever called within the test file (or any subsquent modules attached to the test file) the mocked data will be returned 

jest.mock('../lib/Potion.js');

//console.log(new Potion());

const Player = require ('../lib/Player.js')

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