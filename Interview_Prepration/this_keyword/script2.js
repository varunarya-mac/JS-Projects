
//As per my understanding, there is no function involve for ref varaible so it is pointing to global 

const u = {
  name: "varun",
  child: {
    subChild: {
      ref: this,
      printvalue() {
        console.log(this.ref, this.ref.name);
      },
    },
  },
};

// u.child.subChild.printvalue();


// Q2) 
const user = {
    name: 'varun',
    logMsg() {
        console.log(this.name);
    }
}

setTimeout(function () {
    // user.logMsg();
}, 1000);


// It has nothing to do with cb queue or call stack. There are 3 golden rules: 
// 1) 'this' in regular function ALWAYS points to the object that CALLED that function (using '.' notation).
// 2) Since arrow functions don't have their own 'this', 'this' in arrow function, similar to any other variable (like x, y etc.), 
//    points to 'this' in its parent scope (as every function forms a closure with variables in its parent scope).
// 3) If a function is called without using '.' (dot) operator, then it is assumed that global object (window) 
//    calls that function ( callback(); is similar to window.callback(); )

// So, in this case, setTimeout() accepts 'user.logMessage' as a parameter (for eg. setTimeout(cb, 1000)), so inside setTimeout(), 
// cb will be called as cb(), (without dot notation), which is similar to window.cb(), and since 'logMessage' is a regular function, 
// it points to the object that CALLED it in setTimeout, which is the 'window' object. 
//     But inside a wrapped function, it was called like user.logMessage(), so here 'user' calls logMessage(), 
//  which is why it points to 'user'.



 const storeList = ["Café Market", "Conventional", "Grab 'n Go", "Kiosk","Standalone GetGo"];
 const t = "Grab 'n Go"
  if(storeList.includes(t)) {
    console.log('printed');
  }