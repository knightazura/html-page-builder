<template>
  <div
    class="my-2 text-2xl font-bold text-purple-800 px-8 py-4 bg-purple-100 rounded"
    draggable="true"
    @dragstart="dragStart"
    @dragend="dragEnd"
    @click="showConfigurator">
    Image
  </div>
</template>

<script>
import ImageElement from '@/utilities/element/content/image'
import DragAndDrop from '@/utilities/drag-and-drop'

export default {
  setup() {
    const dnd = new DragAndDrop(ImageElement)

    return {
      dragStart: evt => dnd.dragStart(evt),
      dragEnd: evt => dnd.dragEnd(evt),
      showConfigurator: () => dnd.showConfiguration(),
    }
  }
}
</script>
