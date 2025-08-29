1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById:by this we can select a html element with given id selector.it returns one html element that matches with the id selector

getElementsByClassName:by this we can select a group of html element with given class selector.it returns a group of html element that matches with the class selector

querySelector:by this we can select the first html element with given  selector .it returns one html element that matches with the selector.the selector can be class,id ,tag selector

querySelectorAll:by this we can select a group of html element with given  selector.it returns a group of html element that matches with the selector.the selector can be class,id ,tag selector


2.How do you create and insert a new element into the DOM?

create element:
let div=document.createElement("div");
let p=document.createElement("p");

add text to p element:
p.textContent="this is a p tag";

insert element:
now we will insert the created element p to body tag
div.appendChild(p);

3.What is Event Bubbling and how does it work?

Event Bubbling means when an event happens on a child element, it first runs on that element, and then it moves up to its parent, then to the parent’s parent, and so on, until it reaches the document.

example:

<div id="dada" style="padding: 10px; background-color: rgb(201, 14, 14);">
  <div id="parent" style="padding: 10px; background-color: black;">
    <button id="child">Click Me</button>
  </div>

</div>
<script>
  document.getElementById("dada").addEventListener("click", () => {
      console.log("dada clicked");
    });
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
  });
</script>

if we click on button the in console we find:

Child clicked
Parent clicked
dada clicked

4.What is Event Delegation in JavaScript? Why is it useful?


Event Delegation is a way to find a child element of a parent element without selecting each element differently

example:

<ul class="parent">
  <li class="child1">child1</li>
  <li class="child2">child2</li>
  <li class="child3">child3</li>
</ul>

<script>
document.querySelector(".parent").addEventListener("click", (e) => {
  if(e.target.classList.contains("child2")) {
    console.log("Clicked:", e.target.textContent);
  }
});
</script>

5.What is the difference between preventDefault() and stopPropagation() methods?

preventDefault():
preventDefault is a way of prevent the default behavior of browser.
when an event run then the page reload but if we donot need to reload the page after page refresh
then we use it .
stopPropagation():
stopPropagation() is a way of prevent stops event bubbling.
When an event happens on an element, it will not go up to its parent elements.

example:

<div id="dada" style="padding: 10px; background-color: green;">
  <div id="parent" style="padding: 10px; background-color: black;">
    <button id="child">Click Me</button>
  </div>

</div>
<script> document.getElementById("dada").addEventListener("click", () => {

console.log("dada clicked");
   });
 document.getElementById("parent").addEventListener("click", () => {

console.log("Parent clicked");

 });


document.getElementById("child").addEventListener("click", (e) => {
e.stopPropagation();
 console.log("Child clicked");
});


normally we will get output as

Child clicked
Parent clicked
dada clicked

but for stopPropagation we get  

Child clicked


 



