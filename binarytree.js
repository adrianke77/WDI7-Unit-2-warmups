function BinaryNode() {
  this.value = null
  this.left = null
  this.right = null
}

function BinaryTree() {
  this.rootnode = new BinaryNode()
}

BinaryTree.prototype.add = function( number, currentNode = this.rootnode ) {
  // if data type wrong reject
  if ( typeof number !== "number" ) {
    console.log( "error from BinaryTree: value is not a number" )
    return false
  }
  // if currentnode empty, set value and exit
  if ( currentNode.value === null ) {
    currentNode.value = number
    return true
  }
  // if currentnodevalue = number, number in tree already, exit
  if ( number === currentNode.value ) {
    console.log( `${number} already in tree, not added` )
    return false
  }
  // if currentnodevalue > number, make node in right, run that node
  if ( number > currentNode.value ) {
    if ( currentNode.right === null ) {
      currentNode.right = new BinaryNode()
      currentNode.right.value = number
    } else this.add( number, currentNode.right )
  }
  // if currentnodevalue < number, make node in left, run that node
  if ( number < currentNode.value ) {
    if ( currentNode.left === null ) {
      currentNode.left = new BinaryNode()
      currentNode.left.value = number
    } else this.add( number, currentNode.left )
  }
}

BinaryTree.prototype.contains = function( number, currentNode = this.rootnode ) {
  //if found return true, up the recursion chain
  if ( currentNode.value === number ) return true
  //if less, check left node
  if ( number < currentNode.value )
    //if left exists, check it, else return false
    if ( currentNode.left ) return this.contains( number, currentNode.left )
    else return false
  //if more, check right node
  if ( number > currentNode.value )
    //if right exists, check it, else return false
    if ( currentNode.right ) return this.contains( number, currentNode.right )
    else return false
}

bt = new BinaryTree()
bt.add( 5 );
bt.add( 4 );
bt.add( 4 );
bt.add( 6 );
bt.add( 7 );
bt.add( 8 );
bt.add( 1 );
bt.add( 6.5 );
bt.add( 3.2 );
console.log( "contains check", bt.contains( 4 ) )
console.log( "contains check", bt.contains( 3.5 ) )
console.log( JSON.stringify( bt.rootnode ) )