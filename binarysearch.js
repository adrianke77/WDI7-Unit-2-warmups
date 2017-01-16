function BinSearchArray( input ) {
  this.array = input.sort( ( a, b ) => a - b );
}

BinSearchArray.prototype.findElement = function( number ) {
  let currentVal = 0;
  let currentArray = this.array.slice();
  let steps = 0;
  // recursion is cool but while loops are FAST
  while ( number !== currentVal ) {
    if ( currentArray.length ===  0 ) return `The value ${number} was not found`
    let currentEleIndex = Math.floor( currentArray.length / 2 );
    currentVal = currentArray[ currentEleIndex ];
    if ( number > currentVal )
      currentArray = currentArray.slice( currentEleIndex+1, currentArray.length );
    else
      currentArray = currentArray.slice( 0, currentEleIndex);
    steps++;
    console.log(currentArray,currentEleIndex,currentVal)
  }
  return ( `The value ${number} was found in ${steps} steps` )

};

// const test = new BinSearchArray(
//   [ 4, 1, 3, 5, 2, 62, 4, 54, 34, 5134, 123, 12, 6, 5, 358 ]
// );
// console.log( "Data stored: ", test.array )
// console.log( test.findElement( 3 ) )
// console.log( test.findElement( 6 ) ) // middle of array
// console.log( test.findElement( 8 ) ) // not in array
// console.log( test.findElement( 9999 ) ) //not in array
// console.log( test.findElement( 358 ) )

const test2 = new BinSearchArray([8,1,7,2,6,3,5,4])
console.log("Data stored:",test2.array)
console.log(test2.findElement(1))
console.log(test2.findElement(2))
console.log(test2.findElement(3))
console.log(test2.findElement(4))
console.log(test2.findElement(5))
console.log(test2.findElement(6))
console.log(test2.findElement(7))
console.log(test2.findElement(8))