const elementConfigurator = {
  state: {
    selectedElement: '',
    activeConfiguration: {
      contentElement: {
        fontColour: 'text-black',
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
    setContentElement(state, { config, value }) {
      state
        .activeConfiguration
        .contentElement[config] = value
    },

    // Container element configurations
    setContainerElement(state, { config, value }) {
      console.log({config, value})
      state
        .activeConfiguration
        .containerElement[config] = value
    },
  }
}

export default elementConfigurator