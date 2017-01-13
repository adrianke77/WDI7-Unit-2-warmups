function Set() {
  this.array = []
}

Set.prototype.add = function( value ) {
  this.array.push( value )
}

Set.prototype.remove = function( value ) {
  //no deep comparison i.e. cannot handle objects
  valuePosition = this.array.indexOf( value )
  valuePosition === -1 ?
    console.log( "value not found,cannot remove" ) :
    this.array.splice( valuePosition, 1 )
}

Set.prototype.has = function( value ) {
  //no deep comparison i.e. cannot handle objects
  return this.array.includes( value )
}

Set.prototype.list = function() {
  return this.array.slice()
}

Set.prototype.intersect = function( otherSet ) {
  return this.list().filter( ( value ) => {
    otherSet.has( value )
  } )
}

Set.prototype.union = function( otherSet ) {
  let outArray = otherSet.array.slice()
  this.list().forEach( ( value ) => {
    if ( !otherSet.has( value ) )
      outArray.push( value )
  } )
  return outArray
}
  `
let set1 = new Set;

console.log( "---- basic tests ----" )
set1.add( "Alpha" )
set1.add( 5 )
set1.add( 299 )

console.log( set1.list() )

console.log( set1.has( "Alpha" ) )
console.log( set1.has( 5 ) )
console.log( set1.has( 299 ) )

set1.remove( 5 )
set1.remove( 5 )
set1.remove( "tron" )
set1.add( "tron" )

console.log( set1.list() )

console.log( "\n---- intersect and union tests ----" )
let set2 = new Set;
set2.add( "Bikini" )
set2.add( 299 )
set2.add( "rabid" )

console.log( set2.list() )

console.log( set1.intersect( set2 ) )
console.log( set1.union( set2 ) )