<template>
  <div class="preview-wrapper"></div>
  <h1>Hey hey hey</h1>
  <button @click="back">Back</button>
</template>

<script>
export default {
  mounted() {
    let previewWrapper = document.querySelector(".preview-wrapper")

    console.log(this.$store.getters.pageBuilt)
    previewWrapper.appendChild(this.$store.getters.pageBuilt);
  },

  methods: {
    back() {
      let previewWrapper = document.querySelector(".preview-wrapper")
      previewWrapper.innerHTML = null

      this.$router.push('/')
    }
  }
}
</script>