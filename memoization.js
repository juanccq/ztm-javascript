function memoizeAddTo80() {
    let cache = {};

    return function( n ) {
        if( n in cache ) {
            return cache[n];
        }
        else {
            console.log('long time')
            cache[n] = n+80;

            return cache[n];
        }
    }
}

const memoized = memoizeAddTo80();

console.log( '1', memoized(5) );
console.log( '2', memoized(5) );