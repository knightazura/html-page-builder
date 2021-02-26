<template>
  <div
    class="text-2xl font-bold text-purple-800 px-8 py-4 bg-purple-100 rounded"
    draggable="true"
    @dragstart="dragStart"
    @dragover="dragOver"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    @dragend="dragEnd"
    @drop="drop"
    @click="showConfigurator">
    Container
  </div>
</template>

<script>
import DivisionElement from '@/utilities/element/container/division'
import DragAndDrop from '@/utilities/drag-and-drop'

export default {
  setup() {
    // DND listeners
    const dnd = new DragAndDrop(DivisionElement)

    return {
      dragStart: evt => dnd.dragStart(evt),
      dragOver: evt => dnd.dragOver(evt),
      dragEnter: evt => dnd.dragEnter(evt),
      dragLeave: evt => dnd.dragLeave(evt),
      dragEnd: evt => dnd.dragEnd(evt),
      drop: evt => dnd.drop(evt),
      showConfigurator: () => dnd.showConfiguration(),
    }
  }
}
</script>