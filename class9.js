var container = document.getElementById("container");
var newParagraph = document.createElement("p");
var textNode = document.createTextNode("Muhazzib");
newParagraph.appendChild(textNode);

var paragraph1 = container.firstChild;

container.insertBefore(newParagraph, paragraph1);

var container = document.getElementById("container");
var newParagraph = document.createElement("p");
var textNode = document.createTextNode("Muhazzib");
newParagraph.appendChild(textNode);

var target = container.ChildNodes[1];

container.insertBefore(newParagraph, target.nextSibling);

function removeJunkArtifacts(parentElement) {
  // Loop backwards because removing items affects the index of a live collection
  var childNodes = parentElement.childNodes;

  for (var i = childNodes.length - 1; i >= 0; i--) {
    var node = childNodes[i];

    var isJunkArtifact = node.nodeType === 3 || node.nodeType === 8;

    if (isJunkArtifact) {
      parentElement.removeChild(node);
    }
  }

  return parentElement;
}



function addTodo(e) {
  e.preventDefault();

  // Fetching data
  var inputValue = document.getElementById("todo-input").value;
  var todoTable = document.getElementById("todo-table");
  var todoTableWithoutJunk = removeJunkArtifacts(todoTable);
  var tableBody = todoTableWithoutJunk.childNodes[0];

  // creating elements node
  var tableRow = document.createElement("tr");
  var tableCell1 = document.createElement("td");
  var tableCell2 = document.createElement("td");
  var tableCell_Text_Node = document.createTextNode(inputValue);
  var tableCell2_Button = document.createElement("button");
  var button_Text_Node = document.createTextNode("Remove");
  tableCell2_Button.appendChild(button_Text_Node);

  // appending/adding elements node
  tableCell1.appendChild(tableCell_Text_Node);
  tableCell2.appendChild(tableCell2_Button);
  tableRow.appendChild(tableCell1);
  tableRow.appendChild(tableCell2);
  tableBody.appendChild(tableRow);
}
