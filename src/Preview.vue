<template>
  <div class="flex flex-col">
    <div class="py-4 border border-b border-gray-200">
      <button class="bg-green-600 text-white px-4 py-2 rounded ml-4" @click="back">Back</button>
    </div>
    <div class="preview-wrapper"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let previewWrapper = document.querySelector(".preview-wrapper")
    previewWrapper.replaceWith(this.$store.getters.pageBuilt);
  },

  methods: {
    back() {
      // Reset dragged element
      this.$store.commit("setDraggedElement", null)
      this.$router.push('/')
    }
  }
}
</script>