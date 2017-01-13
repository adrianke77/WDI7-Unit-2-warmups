const errorChecker = ( value ) => {
  if ( !value ) "sorry, operation invalid"
  else value
}

const remover = (array) => ( {
  errorCheck: () => array.splice( 0, 1 )[ 0 ]
} )

const pusher = ( array ) => ({
  push: () => array.push( value )
})

const popper = () => errorCheck( array.pop() )

const startPeeker = () => errorCheck( array[ 0 ] )

const endPeeker = () => errorCheck( array[ array.length - 1 ] )

const stackComposer = () => {
  let array = [];
  return Object.assign( {}, pusher( value ), popper(), endPeeker() )
}

let stack = stackComposer()
console.log( stack )

stack.push( 1 )