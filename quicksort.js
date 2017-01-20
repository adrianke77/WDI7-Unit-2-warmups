function swap( array, pointer1, pointer2 ) {
  let data = array.slice();
  let tempNo = data[ pointer2 ];
  data[ pointer2 ] = data[ pointer1 ];
  data[ pointer1 ] = tempNo;
  return data;
}

function ArrayToSort( array ) {
  this.array = array;
}

ArrayToSort.prototype.quickSort = function() {

};

ArrayToSort.prototype._partition = function( input ) {
  let pivot = input.pivot
  let segment = input.segment
  let leftPoint = 0;
  let rightPoint = segment.length - 1;
  let tempVal = 0;
  while ( true ) {
    console.log( "segment is", segment )
    while ( segment[ leftPoint ] <= pivot ) {
      if ( rightPoint - leftPoint <= 1 ) break
      leftPoint++;
    }
    while ( segment[ rightPoint ] >= pivot ) {
      if ( rightPoint - leftPoint <= 1 ) break
      rightPoint--;
    }
    console.log( "indices:", leftPoint, rightPoint );
    if ( rightPoint - leftPoint <= 1 ) break
    console.log( "swapping values", segment[ leftPoint ], segment[
      rightPoint ] );
    segment = swap( segment, leftPoint, rightPoint )
  }
  return { segment: segment, pivot: segment[ leftPoint ], pivotPos: leftPoint }

};

arrayToSort = new ArrayToSort()
console.log( arrayToSort._partition( {
  segment: [ 9, 8, 7, 6, 2, 4, 3, 1, 5 ],
  pivot: 5
} ) )