<template>
  <div
    id="main-drop-zone"
    class="drop-zone flex-grow bg-white min-h-screen"
    @dragover="dragOver"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    @drop="onDrop"></div>
</template>

<script>
import Sortable from 'sortablejs/modular/sortable.core.esm.js'
import DND from '@/utilities/drag-and-drop'

export default {
  setup() {
    // DND listeners
    const {
      dragOver,
      dragEnter,
      dragLeave,
      drop
    } = DND

    return {
      dragOver,
      dragEnter,
      dragLeave,
      drop
    }
  },
  mounted() {
    // Sortable
    Sortable.create(document.getElementById("main-drop-zone"), {
      animation: 150,
      onEnd: function (evt) {
        evt.item.setAttribute("draggable", "true");
      },
    })
  },

  computed: {
    dragged() {
      return this.$store.getters.dragged
    }
  },

  methods: {
    onDrop(event) {
      this.drop(event, {
        store: this.$store,
        dragged: this.dragged
      })
    },
  }
}
</script>