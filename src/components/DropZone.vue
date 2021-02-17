<template>
  <div
    id="main-drop-zone"
    class="drop-zone flex-grow bg-white min-h-screen"
    @dragover="dragOver"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    @drop="drop"></div>
</template>

<script>
import Sortable from 'sortablejs/modular/sortable.core.esm.js'
import DND from '@/utilities/drag-and-drop'

export default {
  setup() {
    // DND listeners
    const {
      dragOver,
      dragEnter,
      dragLeave
    } = DND

    return {
      dragOver,
      dragEnter,
      dragLeave
    }
  },
  mounted() {
    // Sortable
    Sortable.create(document.getElementById("main-drop-zone"), {
      animation: 150,
      onEnd: function (evt) {
        evt.item.setAttribute("draggable", "true");
      },
    })

    let dropZone = document.querySelector(".drop-zone")
    let pb = this.$store.getters.pageBuilt;

    if (pb) {
      let cd = Array.from(pb.children);
  
      for (const c of cd) {
        dropZone.appendChild(c);
      }
    }
  },

  computed: {
    dragged() {
      return this.$store.getters.dragged
    }
  },

  methods: {
    drop(event) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if (event.target.classList.contains("drop-zone")) {
        // Add modified-component class
        this.dragged.classList.add("modified-component");

        // Add to dropZone
        event.target.appendChild(this.dragged);

        // Save built page
        this.$store.commit("buildRealPage", event.target)
      }
    },
  }
}
</script>