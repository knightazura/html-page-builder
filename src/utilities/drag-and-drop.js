const dragEnd = event => {
  // reset the transparency
  event.target.style.opacity = ""
}

const dragOver = event => {
  // Required to allow drop
  event.preventDefault()
}

const dragEnter = event => {
  let target = event.target;

  if (target.classList.contains("drop-zone")) {
    target.classList.replace("bg-white", "bg-gray-50");
  }

  // prevent default to allow drop
  event.preventDefault();
}

const dragLeave = event => {
  let target = event.target;

  if (target.classList.contains("drop-zone")) {
    target.classList.replace("bg-gray-50", "bg-white");
  }

  // prevent default to allow drop
  event.preventDefault();
}

const drop = (event, o) => {
  // Init.
  const { store, dragged } = o

  // prevent default action (open as link for some elements)
  event.preventDefault();
  
  // move dragged elem to the selected drop target
  if (event.target.classList.contains("drop-zone")) {
    // Add modified-component class
    dragged.classList.add("modified-component");

    // Add to dropZone
    event.target.appendChild(dragged);

    // Style
    event.target.classList.replace("bg-gray-50", "bg-white");

    // Save built page
    store.commit("buildRealPage", event.target)
  }
}
export default {
  dragEnd,
  dragOver,
  dragEnter,
  dragLeave,
  drop
}