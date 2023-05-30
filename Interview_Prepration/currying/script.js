// https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more
// Can read theory interview question from above link
// currying in JS
//e.g fn(a,b) into fn(a)(b)

// Q1) implement sum(1)(2)(3)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));

// Q2) implement
//  evaluate('sum')(1)(2)
//  evaluate('multiply')(1)(2)
function evaluate(type) {
  return function (num) {
    return function (num2) {
      if (type === "sum") return num + num2;
      return num * num2;
    };
  };
}
console.log(evaluate('sum')(1)(2));


// Q2) implement infinit currying

// infinite(1)(2)(3)(4)(5)(6)(7)(8)(9)()
// here last () should be empty to find out that we reached at final point

function infinite(a) {
    return function(b){
        if(b) return infinite(a + b);
        else return a;
    }
}

console.log(infinite(1)(2)(3)(4)(5)(6)(7)(8)(9)());