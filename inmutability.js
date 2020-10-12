const obj = {name:'Juan'}

function clone(obj) {
    return {...obj}
}

function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'other';
    return obj2
}

const objUpdated = updateName(obj);

console.log(obj, objUpdated);