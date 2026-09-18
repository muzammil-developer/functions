function removeJunkArtifacts(parentElement) {
  // Loop backwards because removing items affects the index of a live collection
  var childNodes = parentElement.childNodes;

  for (var i = childNodes.length - 1; i >= 0; i--) {

    var node = childNodes[i];

    var isJunkArtifact = node.nodeType === 3 || node.nodeType === 8;


    if (isJunkArtifact) {
      parentElement.removeChild(node);
    }
  };

  return parentElement;
}

var todos = [];

function removeTodo(todoIndex) {
  todos.splice(todoIndex, 1);
  displayTodos(todos);
}

function addTodo(e) {
  e.preventDefault();

  // Fetching data
  var inputField = document.getElementById('todo-input');

  todos.push(inputField.value);

  inputField.value = '';

  displayTodos(todos);
}

function displayTodos(todosArray) {
  var todoTable = document.getElementById('todo-table');
  var todoTableWithoutJunk = removeJunkArtifacts(todoTable);
  var tableBody = todoTableWithoutJunk.childNodes[0];
  var tableHeading = document.createElement('tr');
  var tableHeadingCell = document.createElement('th');
  var tableHeadingCellText = document.createTextNode('Tasks');

  tableBody.innerHTML = '';

  tableHeadingCell.appendChild(tableHeadingCellText);
  tableHeading.appendChild(tableHeadingCell);
  tableBody.appendChild(tableHeading);

  for (var i = 0; i < todosArray.length; i++) {

    // creating elements node
    var tableRow = document.createElement('tr');
    var tableCell1 = document.createElement('td');
    var tableCell2 = document.createElement('td');
    var tableCell1_Text_Node = document.createTextNode(todosArray[i]);
    var tableCell2_Button = document.createElement('button');
    var button_Text_Node = document.createTextNode('Remove');
    tableCell2_Button.appendChild(button_Text_Node);
    tableCell2_Button.setAttribute('onclick', `removeTodo(${i})`)

    tableCell1.appendChild(tableCell1_Text_Node);
    tableCell2.appendChild(tableCell2_Button);
    tableRow.appendChild(tableCell1);
    tableRow.appendChild(tableCell2);
    tableBody.appendChild(tableRow);
  }
}
