function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var dropTarget = event.target;

  // Check if the drop target is a div
  if (dropTarget.nodeName === "DIV") {
    // Swap background images
    var temp = draggedElement.style.backgroundImage;
    draggedElement.style.backgroundImage = dropTarget.style.backgroundImage;
    dropTarget.style.backgroundImage = temp;
  }
}
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dragEnd(event) {
  event.dataTransfer.clearData();
}