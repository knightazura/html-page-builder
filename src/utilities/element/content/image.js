"use strict"

import BaseElement from '../base'

class Image extends BaseElement {
  // This configuration properties from element-configurator.module
  _CONFIG_PROPS = ["border", "borderRadius", "circle", "source"]

  constructor() {
    super("content")
    this.configuration = this.elementConfig
  }

  get type() {
    return this.elementType
  }

  get name() {
    return "image"
  }

  // Methods
  build() {
    // Create parent element
    let image = document.createElement("img")

    // Set the element to global
    this.element = image

    // Styles
    this._paintStyle(image)

    // Add remove button
    image.appendChild(this.removeButton(image))

    return image
  }

  _paintStyle(image) {
    let config = this.configuration

    // Styles
    let styles = Object
      .keys(config)
      .map(prop => {
        if (this._CONFIG_PROPS.includes(prop)) {
          return config[prop]
        } else {
          return
        }
      })
    
    image.classList.add(...styles)
    image.classList.add("relative")
    image.classList.remove("undefined")
  }
}

export default Image