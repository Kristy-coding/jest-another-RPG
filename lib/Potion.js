// constructor function 

function Potion (name) {
    this.types = ['strength','agility', 'health'];

    // this.name equals the argument name or if there is no argument this.types[] will be a random number from one of the types array index i.e this.types[0], this.types[1] or this.types[2]
    this.name = name || this.types[Math.floor(Math.random()* this.types.length)];

    if(this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 +30);
    } else {
        this.value = Math.floor(Math.random() * 5 +7);
    }
}

module.exports = Potion