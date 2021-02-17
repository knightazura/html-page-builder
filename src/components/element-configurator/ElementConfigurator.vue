<template>
  <div class="p-4 mt-4 border-t border-gray-200">
    <h2 class="w-full text-center text-gray-600 text-lg font-bold">Element Configuration</h2>
    <div v-if="activeComponent.length > 0" class="flex flex-col">
      <component v-for="(component, i) in activeComponent" :is="component.name" :configName="component.configName" :key="i"></component>
    </div>
    <div class="mt-4 py-8 bg-gray-100 text-center text-gray-400 italic" v-else>Select an element first</div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

// Content element components
import ContentFontColor from './ContentFontColor.vue'
import ContentTextAlign from './ContentTextAlign.vue'
import ContentHeadingLevel from './ContentHeadingLevel.vue'

// Container element components
import ContainerLayoutMode from './ContainerLayoutMode.vue'

export default {
  components: {
    // Content element components
    "content-font-color": ContentFontColor,
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
          result = [
            {name: "content-heading-level", configName: "headingLevel"},
            {name: "content-font-color", configName: "fontColour"},
            {name: "content-text-align", configName: "textAlign"}
          ]
          break;
        case 'container':
          result = [{ name: "container-layout-mode", configName: "layoutMode"}]
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