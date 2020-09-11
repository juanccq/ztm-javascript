// Primitive types always pass values not references
let a = 3;
let b = a;

a = 44;
console.log(b);

// Objects always pass referendes not values
let obj1 = { name:'Juan', password:'123465' };
let obj2 = obj1;

obj2.password = 'newone';
console.log(obj1);

// But we can copy values
let obj = {a:'a', b:'b', c:'c'}
let clonedObj = Object.assign({}, obj);

// Another way to clone ES6
let clonees6 = {...obj};

obj.c = '5';

console.log(obj);
console.log(clonedObj);
console.log(clonees6);

console.log( '--------- Deep cloning ---------' );

// Deep cloning
let obj3 = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'I am here'
    }
};

// This isntruction only copy the first level
let clonedObj3 = Object.assign({}, obj3);

// For deep coping, be carefull, this use more memory allocation
let superClone = JSON.parse( JSON.stringify( obj3 ) );

obj3.c.deep = 'I found you';
console.table(obj3);
console.table(clonedObj3);
console.table( superClone );
