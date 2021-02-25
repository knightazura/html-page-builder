<template>
  <span v-if="!loaded">Loading...</span>
  <img @load="onLoad" :class="classes" :src="config.source ?? `https://via.placeholder.com/${width}x75`">
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
    const classes = [
      config.value.borderRadius,
      config.value.boxShadow
    ].join(' ')
    const width = ref(1)

    // Methods
    const onLoad = () => loaded.value = true

    return {
      loaded,
      config,
      classes,
      width,
      onLoad
    }
  },
  mounted() {
    this.width = this.$el.parentNode.offsetWidth
  }
}
</script>