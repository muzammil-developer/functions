// var p = document.childNodes[1].childNodes[2];

// removeJunkArtifacts(p)

// function removeJunkArtifacts(parentElement) {
//     var childNodes = parentElement.childNodes;

//     for (var i = childNodes.length - 1; i >= 0; i--) {

//         var node = childNodes[i];
//         var isJunkArtifact = node.nodeType === 3 || node.nodeType === 8;

//         if (isJunkArtifact) {
//             parentElement.removeChild(node);
//         }
//     }
// }

var p = document.childNodes[1].childNodes[2];

console.log(removeJunkArtifacts(p));

function removeJunkArtifacts(parentElement) {
  var childNodes = parentElement.childNodes;

  var elementsCount = 0;

  for (var i = childNodes.length - 1; i >= 0; i--) {
    var node = childNodes[i];

    var isJunkArtifact = node.nodeType === 3 || node.nodeType === 8;

    if (isJunkArtifact) {
      parentElement.removeChild(node);
    } else {
      elementsCount = elementsCount + 1;
    }
  }

  return elementsCount;
}
