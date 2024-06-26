function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var dropTarget = event.target;

  // Swap background images
  var temp = draggedElement.style.backgroundImage;
  draggedElement.style.backgroundImage = dropTarget.style.backgroundImage;
  dropTarget.style.backgroundImage = temp;

  // Swap innerHTML
  var tempText = draggedElement.innerHTML;
  draggedElement.innerHTML = dropTarget.innerHTML;
  dropTarget.innerHTML = tempText;
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