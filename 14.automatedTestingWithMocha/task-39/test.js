/*
it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
*/

describes("Raises x to the power n",function(){
    it("5 raises to the power of 1 equals 5",function(){
        asserts.equal(pow(5,1),5);
    });

    it("5 raises to the power of 2 equals 25",function(){
        asserts.equal(pow(5,2),25);
    });

    it("5 raises to the power of 3 equals 125",function(){
        asserts.equal(pow(5,1),125);
    });

});