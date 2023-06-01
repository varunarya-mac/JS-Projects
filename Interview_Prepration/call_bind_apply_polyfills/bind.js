// how bind works

const obj = {name: 'varun'}

function user(ageValue, pincode){
    // here this is poniting to global object, but name property is in Obj, not in global.
    // to fix this part we can use Bind method, so that, 'this' will point to obj.
    // bind return another function which we can call later.
    console.log(this.name, ageValue, pincode); 
}

// we can also pass multiple argument with comma separation
const userfn = user.bind(obj, 30, 302004);
// userfn();

//another way to use bind
const userfn2 = user.bind(obj);
// userfn2(30, 302004);





// Polyfills for bind
// syntax: functionName.bind(this, arguments);

Function.prototype.myBind = function (context = {}, ...args) {

    if(typeof this !== 'function') {
        throw 'not a function'
    }
    context.fn = this;
    return function (...newargs){
        return context.fn(...args, ...newargs);
    }  
};


const userfn3 = user.myBind(obj);
userfn3(30, 302004);




// Q1)  bind-chaining
function f(){
    console.log(this.name);
}

const fn = f.bind({name: 'varun'}).bind({name: 'arya'});

//if function is bind to some object, it will point to that only. Another bind will not 
// impact on this. in another words there is no bind chaining concept.

//it will print varun
// fn();