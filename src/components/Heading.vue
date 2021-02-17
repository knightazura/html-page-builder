<template>
  <div
    class="my-2 text-2xl font-bold text-purple-800 px-8 py-4 bg-purple-100 rounded"
    draggable="true"
    @dragstart="dragStart"
    @dragend="dragEnd"
    @click="showConfigurator">
    Heading
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const showConfigurator = () => store.commit("selectElement", "heading")

    return {
      showConfigurator
    }
  },

  methods: {
    dragStart(event) {
      // Show configurator
      this.showConfigurator()

      // Duplicate element
      let copiedElement = this.buildElement()

      // Store dragged element
      this.$store.commit('setDraggedElement', copiedElement)

      // make it half transparent
      event.target.style.opacity = .5
    },

    dragEnd(event) {
      // reset the transparency
      event.target.style.opacity = ""
    },

    buildElement() {
      // Get heading configuration
      let cfg = this.$store.getters.contentConfiguration
      console.log(cfg.headingLevel)

      // Event target element
      let element = document.createElement(cfg.headingLevel)

      // Styles
      let styles = Object
        .keys(cfg)
        .map(prop => {
          if (prop === "headingLevel") {
            switch (cfg[prop]) {
              case "h2":
                return "text-3xl"
              case "h3":
                return "text-2xl"
              case "h4":
                return "text-xl"
              case "h5":
                return "text-lg"
              case "h6":
                return "text-base"
              default:
                return "text-4xl"
            }
          } else if (prop !== "fontSize") {
            return cfg[prop]
          } else {
            return
          }
        })
      element.classList.add(...styles)
      element.textContent = `Heading ${cfg.headingLevel}`

      return element
    }
  }
}
</script>
