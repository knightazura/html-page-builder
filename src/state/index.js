import { createStore } from 'vuex'
import elementConfigurator from './element-configurator.module'

const store = createStore({
  modules: {
    elementConfigurator
  },

  state () {
    return {
      pageBuilt: null,
      pageModified: null,
      dragged: null
    }
  },

  getters: {
    dragged (state) {
      return state.dragged
    },
    pageBuilt (state) {
      return state.pageBuilt
    },
    pageModified (state) {
      return state.pageModified
    }
  },

  mutations: {
    initialBuildRealPage(state) {
      let container = document.createElement("div")
      container.classList.add("root-container")

      state.pageBuilt = container
    },
    setDraggedElement (state, element) {
      console.log({element})
      state.dragged = element
    },
    buildRealPage(state, builtPage) {
      state.pageBuilt = builtPage
    },
    saveModifiedPage(state, page) {
      state.pageModified = page
    }
  }
})

export default store;