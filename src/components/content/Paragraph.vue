<template>
  <div
    class="my-2 text-2xl font-bold text-purple-800 px-8 py-4 bg-purple-100 rounded"
    draggable="true"
    @dragstart="dragStart"
    @dragend="dragEnd"
    @click="showConfigurator">
    Paragraph
  </div>
</template>

<script>
import ParagraphElement from '@/utilities/element/content/paragraph'
import DragAndDrop from '@/utilities/drag-and-drop'

export default {
  setup() {
    const dnd = new DragAndDrop(ParagraphElement)

    return {
      dragStart: evt => dnd.dragStart(evt),
      dragEnd: evt => dnd.dragEnd(evt)
    }
  }
}
</script>
