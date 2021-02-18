"use strict"

import store from '../../state'

class BaseElement {
  constructor(element) {
    this.store = store
    this.element = element
  }

  // Configuration
  get elementConfig() {
    return this.store.getters[`${this.element}Configuration`]
  }
}