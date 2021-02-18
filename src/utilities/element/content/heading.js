"use strict"

import store from '../../../state'
import BaseElement from '../base'

class Heading extends BaseElement {
  _CLASSES_MAP = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
  }

  constructor() {
    super()
    this.configuration = this.elementConfig
  }

  // Methods
  build() {
    // Create parent element
    let heading = document.createElement(config.headingLevel)

    // Styles
    this._paintStyle(heading)

    // Fill text
    this._fillText(heading, `Heading ${this.configuration.headingLevel}`)

    // Add remove button
    // heading.appendChild()

    return heading
  }

  _paintStyle(heading) {
    let config = this.configuration

    // Styles
    let styles = this._CLASSES_MAP
      .keys(config)
      .map(prop => {
        if (prop === "headingLevel") {
          return this._CLASSES_MAP[config.headingLevel]
        } else if (prop !== "fontSize") {
          return config[prop]
        } else {
          return
        }
      })
    
    heading.classList.add(...styles)
    heading.classList.add("relative")
  }

  _fillText(heading, text) {
    heading.textContet = text
  }
}

export default Heading