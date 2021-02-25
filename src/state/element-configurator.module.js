const elementConfigurator = {
  state: {
    selectedElement: '',
    activeConfiguration: {
      contentElement: {
        fontColour: 'text-black',
        textAlign: 'text-left',
        headingLevel: 'h1',
        // for Image
        circle: false,
        source: null,
        // generic
        borderWeight: 'border',
        borderType: 'solid',
        borderRadius: 'rounded-none',
        boxShadow: 'shadow-none',
      },
      containerElement: {
        layoutMode: '1-1-1'
      }
    },
    vueElementInstance: null
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
    },
    vueElementInstance(state) {
      return state.vueElementInstance
    },

    // Elements specific
    imageConfiguration(state) {
      const {
        source,
        circle,
        borderRadius,
        boxShadow
      } = state.activeConfiguration.contentElement

      return {
        source,
        circle,
        borderRadius,
        boxShadow
      }
    }
  },

  mutations: {
    selectElement(state, element) {
      state.selectedElement = element
    },
    setVueElementInstance(state, vueInstance) {
      state.vueElementInstance = vueInstance
    },
    // Content element configurations
    setContentElement(state, { config, value }) {
      state
        .activeConfiguration
        .contentElement[config] = value
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