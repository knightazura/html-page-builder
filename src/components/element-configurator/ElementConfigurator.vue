<template>
  <div class="p-4 mt-4 border-t border-gray-300">
    <div class="flex flex-col">
      <component v-for="(component, i) in activeComponent" :is="component" :key="i"></component>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

// Content element components
import ContentFontColor from './ContentFontColor.vue'
import ContentFontSize from './ContentFontSize.vue'
import ContentTextAlign from './ContentTextAlign.vue'
import ContentHeadingLevel from './ContentHeadingLevel.vue'

// Container element components
import ContainerLayoutMode from './ContainerLayoutMode.vue'

export default {
  components: {
    // Content element components
    "content-font-color": ContentFontColor,
    "content-font-size": ContentFontSize,
    "content-text-align": ContentTextAlign,
    "content-heading-level": ContentHeadingLevel,

    // Container element components
    "container-layout-mode": ContainerLayoutMode,
  },

  setup() {
    const store = useStore()
    const activeComponent = computed(() => {
      let result = []
      switch (store.getters.selectedElement) {
        case 'heading':
          result = ["content-heading-level", "content-font-color", "content-text-align"]
          break;
        case 'text':
          result = ["content-font-color", "content-font-size"]
          break;
        case 'container':
          result = ["container-layout-mode"]
          break;
      }

      return result;
    })

    return {
      activeComponent
    }
  }
}
</script>