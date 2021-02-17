import { createStore } from 'vuex'
import elementConfigurator from './element-configurator.module'

const store = createStore({
  modules: {
    elementConfigurator
  },

  state () {
    return {
      pageBuilt: null,
      dragged: null
    }
  },

  getters: {
    dragged (state) {
      return state.dragged
    },
    pageBuilt (state) {
      return state.pageBuilt
    }
  },

  mutations: {
    initialBuildRealPage(state) {
      let container = document.createElement("div")
      container.classList.add("root-container")

      state.pageBuilt = container
    },
    setDraggedElement (state, element) {
      state.dragged = element
    },
    buildRealPage(state, builtPage) {
      state.pageBuilt = builtPage
    }
  }
})

export default store;