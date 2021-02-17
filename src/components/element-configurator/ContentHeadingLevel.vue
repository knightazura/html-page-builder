<template>
  <div class="mb-4">
    <h4 class="font-bold">Level</h4>
    <select class="w-full bg-white px-4 py-2 border border-gray-500 rounded" v-model="selectedLevel">
      <option v-for="level in levels"
        :key="level.name"
        :value="level.value">{{ level.name }}</option>
    </select>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const selectedLevel = ref("h1")

    let levels = []
    for (let x = 1; x <= 6; x++) {
      levels.push({ name: `H${x}`, value: `h${x}` })
    }

    watch(selectedLevel, function (level) {
      store.commit("setHeadingLevel", level)
    })

    return {
      selectedLevel,
      levels
    }
  }
}
</script>