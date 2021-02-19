"use strict"

import Sortable from 'sortablejs/modular/sortable.core.esm.js'
import BaseElement from '../base'
import DragAndDrop from '../../drag-and-drop'

class Division extends BaseElement {
  _STYLES = ["grid", "grid-cols-3", "relative"]
  
  // This configuration properties from element-configurator.module
  _CONFIG_PROPS = ["layoutMode"]

  constructor() {
    super("container")
    this.configuration = this.elementConfig
  }

  get type() {
    return this.elementType
  }

  // Methods
  build() {
    // Create element
    let division = document.createElement("div")
    
    // Add unique ID
    this.setUniqueID(division, "container")

    // Styles
    this._paintStyle(division)

    // Setup sortable
    Sortable.create(division, { animation: 150 })

    // Add children
    this
      ._buildChildElement()
      .map(child => division.appendChild(child))

    // Add remove button
    division.appendChild(this.removeButton(division))

    return division
  }

  _buildChildElement() {
    // Init.
    let children = []
    const dnd = new DragAndDrop()
    const layoutMode = this.configuration.layoutMode
    const childClasses = [
      "modified-component", 
      "modified-component--marker", 
      "drop-zone"
    ]
      
    // Set total children based on selected configuration
    const totalChildren = this._countTotalChildren(layoutMode)

    // Build!
    for(let i = 0; i < totalChildren; i++) {
      // Create child element
      let child = document.createElement("div")
      
      // Add unique ID
      this.setUniqueID(child, "container")

      // Style attributes
      child.classList.add(...childClasses)
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
      child.addEventListener("dragover", dnd.dragOver)
      child.addEventListener("dragenter", dnd.dragEnter)
      child.addEventListener("dragleave", dnd.dragLeave)
      child.addEventListener("drop", dnd.drop)

      // Setup sortable
      Sortable.create(child, { animation: 150 })

      children.push(child)
    }

    return children
  }

  _paintStyle(division) {
    division.classList.add(...this._STYLES)
  }

  _fillText(division, text) {
    division.innerText = text
  }

  _countTotalChildren(layoutMode) {
    if (layoutMode === '3') {
      return 1
    } else if (layoutMode === '1-2' || layoutMode === '2-1') {
      return 2
    } else {
      return 3
    }
  }
}

export default Division