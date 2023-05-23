//Declaration

//we can redeclare var variables in same scope
var a = 5;
var a = 6;

//we can NOT redeclare let/const variables in same scope
let b = 10;
let b = 11;
{
    let b = 11; //this will work
}

const c = 10;
const c = 11;


//Declaration without Intialization
var z; //undefine
let x; //undefine
const v; 