<template>
  <div class="mb-4">
    <h3 class="el-config--title">Text Align</h3>
    <select class="w-full bg-white px-4 py-2 border border-gray-500 rounded" v-model="selectedAlign">
      <option v-for="align in aligns"
        :key="align.name"
        :value="align.value">{{ align.name }}</option>
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
    const selectedAlign = ref(store.getters.contentConfiguration[props.configName])
    const aligns = [
      { name: 'Left', value: 'text-left'},
      { name: 'Center', value: 'text-center'},
      { name: 'Right', value: 'text-right'},
      { name: 'Justify', value: 'text-justify'},
    ];

    watch(selectedAlign, function (textAlign) {
       store.commit("setContentElement", {
        config: props.configName,
        value: textAlign
      })
    })

    return {
      selectedAlign,
      aligns
    }
  }
}
</script>