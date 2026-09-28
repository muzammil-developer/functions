function checkForLastName() {
    var lastNameField = document.getElementById("lastNameField")
  if (lastNameField.value.length === 0) {
    alert("Please enter your last name");
    lastNameField.focus()
  }
   return false;
}

function checkForSelection() {
  if (document.getElementById("states").selectedIndex === 0) {
    alert("Please select a state.");
    return false;
  }
}

function validateZipCode(e) {
  e.preventDefault();
  var zipCodeField = document.getElementById("zipcode").value;
  if (zipCodeField.length < 5) {
    alert("Enter Valid Length ZipCode");
    return;
  }

  for (var i = 0; i < zipCodeField.length; i++) {
    if (isNaN(parseInt(zipCodeField[i]))) {
      alert("Enter Valid Type Of ZipCode");
      return;
    }
  }
}
