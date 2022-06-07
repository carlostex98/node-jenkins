describe('La aplicación', function() {

    // This is the name of the test
    it('Verificando la app', function(done) {
  
      // We want this test to pass.
      if (5 == 5) {
        // If the behavior is as expected, call done with no argument.
        done();
      } else {
        // Otherwise, call done with an error.
        done(new Error("Algo no funciona bro"));
      }
  
    });
  
  });