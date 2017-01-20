function ArrayToSort( array ) {
  this.array = array
}

ArrayToSort.prototype.mergeSort = function() {
  let array = this.array
  let swapNum = 0
  let listLength = 1
  let leftPoint = 0; //left
  let rightPoint = 1; //right
  let leftStart = 0;
  let rightStart = 1;
  while ( listLength < array.length ) {
    for ( let i = 0; i < array.length; i += listLength * 2 ) {
      leftStart = i
      rightStart = i + listLength
      leftPoint = leftStart
      rightPoint = rightStart
      console.log( "listLength:", listLength )
      console.log( "leftStart+,rightStart+:", leftStart + 1, rightStart + 1 )
      while ( rightPoint < listLength + rightStart && leftPoint <
        listLength + leftStart ) { // while not end of both lists in the pair,
        console.log( "leftpointer+1,rightpointer+1:", leftPoint + 1,
          rightPoint + 1 )
        if ( array[ rightPoint ] < array[ leftPoint ] ) { //if right>left, need to move right over
          swapNum = array[ rightPoint ] // temp store right pointed value
          array.splice( rightPoint, 1 ) // remove right value from array
          array.splice( leftPoint, 0, swapNum ) // splice right value (in temp store) in front of left 
          rightPoint++ //if swapped, advance right pointer
        } else leftPoint++ // if no swap, advance left pointer
          console.log( "array after check/rearrange:", array )
      }
      console.log( "\nEND OF CURRENT LIST PAIR\n" )
    }
    listLength = listLength * 2
  }
  return array
}

let arrayToSort = new ArrayToSort( [ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ] )

console.log( arrayToSort.mergeSort() )