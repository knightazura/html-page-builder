<template>
  <div class="my-4">
    <h3 class="el-config--title">Border</h3>
    <div class="grid grid-cols-2">
      <div class="border-weight">
        <input type="number" v-model="weight">
      </div>
      <div class="border-type">
        <select v-model="type">
          <option v-for="(bt, i) in options.types" :key="i" :value="bt">{{ bt }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    configName: {
      type: Array, // 0 - borderWeight; 1 - borderType
      required: true
    }
  },

  setup(props) {
    const store = useStore();
    const weight = ref(store.getters.contentConfiguration[props.configName[0]])
    const type = ref(store.getters.contentConfiguration[props.configName[1]])
    const options = {
      weights: [
        { name: '1px', value: 'border' },
        { name: '2px', value: 'border-2' },
        { name: '4px', value: 'border-4' },
      ],
      types: [
        { name: 'Solid', value: 'solid' },
        { name: 'Dashed', value: 'dashed' },
        { name: 'Dotted', value: 'dotted' },
        { name: 'Double', value: 'double' },
        { name: 'None', value: 'none' },
      ]
    }

    // Border weight
    watch(weight, function (level) {
      store.commit("setContentElement", {
        config: props.configName[0],
        value: level
      })
    })
    // Border type
    watch(type, function (style) {
      store.commit("setContentElement", {
        config: props.configName[1],
        value: style
      })
    })

    return {
      weight,
      type,
      options
    }
  }
}
</script>