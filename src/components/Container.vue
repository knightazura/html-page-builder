<template>
  <div
    class="text-2xl font-bold text-purple-800 px-8 py-4 bg-purple-100 rounded"
    draggable="true"
    @dragstart="dragStart"
    @dragend="dragEnd"
    @click="showConfigurator">
    Container
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const showConfigurator = () => store.commit("selectElement", "container")

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
      let cfg = this.$store.getters.containerConfiguration

      // Event target element
      let element = document.createElement('div')

      // Styles
      let styles = Object
        .keys(cfg)
        .map(prop => cfg[prop])
      element.classList.add(...styles)
      element.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia asperiores qui commodi sit reiciendis numquam assumenda sunt suscipit facere, quidem consectetur blanditiis dolores aperiam exercitationem ipsa eligendi architecto incidunt ratione?'

      return element
    }
  }
}
</script>