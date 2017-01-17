function SortedArray( array ) {
  let numStore = 0;
  for ( i = 0; i < array.length; i++ ) { //tracks start of the unsorted length
    let smallestInUnsorted = Infinity;
    let smallestInUnsortedPosition = 0;
    for ( j = i; j < array.length; j++ ) //iterates through unsorted part
      if ( array[ j ] < smallestInUnsorted ) { // find smallest value in unsorted part
        smallestInUnsorted = array[ j ]
        smallestInUnsortedPosition = j
      }
    if ( smallestInUnsorted < array[ i ] ) { // swap only if smallest value found is less than end of sorted part 
      numStore = array[ i ];
      array[ i ] = array[ smallestInUnsortedPosition ];
      array[ smallestInUnsortedPosition ] = numStore;
    }
  }
  this.array = array;
}

console.time( "sorttime" )
sortedArray =
  new SortedArray( [ 1, 5, 4, 2, 3, 6, 9, 7, 8, 23, 245, 3457, 8, 24, 2, 68, 3,
    24, 24, 45, 3569, 3569356, 7, 3254, 134, 9 ] )
console.timeEnd( "sorttime" )

console.log( "sorted array is ", sortedArray.array )