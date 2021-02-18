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
import DND from '@/utilities/drag-and-drop'

export default {
  setup() {
    const dragAndDrop = new DND()

    return {
      dragOver: evt => dragAndDrop.dragOver(evt),
      dragEnter: evt => dragAndDrop.dragEnter(evt),
      dragLeave: evt => dragAndDrop.dragLeave(evt),
      dragEnd: evt => dragAndDrop.dragEnd(evt),
      drop: evt => dragAndDrop.drop(evt)
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