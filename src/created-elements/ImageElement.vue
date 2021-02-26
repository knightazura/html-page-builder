<template>
  <span v-if="!loaded">Loading...</span>
  <img v-if="width > 1" @load="onLoad" :class="classes" :src="source" style="z-index: -1">
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const loaded = ref(false)

    // Element configuration
    const config = computed(() => store.getters.imageConfiguration)

    // Methods
    const onLoad = () => loaded.value = true

    return {
      loaded,
      config,
      onLoad
    }
  },
  data() {
    return {
      classes: '',
      source: 'https://via.placeholder.com/1x75',
      width: 1,
    }
  },
  mounted() {
    // Get parent width
    const width = this.$el.parentNode.offsetWidth

    // Set configuration classes
    this.classes = [
      this.config.borderRadius,
      this.config.boxShadow
    ].join(' ')

    // Set source following parent width or user setup
    this.source = this.config.source ?? `https://via.placeholder.com/${width}x75`

    // Set image element width equal with parent
    this.width = width
  }
}
</script>