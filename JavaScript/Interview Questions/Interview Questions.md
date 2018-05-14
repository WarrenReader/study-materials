# HTML / CSS
**What is a CSS selector**  
Selectors are used to select elements within an HTML document and then apply styling to those elements. There are lots of different CSS selectors. Some of the most popular include: .class (class), #id (id), element/type selector (like *div* or *p*), child combinator (div > p), descendant combinator (div p), and attribute selector (img[src] or input[type="text"]).

**Describe the box model**  
The box model is used by web broswers to position html elements. Evey html element is represented by a rectangular box. This rectangular box is made up of four parts: content edge, padding edge, border edge, and margin edge. The content edge is the inner most box and contains the html element's content. The padding edge clears space around the content edge. The border edge surrounds the padding edge. The margin edge clears an area around the border edge and creates space between html elements.

**What is the position property and what are its values**  
The position property has 5 expected values which are: static, relative, absolute, fixed, and sticky. Static is the default position for HTML elements and positions the element in the normal flow of the document. A relatively positioned element is positioned according to the normal flow of the document, then it's position is offset relative to itself based on the properties top, right, bottom, and left. The offset does not affect the position of other elements. An absolutely positioned element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to its closest positioned ancestor, if any. It's final position is determined by the values top, right, bottom, and left. Fixed elements are removed from the normal document flow and no space is created for the element in the page layout. It's positioned relative to the inital containing block. It's final position is determined by the values top, right, bottom, and left. Sticky elements are positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor and containing block. The offset does not affect the position of any other elements.  

**What is the display property**  
The diplay property specifies the type of rendering box used for an element. HTML elements have their own default values which can be overridden. For example, div's are blocks and span's are inline. The most popular display property values are: inline, block, inline-block, flex, and none. Inline displays an element inline. Height and width properties have no effect. Block displays an element as a block. It starts on a new line and takes up the whole width. Inline-Block displays an element as inline, but it accepts height and width values. Flex displays an element as a block-level flex container. None completely removes the element from the flow of the document.  

**What is specificity**  
Specificity is how browsers decide which CSS property values are most relevant to an element and will be applied. Specificity can be thought of as a score/rank applied to styling rules. Every selector in CSS holds a particular weight. For example, the element selector is worth 1 point, classes/attribute/pseudo-class selectors are worth 10, the id selector is worth 100, and inline styles are worth 1000. Inherited values and the universal selector (*) are worth 0. When two styles are competing and they have the same score/rank, the later declared style will be applied (last in, first out).  

Describe how you would make a paper card effect in CSS (Like the products on Jane.com)  
What is the difference between caret ( > ) comma ( , ) and space (  ) in a css selector
How could you make a circle in CSS  
Describe Pseudo selectors in CSS  
How could you make a star using CSS shapes only  
What is the transform property and how does it work  

# JavaScript
**What are higher order functions**  
Higher order functions are functions which accept a function as an argument and/or return a function as a result.

**What are callback functions**  
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function. There are both synchronous and asynchronous callbacks.

**What’s the difference between == and === in JavaScript**  
== is loose equality and === is strict equality. Loose equality compares two values, but does not compare their data type, but rather uses type coercion. This means if the number 7 and the string "7" were compared using == then JavaScript would coerce "7" to be a number. As a result 7 == "7" would be true. Strict equality compares both type and value. It does not user coercion. This means 7 === "7" is false since we're comparing a number and a string.

**What is event bubbling in the DOM**  
When an event (i.e. click, mouseover, etc.) happens on an HTML element, it will trigger any handlers that element may have, then pass the event to its parent. This event 'bubbles' up the chain of ancestors, triggering their handlers as well. This process is called bubbling, because events 'bubble' up the HTML tree until the event hits the document object and sometimes even the window object. It's important to note that not all events bubble. For example, a focus event does not bubble. The element that triggered the event is called the target element, and is accessible through event.target.  

