<template>
  <router-view></router-view>
</template>

<script>
export default {
  mounted() {
    // Build HTML document for real page
    this.$store.commit("initialBuildRealPage");
  }
}
</script>