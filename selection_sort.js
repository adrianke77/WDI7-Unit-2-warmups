function SortedArray( array ) {
  let numStore = 0;
  for ( let i = 1; i < array.length; i++ ) //i is end of current segment to sort
    for ( let j = 0; j < i; j++ ) { // j iterates through current segment to sort
    if ( array[ i ] < array[ j ] ) { // if end of segment less than iterated value in segment
      numStore = array[ j ]; // then swap values
      array[ j ] = array[ i ];
      array[ i ] = numStore;
    }
  }
  this.array = array;
}

console.time( "sorttime" )
sortedArray =
  new SortedArray( [ 213, 123, 6, 6134, 134, 135, 6, 13413, 447, 468, 46, 23,
    2, 234, 234, 24, 34, 236, 134, 134, 14, 7, 2458356835, 24, 6, 4613, 4, 5,
    35, 34, 624, 72, 472, 47, 246, 2, 64, 34, 634, 2458, 4568, 5679, 46,
    2456, 3, 4613, 5413, 54, 1346, 23, 6245, 34, 34, 13, 513, 5, 134, 143, 24,
    55, 47, 6, 342, 234, 634, 6, 43, 24, 6245, 724, 7, 4257, 24, 634, 134, 5,
    13, 4513, 5, 1345, 134, 51, 436, 1346, 134, 6134, 6, 57, 3568, 46, 4, 6 ] )
console.timeEnd( "sorttime" )

console.log( "sorted array is ", sortedArray.array )