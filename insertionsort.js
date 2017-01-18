function insertionSortedArray( array ) {
  let valueHolder = 0
  for ( i = 1; i < array.length; i++ ) { // i is the index of start of the unsorted right
    for ( j = 0; j < i; j++ ) { // j iterates from left to right in sorted section
      if ( array[ i ] < array[ j ] ) { // if selected number is less than current j position, insert
        valueHolder = array[ i ] //temp store of the value of the number being inserted
        array.splice( i, 1 ) //remove the number to be inserted from its old position in the array
        array.splice( j, 0, valueHolder ) // insert value of i to array at position j (shifts j to end to right )
        break
      }
    }
  }
  this.array = array
}

const test = new insertionSortedArray( [ 3, 134, 2457, 245, 247, 45, 975, 795,
  4213, 51, 3658, 67957, 135, 135, 1235 ] )

console.log( test.array )