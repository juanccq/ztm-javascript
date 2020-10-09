const array = [2,4,6];

function removeLastItem( arr ) {
    const newArray = [].concat( arr );
    newArray.pop()
    return newArray
}

function multiplyBy2( arr ) {
    return arr.map( item => item * 2 );
}

const array2 = removeLastItem(array);
const array3 = multiplyBy2(array);

console.log( array, array2, array3 );