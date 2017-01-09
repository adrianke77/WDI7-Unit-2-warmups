const errorCheck = ( value ) => {
  if ( !value ) "sorry, operation invalid"
  else value
}

const remover = () => ({
  errorCheck( this.array.splice( 0, 1 )[ 0 ] )

const pusher = ( value ) => this.array.push( value )

const popper = () => errorCheck( this.array.pop() )

const startPeeker = () => errorCheck( this.array[ 0 ] )

const endPeeker = () => errorCheck( this.array[ this.array.length - 1 ] )

const stackComposer = () => {
  let array = [];
  return Object.assign( {}, pusher( value ), popper(), endPeeker() )
}

let stack = stackComposer
console.log(stack)

stack.push(1)