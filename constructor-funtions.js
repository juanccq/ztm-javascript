function Elf( name, weapon ) {
    this.name = name;
    this.weapon = weapon;
}

/** on this way the function for objects is on the same place of memory */
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon;
}


const elf1 = new Elf( 'Bob', 'stone' );
console.log( elf1.attack() );

const elf2 = new Elf( 'Jose', 'gun' );
console.log( elf2.attack() );