function fizzbuzz(input){
    if(isDivisibleBy5(input) && isDivisibleBy3(input))
        return "fizzbuzz"
    if(isDivisibleBy3(input))
	    return "fizz"
    if(isDivisibleBy5(input))
        return "buzz"
    else
	    return input
}

function isDivisibleBy3(input){
    return input % 3 == 0
}

function isDivisibleBy5(input) {
    return input % 5 == 0
}

QUnit.test( "fizzbuzz should return fizz when input is 3", function() {
  equal(fizzbuzz(3), "fizz")
});

QUnit.test("fizzbuzz should return buzz when input is 5", function(){
  equal(fizzbuzz(5), "buzz")
});

QUnit.test("fizzbuzz should return fizz when input is divisible by 3", function(){
  equal(fizzbuzz(6),"fizz")
  equal(fizzbuzz(9), "fizz")
  equal(fizzbuzz(123), "fizz")
});

QUnit.test("fizzbuzz should return buzz when the input is divisible by 5", function () {
    equal(fizzbuzz(65), "buzz")
    equal(fizzbuzz(55), "buzz")
    equal(fizzbuzz(10), "buzz")
});

QUnit.test("fizzbuzz should return fizzbuzz when the input is divisible by 3 and 5", function () {
    equal(fizzbuzz(15), "fizzbuzz");
    equal(fizzbuzz(45), "fizzbuzz");
    equal(fizzbuzz(90), "fizzbuzz");
});

QUnit.test("fizzbuzz should return the same when the input is not divisible by 3 or 5",function(){
    equal(fizzbuzz(1), 1)
    equal(fizzbuzz(7), 7)
    equal(fizzbuzz(19), 19)
});
