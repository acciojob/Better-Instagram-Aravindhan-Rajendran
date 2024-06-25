function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// This function is called when something is dragged over the drop target
function allowDrop(ev) {
  ev.preventDefault(); // Prevent default handling of the data (default is open as link on drop)
}

// This function is called when the dragged element is dropped on the target
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var dropTarget = ev.target;

  // Swap background images
  var temp = draggedElement.style.backgroundImage;
  draggedElement.style.backgroundImage = dropTarget.style.backgroundImage;
  dropTarget.style.backgroundImage = temp;
}