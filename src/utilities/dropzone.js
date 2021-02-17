const listeners = (draggedElement) => {

  // Required to allow drop!
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function(event) {
    let target = event.target;

    if (target.classList.contains("drop-zone")) {
      target.classList.replace("bg-yellow-100", "bg-yellow-200");
    }

    // prevent default to allow drop
    event.preventDefault();
  }, false);

  document.addEventListener("dragleave", function(event) {
    let target = event.target;

    if (target.classList.contains("drop-zone")) {
      target.classList.replace("bg-yellow-200", "bg-yellow-100");
    }

    // prevent default to allow drop
    event.preventDefault();
  }, false);

  document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.classList.contains("drop-zone")) {
      event.target.style.background = "";
      draggedElement.parentNode.removeChild( draggedElement );
      event.target.appendChild( draggedElement );
    }
  }, false);
}

export default listeners;