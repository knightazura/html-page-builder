"use strict"

import store from '../../state'
import uuid from '../uuid'
import buildRemoveButton from '../element-remover'

class BaseElement {
  constructor(elementType) {
    this.store = store
    this.element = null
    this.elementType = elementType
  }

  // Configuration
  get elementConfig() {
    return this.store.getters[`${this.elementType}Configuration`]
  }

  removeButton(element) {
    return buildRemoveButton(element)
  }

  setUniqueID(element, type, getID = false) {
    const uniqueID = type + "-" + uuid(6)
    element.setAttribute("id", uniqueID)

    if(getID)
      return uniqueID
  }
}

export default BaseElement