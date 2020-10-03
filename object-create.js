const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

function createElf( name, weapon ) {
    // this line make a link with newElf methods and states
    let newElf = Object.create( elfFunctions );
    newElf.name = name;
    newElf.weapon = weapon;

    return newElf;
}

const elf1 = createElf( 'Bob', 'stone' );
console.log( elf1.attack() );

const elf2 = createElf( 'Jose', 'gun' );
console.log( elf2.attack() );