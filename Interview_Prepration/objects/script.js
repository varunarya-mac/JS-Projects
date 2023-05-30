// Objects are collection of propeties. property is combination of key and value

// Q1) It will return 5, coz delete only work for object properties. x is local variable here.

console.log(
  (function a(x) {
    delete x;
    return x;
  })(5)
);


// Q2) create key name with white spaces

const a = {
    name: 'varun',
    'Mobile number': '1234567890'
}
//how to access "mobile number" property
console.log(a['Mobile number']);
//or
delete a['Mobile number'];

// Q3) Dynamic property 

const fname = 'firstName';
const name = 'varun'
// we can changes property name dynamically like below
const b = {
    [fname]: name,
    lastname: 'arya'
}

// Q4) what is output of question
const aa = {};
const bb = { key : 'bb' };
const cc = { key : 'cc'};

aa[bb] = 123;
aa[cc] = 456;

console.log(aa[bb]);  //456

// Q5) Where we commenly use JSON stringfy or parse
// Ans:  save values in local storag, used only string value. 

// Q6) It will spread the letters in array. 
console.log([...'Varun']); 
//['v','a','r','u','n']


// Q7) It will only stringfy age and name property, and will skip all other properties
console.log(JSON.stringify(settings, ['age', 'name']));
const settings = {
  name: 'varun',
  age: 10,
  postcode: 123445,
  address: {
    flat: 35,
    street: 2
  }

}

// Q8) Destructuring and nested destructuring

const { name: myname, age } = settings;
const { address: {flat} } = settings

console.log(flat);

// Q9) Deep copy/ clone
// three ways

const user = {
  n: 'varun',
  age: 20,
}

const clon1 = Object.assign({}, user);
const clon2 = JSON.parse(JSON.stringify(user));
const clon3 = {...user};