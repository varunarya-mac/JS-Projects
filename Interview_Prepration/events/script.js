
//Event Propogation
// The event propagation mode determines in which order the elements receive the event. 

// Event Bubbling
// With bubbling, the event is first captured and handled by the innermost element and 
// then propagated to outer elements. this is default behaviour

// Event Capturing or Trickling, 
//the event is first captured by the outermost element and propagated to the inner elements.


const div = document.querySelector('div');
const form = document.querySelector('form');
const btn = document.querySelector('button');

function fn(event){
    alert("alert = " + event.currentTarget.tagName +
     "------" + event.target.tagName + "------" + this.tagName);
}

div.addEventListener('click', fn)

form.addEventListener('click', fn)

btn.addEventListener('click', fn)

// Q1) event.target vs this.target vs event.currentTarget
// Ans: event.target: It will always point to Event starting point elemnt.
    // event.currentTarget.tagName: It will point to current element like if we pressed button, then
    // 1st it will point to button object after that event will travel to parent element which is form
    // element, that time currentTarget will point to form element. 

    //this.tagName is same like event.currentTarget



// Q2) Stop Bubbling or capturing
    event.stopPropagation();


// Q3) Event delegation?
//Event delegation in JavaScript is a pattern that efficiently handles events.
//Events can be added to a parent element instead of adding to every single element. 
//It refers to the process of using event propagation (bubbling) to handle events at a 
//higher level in the DOM than the element on which the event originated. 
//This can be done on a particular target element using the .target property of an event object