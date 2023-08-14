// Looks like console.log('Hello'); on the page:
// This is updating the body section of the HTML file
// Important to use single quotes?

document.body.innerText = 'Hello';

//  add a heading 2 HTML element to this webpage using the DOM
// passing the tag names as a JavaScript string
//  assign this statement to a const variable.

const h2 = document.createElement('h2');

/*

notice that the webpage on the left has not been updated with the heading 2. This is because although, I now have a h2 element saved in JavaScript's memory, I still need to attach it to the DOM structure. Currently, it's not a part of the document object. Additionally, my h2 element also needs some text. Without it, even after adding the h2 element to the document, there would not be a visible change on the page because the added h2 element, although, being a part of the DOM, would have no text inside. In other words, it would be blank.

*/ 

// add some attributes and some text using the inner text method
// I can run this on my h2 variable.

h2.innerText = 'This is a h2 heading';

// adding ID and class to h2 element

// id
// use the setAttribute() method
// it takes two parameters; first the attribute's name (id), and the value of the attribute (subheading)

h2.setAttribute('id', 'subheading');

// class
// use the same method again
// copy/paste the last one or press up in console to toggle last commands
// change the first parameter from 'id' to 'class'
// change the second parameter from 'subheading' to 'secondary'

h2.setAttribute('class', 'secondary');

// ready to append the h2 object to the DOM.
// test the code is correct by typing h2 in the console
// notice the HTML structure's output

document.body.appendChild(h2);

// JavaScript Selectors

// select an element on the page, the parameter is the element surrunded by single quotes. Selects first element on page?

document.querySelector()

// selects the (first?) paragraph element or <p> element

document.querySelector('p')

// selects the (first?) anchor element or <a href=""> element

document.querySelector('a');

// select the (first?) image element or <img> element

document.querySelector('img');

// There is a similarily named JS selector that allows me to get all the matches from a web page

// it's the query selector all method

document.querySelectorAll();

// select all paragraph elements on page

document.querySelectorAll('p');

// find elements by their id

document.getElementById()

// find elements by their class

document.getElementsByClassName();

//  global variable 'v' targeting the video element

var v = document.querySelector("video");