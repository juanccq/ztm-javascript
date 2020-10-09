class Character {
    constructor( name, weapon ) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'Attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor( name, weapon, type ) {
        super(name, weapon)
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon)
        this.color = color
    }

    makeFort() {
        return 'strongest fort in the world';
    }
}

const dolby = new Elf('dolby', 'cloth', 'house');
console.log(dolby.attack());

const shrek = new Ogre( 'shrek', 'cloth', 'house' );
console.log(shrek.attack());
console.log(shrek.makeFort());