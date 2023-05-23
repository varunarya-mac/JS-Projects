//Var, const and let

// var is functional scope
// let and const are block scope

//scope

//global scope
var a = 5;

console.log(a);

//this will also work coz its var is not block scope
{
    var b = 10;
}
 console.log(b);



 {
    let c = 5;
    console.log(c)
 }
 //It will not work
 console.log(c)

 //variable shadowing
 function test() {
    let a = "hello";
    if(true){
        let a = "Hi"
        console.log(a) //Hi
    }
    console.log(a) //Hello
 }

// we can shadow var variable with let, but not vise-versa

 function test1() {
    var a = "hello";
    if(true){
        let a = "Hi"
        console.log(a) //Hi
    }
    console.log(a) //Hello
 }

 function test2() {
    let a = "hello";
    if(true) var a = "Hi" //error
    
    console.log(a) //Hello
 }