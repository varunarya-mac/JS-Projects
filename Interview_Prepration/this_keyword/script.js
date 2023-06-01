// this keyword (object implicit binding)

// 1) generally this points to object which calls the function or variables, or you
//  can say 'this' points to left of . operator 

// testObj.callfunction(), here this is points to testobj. 

//******************** Case-1 ****************/ 

this.a = 5;
//here this is pointing to global object (Window in case of browser)

//******************** Case-2 ****************/ 
// this generally point to parent of normal function in this case

// 1) 

function test(){
    console.log(this);
}
//here this will point to global object.
// window.test();

// 2)
const user = {
    n: 'varun',
    getDetails() {
        //here this will point to parent of function ,which is user object.
        // this.name is 'varun'
        console.log(this, this.n);
    },
    childObject: {
        lastname: 'arya',
        getDetails2(){
            //here this will point to parent of function ,which is childObject.
            // name variable is outside of childObject, means this.name is undefined
            // this.lastname will print 'arya'.
            console.log(this.n, this.lastname); 
            
        }
    }
}

user.getDetails();
user.childObject.getDetails2();





//**************************************** Case-3 *****************************/ 

// 1) lets take arrow functions now 

// in arrow fn case: 'this' keyword will points to parent of parent function,
//**********----------------------
// this will behave correctly IF ARROW FUNCTION IS INSIDE IN NORMAL FUNCTION. not in object or arrow function
// IF ARROW FUNCTION DOESN'T HAVE PARENT FUNCTION (normal function) THEN IT WILL POINT TO GLOBAL OBJECT 
//**********-----------------------
const user2 = {
    name: 'varun',

    //here this will point to parent of function , parent is user2 object, and 
    // parent of parent is global object.
    // this.name is undefined
    getDetails: () => {
        console.log(this, this.name);
    },
    childObject() {
        //here this will point to parent of function , parent is childObject function, and 
        // parent of parent is user2 object.
        // this.name is 'varun'
        // this.lastname is undefined
        return ()=> {
            console.log(this.name, this);   
        }
    }
}

user2.getDetails();
user2.childObject()();

// THIS case, arrow function doesn't have parent function. it is inside object so it will point to 
// GLOBAL Object 
const u = {
    name: 'varun',
    child: {
        childObject:()=> {
                console.log(this.name, this);   
            }
        }
    }

u.child.childObject()


//*********************************** Case-4 *****************************/ 

// 'this' in Constructor Class
// In this case this will point to all the variable in constructor.
class Product {
    constructor(){
        this.var1 = 'test',
        this.var2= 'test2'
    }

    getVarValue(){
        
        this.setVarValue('test4');
        console.log(this);
        return this.var1;
    }

    setVarValue(value){
        this.var2 = value;
    }

}

const obj = new Product()
obj.getVarValue()

