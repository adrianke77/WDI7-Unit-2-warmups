let counter = 0;

for ( let i = 0; i < 10; i++ ) {
  setTimeout( () => {
    console.log( "counter is",counter )
    console.log( "i is",i )
  }, 1000 )
  counter += 1;
}

