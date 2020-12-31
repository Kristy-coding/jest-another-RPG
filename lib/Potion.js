// constructor function 

// function Potion (name) {
//     this.types = ['strength','agility', 'health'];

//     // this.name equals the argument potion name or if there is no potion argument passed in the name will = this.types[x] , where [x] will be a random number from one of the types array index i.e this.types[0], this.types[1] or this.types[2]
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

//     // if the potion argument === health then the potion value will be between 30-40
//     // if the potion argument is else aka strength or agility the value will be between 7-12 
//     if(this.name === 'health') {
//         this.value = Math.floor(Math.random() * 10 +30);
//     } else {
//         this.value = Math.floor(Math.random() * 5 +7);
//     }
// }


// ES6 constructor function , we replaced the function keyworkd with class and moved the name parameter into a nested constructor() method

class Potion {
    constructor(name) {
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        if (this.name === 'health') {
            this.value = Math.floor(Math.random() * 10 + 30);
        } else {
            this.value = Math.floor(Math.random() * 5 + 7);
        }
    }
}

module.exports = Potion