function onMouseOver(anchor) {
    anchor.style.color = 'green'
}

function onMouseOut(anchor) {
anchor.style.color = 'revert'
}

function onFocusHandler(input) {
    input.style.backgroundColor = 'green'
}
function onBlurHandler(input) {
    input.style.backgroundColor = 'white'
}

function submitFormHandler(event) {
    event.preventDefault();
    var inputField = document.getElementById('email-field');
    alert(inputField.value)
    console.log(inputField.value)
}

 function submitFormHandler(event) {
    event.preventDefault();
    var inputField = document.getElementById('email-field');
    if (!inputField.value) {
        alert('Email not found')
    } else {
        alert(inputField.value)
    }
}

function onBlurHandler() {
  var zipCodeField = document.getElementById("zipcode");
  var zipCodeFieldValue = Number(zipCodeField.value);
  var city;

  switch (zipCodeFieldValue) {
    case 495743:
      city = "karachi";
      break;

    case 85794:
      city = "lahore";
      break;

    case 85797:
      city = "quetta";
      break;

    case 85799:
      city = "islamabad";
      break;

    case 85791:
      city = "multan";
      break;
  }

  document.getElementById("city").value = city;
}
