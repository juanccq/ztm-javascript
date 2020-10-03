let human = {
    mortal: true
}

let socrates = Object.create(human);
socrates.age = 70

console.log( socrates.age );
console.log( socrates.mortal );
console.log( human.isPrototypeOf( socrates ) )