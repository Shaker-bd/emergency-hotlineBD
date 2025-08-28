

### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

_Answer :_

**getElementById** : We can identify an element using ID and CLASSNAME. Using getElementById we can get only that sepcific element. So that in the name getElementById using element not elements. ID can not be used more than one element. This is the most powerful system to find an element.

**getElementsByClassName** : Using getElementsByClassName we can find all the elements with the same class. We can use a class name in different element where ID used only one element. So that here is using the word elements not element. **getElementsByClassName return a HTML Collection.**

**querySelector** : This is aslo use to find the element. In the querySelector we can use Id, class name or even a tag name. querySelector always find the first element of what we are finding.

**querySelectorAll** : querySelectorAll is mostly like querySelector. The difference is querySelectorAll find all the same types of element like all the elements used the same class or all the elements used same tag name. **querySelectorAll return a nodeList even if only one element.**

2. How do you **create and insert a new element into the DOM**?
   _Answer_

We can create an element using **createElement** method. To insert the element into the dom We can use **appendChild** method.

```
const parentDiv = document.getElementById('');
    const newDiv = Document.createElement('div');
    parentDiv.appendChild(nweDiv);
```

3. What is *Event Bubbling* and how does it work?
_Answer_
**Event Bubbling** is the Oposite process of Event Capturing. Event capturing Starts the process from the root like docunent. But in Event Bubling starts the process from the triggered element and then bubbleing up to the root. It start from the triggered element and then go through all the anchestors element to the root.

4. What is **Event Delegation** in JavaScript? Why is it useful?
_Answer_
Event Delegation is an event handling process where we can handle all the elements inside a parent element. In This system we can set an evenListener in a common parent element rather than set the evenListener to all the child element. In this system when an event occurs in a specific item then it bubble up to the parrent. Then this single evenListener determines in which element occurs the event.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

_Answer_
preventDefault method used to stop the specific default function of the browser. Like, when we click the submit button of any form the page reload automatically. So that we can stop this specific reload using preventDefault method.
**stopPropagation** : It is used to stop the propagation of the event in DOM tree. When a button clicked it bubble up to the root. Suppose I have a section. In the section there is a div. Insede the div there is a button. When I clicked the button it will show button clicked, div clicked, section clicked unless I stop the process. So that stop this process I can use the stopPropagation().


-----
Thank You.
