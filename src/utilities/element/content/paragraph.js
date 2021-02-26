"use strict"

import BaseElement from '../base'

class Paragraph extends BaseElement {
  // This configuration properties from element-configurator.module
  _CONFIG_PROPS = ["fontColour", "textAlign"]

  // Styles
  _STYLES = ["p-3", "relative"]

  constructor() {
    super("content")
    this.configuration = this.elementConfig
  }

  get type() {
    return this.elementType
  }

  get name() {
    return "paragraph"
  }

  // Methods
  build() {
    // Create parent element
    let paragraph = document.createElement("p")

    // Styles
    this._paintStyle(paragraph)

    // Fill text
    this._fillText(paragraph, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`)

    // Add remove button
    paragraph.appendChild(this.removeButton(paragraph))

    return paragraph
  }

  _paintStyle(paragraph) {
    let config = this.configuration

    // Styles from configuration
    let configStyles = Object
      .keys(config)
      .map(prop => {
        if (this._CONFIG_PROPS.includes(prop)) {
          return config[prop]
        } else {
          return
        }
      })
    
    paragraph.classList.add(...configStyles, ...this._STYLES)
    paragraph.classList.remove("undefined")
  }

  _fillText(paragraph, text) {
    paragraph.innerText = text
  }
}

export default Paragraph