"use strict"

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
  // This configuration properties from element-configurator.module
  _CONFIG_PROPS = ["fontColour", "textAlign", "headingLevel"]

  constructor() {
    super("content")
    this.configuration = this.elementConfig
  }

  get type() {
    return this.elementType
  }

  // Methods
  build() {
    // Create parent element
    let heading = document.createElement(this.configuration.headingLevel)

    // Styles
    this._paintStyle(heading)

    // Fill text
    this._fillText(heading, `Heading ${this.configuration.headingLevel}`)

    // Add remove button
    heading.appendChild(this.removeButton(heading))

    return heading
  }

  _paintStyle(heading) {
    let config = this.configuration

    // Styles
    let styles = Object
      .keys(config)
      .map(prop => {
        if (this._CONFIG_PROPS.includes(prop)) {
          
          // Heading level
          if (prop === "headingLevel") {
            return this._CLASSES_MAP[config.headingLevel]
          }

          return config[prop]
        } else {
          return
        }
      })
    
    heading.classList.add(...styles)
    heading.classList.add("relative")
    heading.classList.remove("undefined")
  }

  _fillText(heading, text) {
    heading.innerText = text
  }
}

export default Heading