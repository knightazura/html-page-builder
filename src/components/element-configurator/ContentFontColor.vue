<template>
  <div class="mb-4">
    <h3 class="el-config--title">Font color</h3>
    <select class="w-full bg-white px-4 py-2 border border-gray-500 rounded" v-model="selectedColour">
      <option v-for="colour in colours"
        :key="colour.name"
        :value="colour.value">{{ colour.name }}</option>
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
    const selectedColour = ref(store.getters.contentConfiguration[props.configName])
    const colours = [
      { name: 'Black', value: 'text-black'},
      { name: 'White', value: 'text-white'},
      { name: 'Gray', value: 'text-gray-500'},
      { name: 'Red', value: 'text-red-600'},
      { name: 'Blue', value: 'text-blue-600'},
      { name: 'Orange', value: 'text-yellow-600'},
      { name: 'Green', value: 'text-green-600'},
    ];

    watch(selectedColour, function (colour) {
      store.commit("setContentElement", {
        config: props.configName,
        value: colour
      })
    })

    return {
      selectedColour,
      colours
    }
  }
}
</script>