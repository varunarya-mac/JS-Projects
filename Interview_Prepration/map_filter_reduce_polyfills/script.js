//Polyfills for map, filter and reduce

const a = [1,2,3,4,5];

// map syntax
// arr.map((arrayObject, index, arr) => { return } )
// polyfill for map
Array.prototype.myMap = function (cb)
{
    const temp = [];
    for (let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

// filter syntax
// arr.filter((arrayObject, index, arr) => { return } )
// polyfill for filter
Array.prototype.myFilter= function (cb)
{
    const temp = [];
    for (let i = 0; i < this.length; i++){
        const value = cb(this[i], i, this)
        if (value) temp.push(this[i])
    }
    return temp;
}

// reduce syntax
// arr.reduce((accumlator, currentObj, index, arr) => { return } )
// polyfill for Reduce
Array.prototype.myReduce = function (cb, initailvalue)
{
    let temp = initailvalue;
    for (let i = 0; i < this.length; i++){
        temp = cb(temp, this[i], i, this)
    }
    return temp;
}


console.log(a.myMap(item=> item*2));
console.log(a.myFilter(item=> item%2 === 0));
console.log(a.myReduce(((acc, cur)=> acc + cur), 0));


//map() vs forEach()

// map will return new array, it will not modify current array 
const b = Array.map();
//here b will be new array. map return array so we can do function chaining here as well

// forEach will not return new array, it will modify current array 
const c = Array.forEach(element => {
    
});
//here c will be undefined. 