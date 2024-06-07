// Function to handle drag start event
function drag(event) {
    console.log("Drag start event triggered");
    event.dataTransfer.setData("text/plain", event.target.id);
}


// Function to allow drop event
function allowDrop(event) {
    event.preventDefault();
}


function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    var draggedElement = document.getElementById(data);
    var insertionArea = event.target.closest('.insertionArea');
    
    // Check if the target is an insertion area
    if (insertionArea) {
        // Append the dragged element to the insertion area
        insertionArea.appendChild(draggedElement);
    }
}

