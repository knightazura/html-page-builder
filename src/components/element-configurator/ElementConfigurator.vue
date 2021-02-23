<template>
  <div class="p-4 mt-4 border-t border-gray-200">
    <h2 class="w-full text-center text-gray-600 text-lg font-bold">Element Configuration</h2>
    <div v-if="activeComponent.length > 0" class="flex flex-col">
      <keep-alive>
        <component v-for="(component, i) in activeComponent"
          :key="i"
          :is="component.name"
          :configName="component.configName">
        </component>
      </keep-alive>
    </div>
    <div class="mt-4 py-8 bg-gray-100 text-center text-gray-400 italic" v-else>Select an element first</div>
  </div>
</template>

<script>
import { computed, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    // Content element components
    "font-colour": defineAsyncComponent(() => import('./Content/FontColour.vue')),
    "text-align": defineAsyncComponent(() => import('./Content/TextAlign.vue')),
    "heading-level": defineAsyncComponent(() => import('./Content/HeadingLevel.vue')),

    // special for image element
    "image-source": defineAsyncComponent(() => import('./Content/ImageSource.vue')),

    // Container element components
    "layout-mode": defineAsyncComponent(() => import('./Container/LayoutMode.vue')),

    // Generic configuration
    "border": defineAsyncComponent(() => import('./Border.vue')),
  },

  setup() {
    const store = useStore()
    const elementConfigs = {
      heading: [
        { name: "heading-level", configName: "headingLevel" },
        { name: "font-colour", configName: "fontColour" },
        { name: "text-align", configName: "textAlign" },
      ],
      paragraph: [
        { name: "font-colour", configName: "fontColour" },
        { name: "text-align", configName: "textAlign" },
      ],
      image: [
        { name: "image-source", configName: "source" },
        { name: "border", configName: ["borderWeight", "borderType"]},
        // { name: "border-radius", configName: "borderRadius" },
        // { name: "circle", configName: "circle" },
      ],
      division: [
        { name: "layout-mode", configName: "layoutMode"},
      ],
    }
    const activeComponent = computed(() => {
      if(store.getters.selectedElement)
        return elementConfigs[store.getters.selectedElement]
      
      return []
    })

    return {
      activeComponent
    }
  }
}
</script>