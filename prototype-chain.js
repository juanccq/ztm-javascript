let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if( this.fire ) {
            return `I am ${this.name}, the breather of fire`
        }
    }
}

let lizzard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

// make a prototype inheritance 
lizzard.__proto__ = dragon;
console.log( lizzard.sing() );

console.log( dragon.isPrototypeOf( lizzard ) );