"use strict";

import build from './page-builder'
import store from '../state'

class DS {
  pow() {
    console.log("Pow pow")
  }
}

class DragAndDrop {
  _BG_WHITE = "bg-white"
  _BG_GRAY  = "bg-gray-50"

  constructor() {
    this.store = store
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

  dragStart() {
    const ds = new DS()
    ds.pow()
  }

  dragEnd(event) {
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

      // Built page
      const mainDropZone = build(store)
      
      // Save modified page
      this.store.commit("saveModifiedPage", mainDropZone)
    }
  }
}

export default DragAndDrop