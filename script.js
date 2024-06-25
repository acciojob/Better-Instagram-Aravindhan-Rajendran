function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// This function is called when something is dragged over the drop target
function allowDrop(event) {
  event.preventDefault(); // Prevent default handling of the data (default is open as link on drop)
}

// This function is called when the dragged element is dropped on the target
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var dropTarget = event.target;

  // Swap background images
  var temp = draggedElement.style.backgroundImage;
  draggedElement.style.backgroundImage = dropTarget.style.backgroundImage;
  dropTarget.style.backgroundImage = temp;
}