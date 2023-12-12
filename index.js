function receivesAFunction(callMe) {
    
    callMe();
  }

  function returnsANamedFunction() {
    return function namedFunction() {
      
    };
  }


  function returnsAnAnonymousFunction() {
    return function () {
    };
  }