To stop an event from bubbling you can use event.stopPropogation(). This function will stop the event from moving upwards, but will allow the element triggering this function to run all of it's event handlers. To prevent handlers on the current element from running use event.stopImmediatePropogation(). However, you shouldn't stop bubbling without a good reason!  

Bubbling is one phase within event propagation. The first is the capturing phase, followed by the target phase, followed by the bubbling phase.  

**What is hoisting**  
Variable and function declarations are put into memory during the compile phase. This allows varabiles and function declarations to be referenced before they are declared in code. Manytimes people describe this action as 'moving declared variables and functions to the top of the scope' (i.e. hoisted), but in reality the code stays in place.

An advantage of this is you can invoke a function before it is declared. However, this does not work with function expressions. The same is true with varaibles. If a variable is declared with var, it can be referenced before it is declared in the code, however, it will have a value of undefined since initializations are not hoisted.

It's important to note the variables declared with let and const are not treated the same as those declared with var. From ECMAScript 2015 -  "let will hoist the variable to the top of the block. However, referencing the variable in the block before the variable declaration results in a ReferenceError. The variable is in a "temporal dead zone" from the start of the block until the declaration is processed."  

**Describe closures**  
A closure is an inner function that has access to the outer (enclosing) function's variables. The closure has three scope chanins: it has access to its own scope, it has access to the outer function's varaibles, and it has access to the global variables. Code Example:

let counter = (function() {  
  let privateCounter = 0;  
  function changeBy(val) {privateCounter += val;}  
  return {  
    increment: function() {changeBy(1)},  
    decrement: function() {changeBy(-1);},  
    value: function() {return privateCounter;}  
  }  
})();  

console.log(counter.value()) //logs 0  
counter.increment();  
counter.increment();  
console.log(counter.value()) //logs 2  
counter.decrement();  
console.log(counter.value()) //logs 1  

What is lexical scope
Describe context  
What’s the difference between a for loop and a for in loop  
Explain let vs var  
Describe square bracket notation and when you would use it (hint arrays and objects)  
Describe 3 es2015 features and how they differ from ES5  
Describe how scoping works in JavaScript  
What does the statement ‘use strict’ do   
How does inheritance work in JavaScript  
What is a prototype in JavaScript  


# React
What is a component  
What’s the difference between an element and a Component  
What is setState and what does it do  
What are the differences between a class component and a functional component  
What are refs in react  
What are keys in react and why should we use them with lists  
What are React lifecycle events  
Where should you make AJAX requests  
How is React different from vanilla JS, jQuery, and Angular  
What is unidirectional data flow in React  
Higher order components  

#Computer Science
**What is Big O notation**  
Big O Notation is a simplified analysis of an algorithm's efficiency. Good Resource: http://bigocheatsheet.com/  

1. Big O measures complexity in terms of input size, n.  
2. Big O is machine independent. It does not account for the machine the code is run on.  
3. Big O examines the basic computer steps of the code.  
4. Big O is used to analyize time and space.  
5. Big O analyzes an algorithm's worst case efficieny.  

General Rules  
1. It ignores constants    5n --> O(n) instead of O(5n)  
2. Certain terms "dominate" others  
   O(1) < O(logn) < O(n) < O(nlogn) < O(n ^ 2) < O(2 ^ n) < O(n!)  
   (Ignore low-order terms when higher terms exist)  

Examples  
  *Constant Time*: Does not depend on input size. O(1)  
  x = 5 + (15 * 20);   O(1)  
  y = 15 - 2;          O(1)  
  print x + y;         O(1)  
  
  total time = O(1) + O(1) +  O(1)  
              3 * O(1) = O(1)  (we drop constant, i.e. 3)  

  *Linear Time*: Time to run changes based on input size. O(n)  
  for x in range (o, n): print x;  
  n * O(1) = O(n);  

  *Quadratic Time*: For loop in a for loop. O(n^2)  
  for(...) {  
    for(...)  
      console.log('something')  
  }  