"use strict";

import PageBuilder from './page-builder'
import ElementBuilder from './element/builder'
import store from '../state'

class DragAndDrop {
  _BG_WHITE = "bg-white"
  _BG_GRAY  = "bg-gray-50"

  constructor(elementObject = null) {
    this.store = store

    // Not main drop zone
    if (elementObject) {
      this.elementObject = new elementObject()
      this.elementBuilder = new ElementBuilder(elementObject)
    }
  }

  // Getters
  get dragged() {
    return this.store.getters.dragged
  }

  // Methods
  _isDropZone(target) {
    return target.classList.contains("drop-zone")
  }

  _toggleBackground(target, eventName) {
    let options = {
      enter: {
        from: this._BG_WHITE,
        to: this._BG_GRAY
      },
      leave: {
        from: this._BG_GRAY,
        to: this._BG_WHITE
      }
    }

    if (this._isDropZone(target))
      target.classList.replace(
        options[eventName].from, 
        options[eventName].to
      )
  }

  showConfiguration() {
    // Show configurator
    this.store.commit("selectElement", this.elementObject.name)
  }

  dragStart(event) {
    this.showConfiguration()

    // Build the element
    const newElement = this.elementBuilder.build()

    // Store new element to dragged item
    this.store.commit("setDraggedElement", newElement)

    // make dragged element half transparent
    event.target.style.opacity = .5
  }

  dragEnd(event) {
    // Remove dragged element
    this.store.commit("removeDraggedElement")

    // reset the transparency
    event.target.style.opacity = ""
  }

  dragOver(event) {
    // Required to allow drop
    event.preventDefault()
  }

  dragEnter(event) {
    this._toggleBackground(event.target, "enter")

    // Required to allow drop
    event.preventDefault()
  }

  dragLeave(event) {
    this._toggleBackground(event.target, "leave")
  
    // prevent default to allow drop
    event.preventDefault()
  }

  drop(event) {
    // Init.
    const dragged = this.store.getters.dragged

    // prevent default action (open as link for some elements)
    event.preventDefault()
    
    // move dragged elem to the selected drop target
    if (this._isDropZone(event.target)) {
      // Add modified-component class
      dragged.classList.add("modified-component", "modified-component--marker")

      // Add to dropZone
      event.target.appendChild(dragged)

      // Style
      this._toggleBackground(event.target, "leave")

      // Specific for image
      if (this.store.getters.selectedElement === "image") {
        const vInstance = this.store.getters.vueElementInstance
        const wrapperID = `#${dragged.getAttribute("id")}`

        vInstance.mount(wrapperID)
      }

      // Built page
      const mainDropZone = PageBuilder(store)
      
      // Save modified page
      this.store.commit("saveModifiedPage", mainDropZone)

      // Remove dragged element
      this.store.commit("removeDraggedElement")
    }
  }

  async _fetchImage(parent, image) {
    // Get source if any
    const source = store.getters.contentConfiguration.source

    // Get dimensions
    const width = parent.getBoundingClientRect().width
    const height = source ? 'auto' : '75px'

    // Fetch image
    image.src = await source ?? `https://via.placeholder.com/${Math.floor(width)}`

    // Set height
    image.style.height = height
  }
}

export default DragAndDrop