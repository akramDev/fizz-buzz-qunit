exports.fizzbuzz = function(input){
    if(isDivisibleBy5(input) && isDivisibleBy3(input))
        return "fizzbuzz";
    if(isDivisibleBy3(input))
        return "fizz";
    if(isDivisibleBy5(input))
        return "buzz";
    else
        return input;
};

function isDivisibleBy3(input){
    return input % 3 === 0;
}

function isDivisibleBy5(input) {
    return input % 5 === 0;
}