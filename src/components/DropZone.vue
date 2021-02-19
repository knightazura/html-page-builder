<template>
  <div
    id="main-drop-zone"
    class="drop-zone flex-grow bg-white min-h-screen"
    @dragover="dragOver"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    @dragend="dragEnd"
    @drop="drop"></div>
</template>

<script>
import Sortable from 'sortablejs/modular/sortable.core.esm.js'
import DragAndDrop from '@/utilities/drag-and-drop'

export default {
  setup() {
    const dnd = new DragAndDrop()

    return {
      dragOver: evt => dnd.dragOver(evt),
      dragEnter: evt => dnd.dragEnter(evt),
      dragLeave: evt => dnd.dragLeave(evt),
      dragEnd: evt => dnd.dragEnd(evt),
      drop: evt => dnd.drop(evt)
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
  }
}
</script>