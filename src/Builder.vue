<template>
  <div class="flex gap-x-2">
    <aside class="w-1/4 border-r border-gray-400">
      <!-- Elements list -->
      <div class="elements-list px-4">
        <h3 class="text-lg font-bold">Element</h3>
        <Heading />
        <Container />
      </div>

      <!-- Element's configurator -->
      <ElementConfigurator />

      <!-- Preview -->
      <div class="px-4">
        <button class="w-full py-2 rounded bg-blue-600 text-white" @click="preview">Preview</button>
      </div>
    </aside>
    <DropZone />
  </div>
</template>

<script>
// Element components
import Heading from './components/Heading.vue'
import Container from './components/Container.vue'

import ElementConfigurator from './components/element-configurator/ElementConfigurator.vue'
import DropZone from './components/DropZone.vue'

export default {
  name: 'App',
  components: {
    Heading,
    Container,
    ElementConfigurator,
    DropZone
  },

  mounted() {
    // Build HTML document for real page
    this.$store.commit("initialBuildRealPage");
  },

  methods: {
    preview() {
      this.$router.push('/preview')
    }
  }
}
</script>