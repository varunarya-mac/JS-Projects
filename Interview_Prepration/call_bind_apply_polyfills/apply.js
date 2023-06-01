// how apply works

const obj = {name: 'varun'}
function user(ageValue, pincode){
    // here this is poniting to global object, but name property is in Obj, not in global.
    // to fix this part we can use Apply method, so that, 'this' will point to obj.
    console.log(this.name, ageValue, pincode); 
}
// we can also pass multiple argument in array
user.apply(obj, [30, 302004]);



// Polyfills for apply
// syntax: functionName.apply(this, [arguments]);

Function.prototype.myApply = function (context = {}, args=[]) {

    if(typeof this !== 'function') {
        throw 'not a function'
    }
    if(!Array.isArray(args)) throw 'not an array';

    context.fn = this;
    context.fn(...args);
};






// Q1)  Append array using Apply
const a = [1,2];
const b = [4,5,6];

Array.prototype.push.apply(a, b);
console.log(a);

// Q2) find min/max in array

console.log(Math.min.apply(null, a));
console.log(Math.max.apply(null, a));