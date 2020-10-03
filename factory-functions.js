function createElf( name, weapon ) {
    return {
        name,
        weapon,
        attack() { /* the function creator will work, but this method will be using a new memory space on every elf creation */
            return 'attack with ' + this.weapon
        }
    }
}

const elf1 = createElf( 'Bob', 'stone' );
console.log( elf1.attack() );

const elf2 = createElf( 'Jose', 'gun' );
console.log( elf2.attack() );