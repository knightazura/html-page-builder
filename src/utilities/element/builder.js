class ElementBuilder {
  constructor(element) {
    this.element = new element()
  }

  build() {
    return this.element.build()
  }
}

export default ElementBuilder