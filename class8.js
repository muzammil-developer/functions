
var liElements = document.getElementsByTagName("li");

var howManyLi = liElements.length;

for (var i = 0; i < howManyLi; i++) {
  if (liElements[i].innerHTML === "") {
    liElements[i].innerHTML = "coming soon";
  }
}

var countCheck = document.getElementById('task');
var children = countCheck.childNodes;
var paragrapghCount = 0;
var imageCount = 0;
var headingCount = 0;

for (var i = 0; i < children.length; i++) {
  var nodeName = children[i].nodeName;

  if (nodeName === "P") {
    paragrapghCount += 1;
  }

  if (nodeName === "IMG") {
    imageCount += 1;
  }

  if (nodeName === "H1") {
    headingCount += 1;
  }
}

console.log("paragraph", paragraphCount);
console.log("heading", headingCount);
console.log("images", imageCount);


var container = document.getElementById('container');
var hasClass = container.hasAttribute('class');
var classValue = container.getAttribute('class');

container.setAttribute('class', classValue + 'alert')

console.log(container.attributes.length)

console.log(hasClass);
console.log(classValue);

var image = document.getElementById('image');
image.setAttribute('src = images.jpg')
