function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // ? // answer: 1
  alert( counter.up() ); // ? // answer : 2
  alert( counter.down() ); // ? // answer: 3