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
import { computed } from 'vue'
import { useStore } from 'vuex'
import Sortable from 'sortablejs/modular/sortable.core.esm.js'

import uuid from '@/utilities/uuid'
import DND from '@/utilities/drag-and-drop'
import buildRemoveButton from '@/utilities/element-remover'

export default {
  setup() {
    const store = useStore()
    const showConfigurator = () => store.commit("selectElement", "container")

    // DND listeners
    const dragAndDrop = new DND()

    dragAndDrop.dragStart()

    return {
      showConfigurator,
      buildRemoveButton,
      dragged: computed(() => dragAndDrop.dragged),
      dragOver: evt => dragAndDrop.dragOver(evt),
      dragEnter: evt => dragAndDrop.dragEnter(evt),
      dragLeave: evt => dragAndDrop.dragLeave(evt),
      dragEnd: evt => dragAndDrop.dragEnd(evt),
      drop: evt => dragAndDrop.drop(evt),
    }
  },

  methods: {
    dragStart(event) {
      // Show configurator
      this.showConfigurator()

      // Duplicate element
      let copiedElement = this.buildElement()

      // Store dragged element
      this.$store.commit('setDraggedElement', copiedElement)

      // make it half transparent
      event.target.style.opacity = .5
    },

    buildElement() {
      // Get heading configuration
      let cfg = this.$store.getters.containerConfiguration

      // Event target: parent element
      let element = document.createElement('div')
      let parentId = "container-" + uuid(6)
      element.setAttribute("id", parentId)

      // Styles
      element.classList.add("grid", "grid-cols-3", "relative")

      // Setup sortable
      Sortable.create(element, { animation: 150 })

      // Add children
      this
        .buildChildElement(cfg.layoutMode)
        .map(child => element.appendChild(child))

      // Add remove button
      element.appendChild(this.buildRemoveButton(element))

      return element
    },

    countTotalChildren(layoutMode) {
      if (layoutMode === '3') {
        return 1
      } else if (layoutMode === '1-2' || layoutMode === '2-1') {
        return 2
      } else {
        return 3
      }
    },

    buildChildElement(layoutMode) {
      // Init.
      let children = []
      
      // Set total children based on selected configuration
      let totalChildren = this.countTotalChildren(layoutMode)

      // Build!
      for(let i = 0; i < totalChildren; i++) {
        let child = document.createElement("div")
        let childId = "child-container-" + uuid(6)

        // Style attributes
        child.setAttribute("id", childId)
        child.classList.add("modified-component", "modified-component--marker", "drop-zone")
        child.textContent = `Child ${i + 1}`
        // Special class: left span || right span
        if (
          (totalChildren === 2 && layoutMode === '2-1' && i === 0) ||
          (totalChildren === 2 && layoutMode === '1-2' && i === 1)
        ) {
          child.classList.add("col-span-2")
        }
        // Special class: full span
        if (totalChildren === 1) {
          child.classList.add("col-span-3")
        }

        // Add listeners
        child.addEventListener("dragover", this.dragOver)
        child.addEventListener("dragenter", this.dragEnter)
        child.addEventListener("dragleave", this.dragLeave)
        child.addEventListener("drop", this.drop)

        // Setup sortable
        Sortable.create(child, { animation: 150 })

        children.push(child)
      }

      return children
    }
  }
}
</script>