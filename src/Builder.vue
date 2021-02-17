<template>
  <header class="w-full py-4 text-center border border-b border-gray-200">
    <h1 class="font-bold text-2xl" title="HTML Page Builder - Muhammad Izzuddin Al Fikri">HTML Page Builder</h1>
  </header>
  <div class="flex gap-x-2">
    <aside class="w-1/4 border-r border-gray-200">
      <!-- Elements list -->
      <div class="elements-list px-4 pt-4 pb-2">
        <h2 class="text-gray-600 text-lg font-bold">Element list</h2>
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