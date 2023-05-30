//Functions scope, hoisting, callback


// Q1) Function declaration/ statement/ defination

function test (){

}

// Q2) Function expression?
// When we assign anonimous function/normal function to varaible

const fn = function () {}
const fn2 = function test2 () {}

// Q3) First class function:  when we treat function as varaible and pass into antoher 
// functions like varaible know as first class function

function square(num) {
    return num*num;
}

function displaySQ(fn) {
    console.log(fn(5));
}

displaySQ(square);


// Q4) what is IIFE (Imidiate invoke function expression)

(function test3(num){
    console.log(num);
})(5);

// interview can ask like

(function test4(x)
{
    return (function test5(y){
        console.log(x); // it will print 1 because of colsure feature.
    })(2)
})(1)


// Q5) function scope Output question
for(let i =0; i< 5; i++){
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
} // it will print 0,1,2,3,4 let is block scope.

for(var i =0; i< 5; i++){
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
} // it will print 5,5,5,5,5 var is not block scope.
