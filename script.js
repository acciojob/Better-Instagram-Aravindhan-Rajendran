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