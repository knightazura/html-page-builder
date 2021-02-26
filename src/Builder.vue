<template>
  <header class="w-full py-4 text-center border border-b border-gray-200">
    <h1 class="font-bold text-2xl" title="HTML Page Builder - Muhammad Izzuddin Al Fikri">HTML Page Builder</h1>
  </header>
  <div class="main-layout">
    <aside class="border-r border-gray-200">
      <!-- Elements list -->
      <div class="elements-list px-4 pt-4 pb-2">
        <h2 class="text-gray-600 text-lg font-bold">Element list</h2>
        <component v-for="(el, i) in listElement" :key="i" :is="el"></component>
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
import { defineAsyncComponent } from 'vue'

import build from '@/utilities/page-builder'

import ElementConfigurator from './components/element-configurator/ElementConfigurator.vue'
import DropZone from './components/DropZone.vue'

export default {
  name: 'App',
  components: {
    ElementConfigurator,
    DropZone,
    "heading": defineAsyncComponent(() => import('./components/content/Heading.vue')),
    "paragraph": defineAsyncComponent(() => import('./components/content/Paragraph.vue')),
    "image": defineAsyncComponent(() => import('./components/content/Image.vue')),
    "division": defineAsyncComponent(() => import('./components/container/Division.vue')),
  },

  data() {
    return {
      listElement: [
        "heading",
        "paragraph",
        "image",
        "division",
      ]
    }
  },

  mounted() {
    let pm = this.$store.getters.pageModified
    if (pm) {
      const mdz = document.getElementById("main-drop-zone")
      mdz.appendChild(pm)
    }
  },

  methods: {
    preview() {
      // Built page
      build(this.$store)
      // Navigate to preview page
      this.$router.push('/preview')
    }
  }
}
</script>

<style>
.main-layout {
  @apply grid gap-x-2;
  grid-template-columns: 25% 1fr;
}
</style>