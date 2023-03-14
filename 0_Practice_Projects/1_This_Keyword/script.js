// 'this' keyword in javascript (it basically points to or refer something)

//** at global level:  it will point to at global object */

// console.log('Global level:', this);

/** --------------------------------------------------------------------------------------------------------------- */


//**** INSIDE Function : here this will point to object of parent of function/ or 
// from where function is called */



//->>>>>>>>>>>>Below funcation examples are in Object

// In below example it will point to global object, because parent of funcation is global level.
function getThisValue() {
//   console.log("Inside Function: ", this);
}

getThisValue();

const test = {
  name: "varun",
  getThis() {
    // console.log(this);
  },

  childObj: {
    newName: "Arya",
    getNewThis() {
    //   console.log("----test.childObj:----", this.name, this.newName);
    },
  },
};

//here this will point to test object, as it is parent of function
test.getThis();

//here childObj is parent of function so newName is printed but name: undefined
test.childObj.getNewThis(); 




// IN ARROW Function: this points to where its parent funcation this is pointing. 

const user = {
    name: "varun",
    getThis: () => {
      console.log("------Arrow Function-----------",this);
    },

    normalFunction() {
        const thiss = () => {"------Arrow normalFunction----------",console.log(this)}
        thiss();
    },
  
    childObj: {
      newName: "Arya",
      getNewThis: () => {
        console.log("----Arrow.childObj:----", this.name, this);
      },
    },
  };

// for arrow function, this is no parent function (Note: user is object not function), so it will point to global.  
user.getThis();

// for arrow function, normalFunction is parent function, so it will point to this of normalFuncation, which is User object.  
user.normalFunction();

// for arrow function, this is no parent function (Note: user is object not function), so it will point to global.  
user.childObj.getNewThis();



/** --------------------------------------------------------------------------------------------------------------- */

//'this' keyword  inside class. In class this will always points to whatever are in constructor

class users {

    constructor(n){
        this.name = n;
    }

    getName() {
        console.log('----class-----------',this, this.name);
    }
}

const obj =  new users('varun');
obj.getName();



/** --------------------------------------------------------------------------------------------------------------- */

/** this keyword inside constructor Function*/

function Talk(n) {
  this.name = n;
  console.log('---Constructor Function-----', this, this.name);
}

// In this case, constructor function with new keyword automatically binds this keyword with object, used new keyword to create it.
// here "me" is the object, where this will point.
const me = new Talk('varun');


//BUT THERE IS ONE CATCH, IF WE USE FUNCATION AS CALLBACK
function NewTalk(n) {
  this.name = n;

  setTimeout(function() {
    console.log('-----Constructor settimeout------', this, this.name);
  }, 100)
  console.log('---Constructor Function-----', this, this.name);
}

// In settimeout case, function is passed as call back. which will not be in same excution context.
// callback function will be in callbackqueue, and after 100ms, it will be in call stack queue again.
// That time no object will be bind with it.so it will point to global this. 
const newMe = new NewTalk('arya');


//TO FIX THIS ISSUE, WE CAN USE bind() or to use arrow function.
function NewTalks(n) {
  this.name = n;

  setTimeout(function() {
    console.log('-----Constructor settimeout------', this, this.name);
  }.bind(this), 100)
}

//or

function NewTalks(n) {
  this.name = n;

  setTimeout(() => {
    console.log('-----Constructor settimeout------', this, this.name);
  }, 100)
}