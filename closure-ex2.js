const array = [1,2,3,4];

for( var i=0; i < array.length; i++ ) {
    setTimeout( function(j) {
        console.log( 'I am at index '+ i );
    }, 2000 );
}

// Solutions are change the scope of i variable, so the variable is not in the global scope
// first solution use let
for( let i=0; i < array.length; i++ ) {
    setTimeout( function(j) {
        console.log( 'I am at index '+ i );
    }, 2000 );
}


for( var i=0; i < array.length; i++ ) {
    (function(localI) {
        setTimeout( function(j) {
            console.log( 'I am at index '+ localI );
        }, 2000 );
    })(i)
}