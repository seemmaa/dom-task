
//task 1
const lastChildTagName = document.body.lastElementChild.tagName;
console.log(lastChildTagName); 

const bodyChildrenCount = document.body.children.length;//children without text and comment nodes (HTMLCollection)
console.log("number of children:", bodyChildrenCount);//its 3, get only element nodes

const bodyChildNodesCount = document.body.childNodes.length;//childNodes includes text and comment nodes (NodeList)
console.log("number of child nodes ",bodyChildNodesCount);//its 6, get all types of nodes including text nodes and comments
console.log("difference between children and childNodes:", bodyChildNodesCount - bodyChildrenCount);//3


var childs = document.body.childNodes;
for (var i = 0; i < childs.length; i++) {
  console.log(childs[i].nodeName, childs[i].nodeType);
}
console.log("text node:", childs[0].nodeName, childs[0].nodeType); // #text 3
var p = document.querySelector("p");
var sibling = p.nextElementSibling; 
console.log("next sibling element:", p.tagName); //first paragraph is sibling of the second paragraph

//the origin of this text node (unexpected nodes) is the whitespace between elements in the HTML structure
//there is text nodes with node type 3




//-----------------------------------------------------------------------------
//task 2

{/* <div class="card" data-role="admin">
  <h2>Access Panel</h2>
  <p>Authenticated</p>
</div> */}

const newDiv = document.createElement("div");
newDiv.className = "card";
newDiv.role = "admin";;
const newHeading = document.createElement("h2");
newHeading.textContent = "Access Panel";
const newParagraph = document.createElement("p");
newParagraph.textContent = "Authenticated";
newDiv.append(newHeading);
newDiv.append(newParagraph);

document.body.appendChild(newDiv);

console.log(newDiv.dataset.role);

newParagraph.textContent = "Welcome back, Admin";
newDiv.classList .add("authenticated"); 
newDiv.classList.add("highlight"); //

if(newDiv.classList.contains("card"))
    newDiv.classList.remove("card"); 







