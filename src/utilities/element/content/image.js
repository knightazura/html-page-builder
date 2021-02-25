"use strict"

import { createApp } from 'vue'
import BaseElement from '../base'
import ImageElement from '@/created-elements/ImageElement.vue'
import uuid from '../../uuid'

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
    // Create wrapper element.
    // Image itself will created with Vue component
    let image = document.createElement("div")

    // Styles
    this._paintStyle(image)

    // Set ID to wrapper,
    // that later vue instance mounted on
    image.setAttribute("id", `element-${uuid(6)}`)

    // Add remove button
    image.appendChild(this.removeButton(image))

    // Create and set Vue instance
    this._setVueInstance()

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

  _setVueInstance() {
    // Init.
    const vImage = createApp(ImageElement)

    // Use global store
    vImage.use(this.store)

    // Commit instance to store
    this.store.commit("setVueElementInstance", vImage)
  }
}

export default Image