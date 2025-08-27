const cardHearts = document.querySelectorAll(".card-heart");

for (let heart of cardHearts) {
  heart.addEventListener("click", function () {
    let navHeart = parseInt(
      document.getElementById("nav-heart-count").innerText
    );
    const heartCount = navHeart + 1;
    document.getElementById("nav-heart-count").innerText = heartCount;
  });
}

// Copy Text
function getHotlineNumber(id) {
  const hotlineNumber = parseInt(document.getElementById(id).innerText);
  return hotlineNumber;
}
const copyCount = parseInt(
  document.getElementById("text-copy-count").innerText
);
// Copy Count function
function getCopyCount(id) {
  const copyCount = parseInt(document.getElementById(id).innerText);
  const updateCount = copyCount + 1;
  document.getElementById(id).innerText = updateCount;
}
// National text copy
document
  .getElementById("national-copy-btn")
  .addEventListener("click", function () {
    navigator.clipboard.writeText(getHotlineNumber("national-number"));
    getCopyCount("text-copy-count");
  });
// Police text copy
document
  .getElementById("police-copy-btn")
  .addEventListener("click", function () {
    navigator.clipboard.writeText(getHotlineNumber("police-number"));
    getCopyCount("text-copy-count");
  });
//   Fire text copy
document.getElementById("fire-copy-btn").addEventListener("click", function () {
  navigator.clipboard.writeText(getHotlineNumber("fire-number"));
  getCopyCount("text-copy-count");
});


//! AI codes
Dynamic Call Button Handling
The current JavaScript code for the call buttons uses getElementsByClassName("card-call-btn") and then loops through them. The problem is that inside the loop, you call getHotlineNumber("police-number") every time, which will always use the police number, regardless of which card's button is clicked.

A better approach is to use Event Delegation. Instead of attaching an event listener to each button, you can attach a single listener to a parent container (like the card-container div). When a click happens on any of the buttons inside, you can check which one was clicked using event.target and get the correct phone number.

Here's a conceptual example:

JavaScript

const cardContainer = document.querySelector(".card-container");

cardContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("card-call-btn")) {
        // Find the parent card of the button that was clicked
        const cardItem = event.target.closest(".card-item");

        // Now, find the hotline number and name within that specific card
        const serviceName = cardItem.querySelector("h1.font-bold").innerText;
        const hotlineNumber = cardItem.querySelector("h1.font-extrabold").innerText;

        // Perform your call actions here
        alert(`You are calling ${serviceName}: ${hotlineNumber}`);

        // ... rest of your logic to handle coins and history
    }
});
Using this approach, you can easily get the correct number and service name for the alert and the history section. This is a much more efficient and scalable solution, especially as you add more cards.

Readme.md Answers
As requested, I will provide the answers to the questions you need for your Readme.md file.

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: This is the fastest method for getting an element from the DOM. It retrieves a single element by its unique id attribute. It's guaranteed to return only one element (or null if none is found).

getElementsByClassName: This method retrieves a "live" HTMLCollection of all elements that have a specified class name. A "live" collection means that if you add or remove elements with that class name after fetching the collection, the collection will automatically update.

querySelector: This is a modern, versatile method that retrieves the first element that matches a specified CSS selector (e.g., #myID, .myClass, div.special). It's more flexible than getElementById and getElementsByClassName because you can use any valid CSS selector.

querySelectorAll: Similar to querySelector, but it returns a static NodeList of all elements that match the specified CSS selector. A NodeList is not "live," so changes to the DOM after you fetch it won't be reflected in the list.

2. How do you create and insert a new element into the DOM?
To create a new element, you use the document.createElement() method, passing the tag name as an argument.

JavaScript

const newDiv = document.createElement('div');
Once the element is created, you can set its properties, such as its text content or class name.

JavaScript

newDiv.innerText = 'Hello, World!';
newDiv.classList.add('my-class');
To insert it into the DOM, you use one of the several methods available on a parent element, such as appendChild(), prepend(), or insertBefore().

JavaScript

const parent = document.getElementById('parent-container');
parent.appendChild(newDiv); // This will add the new element to the end of the parent container.
3. What is Event Bubbling and how does it work?
Event bubbling is a concept in which an event, when triggered on a specific element, will "bubble up" through its parent elements in the DOM tree. For example, if you click on a button inside a div that is inside a section, the click event will fire on the button first, then on the div, and finally on the section.  This process allows a single event listener on a parent element to handle events for all of its child elements.

4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique that uses the concept of event bubbling. Instead of attaching an event listener to every single child element (e.g., every button in a list), you attach just one listener to their common parent element.

It's useful because:

It improves performance by reducing the number of event listeners attached to the DOM, which uses less memory.

It makes your code more efficient when dealing with a large number of elements.

It simplifies handling events on dynamically added elements. If new elements are added to the list, the single parent listener will automatically work for them, so you don't have to add new listeners manually.

5. What is the difference between preventDefault() and stopPropagation() methods?
event.preventDefault(): This method prevents the default action of an event. For example, clicking a link (<a>) will normally navigate to a new page, and submitting a form will normally reload the page. Calling event.preventDefault() on the click or submit event will stop these actions from happening.

event.stopPropagation(): This method prevents the event from bubbling up to parent elements. If you click a button and call event.stopPropagation() on its click event, the event will not fire on the button's parent div or any other ancestor elements. It stops the event from propagating further up the DOM tree.