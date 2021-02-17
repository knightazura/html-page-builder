const elementConfigurator = {
  state: {
    selectedElement: '',
    activeConfiguration: {
      contentElement: {
        fontColour: 'text-black',
        fontSize: 'text-base',
        textAlign: 'text-left',
        headingLevel: 'h1'
      },
      containerElement: {
        layoutMode: '1-1-1'
      }
    }
  },
  
  getters: {
    selectedElement(state) {
      return state.selectedElement
    },
    contentConfiguration(state) {
      return state.activeConfiguration.contentElement
    },
    containerConfiguration(state) {
      return state.activeConfiguration.containerElement
    }
  },

  mutations: {
    selectElement(state, element) {
      state.selectedElement = element
    },
    // Content element configurations
    setFontColour(state, colour) {
      state
        .activeConfiguration
        .contentElement
        .fontColour = colour
    },
    setFontSize(state, size) {
      state
        .activeConfiguration
        .contentElement
        .fontSize = size
    },
    setTextAlign(state, align) {
      state
        .activeConfiguration
        .contentElement
        .textAlign = align
    },
    setHeadingLevel(state, level) {
      state
        .activeConfiguration
        .contentElement
        .headingLevel = level
    },

    // Container element configurations
    setContainerElement(state, { config, value }) {
      state
        .activeConfiguration
        .containerElement[config] = value
    },
  }
}

export default elementConfigurator