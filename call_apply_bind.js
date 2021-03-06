const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) {
        return this.health += num1+num2;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}


console.log(archer);
wizard.heal.call( archer, 50, 30 );
console.log(archer);

console.log(archer);
wizard.heal.apply( archer, [10, 10] );
console.log(archer);


console.log(archer);
const archerHeal = wizard.heal.bind( archer, 7, 1 );
archerHeal();
console.log(archer);


// Use apply to get the maximun number of an array
const array = [1,2,3,20,4];

function getMaxNumber( arr ) {
    return Math.max.apply(null, arr);
}

console.log( getMaxNumber( array ) );