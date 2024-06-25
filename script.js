function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function allowDrop(event) {
  event.preventDefault(); 
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var dropTarget = event.target;
  var temp = draggedElement.style.backgroundImage;
  draggedElement.style.backgroundImage = dropTarget.style.backgroundImage;
  dropTarget.style.backgroundImage = temp;
}