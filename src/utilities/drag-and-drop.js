import { computed } from 'vue';
import { useStore } from 'vuex'

const dragOver = event => {
  // Required to allow drop
  event.preventDefault()
}

const dragEnter = event => {
  let target = event.target;

  if (target.classList.contains("drop-zone")) {
    target.classList.replace("bg-white", "bg-yellow-50");
  }

  // prevent default to allow drop
  event.preventDefault();
}

const dragLeave = event => {
  let target = event.target;

  if (target.classList.contains("drop-zone")) {
    target.classList.replace("bg-yellow-50", "bg-white");
  }

  // prevent default to allow drop
  event.preventDefault();
}

const drop = event => {
  // Init.
  const store = useStore()
  // Get dragged element
  const dragged = computed(() => store.getters.dragged)

  // prevent default action (open as link for some elements)
  event.preventDefault();
  
  // move dragged elem to the selected drop target
  if (event.target.classList.contains("drop-zone")) {
    // Add modified-component class
    dragged.value.classList.add("modified-component");

    // Add to dropZone
    event.target.appendChild(dragged.value);

    // Save built page
    store.commit("buildRealPage", event.target)
  }
}

export default {
  dragOver,
  dragEnter,
  dragLeave,
  drop
}