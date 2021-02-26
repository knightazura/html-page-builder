<template>
  <er-button></er-button>
  <span v-if="!loaded">Loading...</span>
  <img v-if="width > 1"
    :class="classes"
    :src="source"
    @load="onLoad"
    @dragstart="dragStart"
    @dragend="dragEnd">
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import ERButton from '@/components/ElementRemoverButton.vue'
import ImageElement from '@/utilities/element/content/image'
import DragAndDrop from '@/utilities/drag-and-drop'

export default {
  components: {
    "er-button": ERButton
  },

  setup() {
    const store = useStore()
    const loaded = ref(false)
    const dnd = new DragAndDrop(ImageElement)

    // Element configuration
    const config = computed(() => store.getters.imageConfiguration)

    // Methods
    const onLoad = () => loaded.value = true

    return {
      loaded,
      config,
      onLoad,
      dragStart: evt => dnd.dragStart(evt),
      dragEnd: evt => dnd.dragEnd(evt)
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