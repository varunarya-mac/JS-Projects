// how call works

const obj = {name: 'varun'}

function user(ageValue, pincode){
    // here this is poniting to global object, but name property is in Obj, not in global.
    // to fix this part we can use Call method, so that, 'this' will point to obj.
    console.log(this.name, ageValue); 
}

// we can also pass multiple argument with comma separation
user.call(obj, 30, 302004);



// Polyfills for call
// syntax:  functionName.call(this, arguments);

Function.prototype.myCall = function (context = {}, ...args) {

    if(typeof this !== 'function') {
        throw 'not a function'
    }

    context.fn = this;
    context.fn(...args);
};




// Q1) Arrow function with call

const age = 10;

const person = {
    age: 20,
    getDetailArrow: () => {console.log(this.age, this)},
    getDetail: function (){
        console.log(this.age)
    }
}

const person2 = {age: 30}

person.getDetail.call(person2); // it will behave normally. this will point to person2 object.

// call/apply/bind doesn't effect arrow function. Arrow function will always point to parent of parent function.
// here there is no normal function so it will point to global object, not to person2.
// age will be undefinded, as there is no age variable in global context. 
// line 16 is const variable which will not be part of global. 
person.getDetailArrow.call(person2);