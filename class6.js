function onBlurCityHandler() {
  var cityField = document.getElementById('city');
  var cityFieldLowerCase = cityField.value.toLowerCase();
  var zipcode;

  switch (cityFieldLowerCase) {
    case 'karachi' :
      zipcode = 495743
      break;

    case 'lahore' :
      zipcode = 85794
      break;

    case 'quetta' :
      zipcode = 85797 
      break;

    case 'islamabad' :
      zipcode = 85799 
      break;

    case 'multan' :
      zipcode = 85791 
      break;

      default:
        zipcode = '000'
        break;
  };

  document.getElementById("zipcode").value = zipcode;
}


function expandLoris() {
  var expandedParagraph = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus."
      document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

function expandLoris() {
var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

function makebig() {
  var image = document.getElementById('image')
  image.className+= ' border-thick'
}

// function makeVisible() {
//   var image = document.getElementById('image')
//   image.classList.remove('invisible')
// }

function removeRow(id) {
  var tableRow = document.getElementById(id);
  tableRow.className = 'hide-row';
};
