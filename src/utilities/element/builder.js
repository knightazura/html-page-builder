class ElementBuilder {
  constructor(element) {
    this.element = element
  }

  build() {
    return this.element.build()
  }
}

export default ElementBuilder