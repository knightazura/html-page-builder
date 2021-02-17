<template>
  <div class="my-4">
    <h3 class="el-config--title">Level</h3>
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
  props: {
    configName: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const store = useStore();
    const selectedLevel = ref(store.getters.contentConfiguration[props.configName])

    let levels = []
    for (let x = 1; x <= 6; x++) {
      levels.push({ name: `H${x}`, value: `h${x}` })
    }

    watch(selectedLevel, function (level) {
      store.commit("setContentElement", {
        config: props.configName,
        value: level
      })
    })

    return {
      selectedLevel,
      levels
    }
  }
}
</script>