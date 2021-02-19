<template>
  <div class="my-4">
    <h3 class="el-config--title">Layout Mode</h3>
    <div class="grid xl:grid-cols-2 gap-4 mt-4">
      <div v-for="(layout, i) in layouts"
        :key="i"
        :class="[
          'layout-mode',
          layout.active ? 'layout-mode--active' : ''
        ]"
        @click="selectMode(i)">
        <component :is="layout.name"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';

import OneOneOne from './layout-icons/OneOneOne.vue'
import OneTwo from './layout-icons/OneTwo.vue'
import TwoOne from './layout-icons/TwoOne.vue'
import FullThree from './layout-icons/FullThree.vue'


export default {
  components: {
    "one-one-one": OneOneOne,
    "one-two": OneTwo,
    "two-one": TwoOne,
    "full-three": FullThree
  },

  props: {
    configName: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const store = useStore();
    let layouts = reactive([
      { name: "one-one-one", value: '1-1-1', active: true},
      { name: "one-two", value: '1-2', active: false},
      { name: "two-one", value: '2-1', active: false},
      { name: "full-three", value: '3', active: false},
    ]);

    // Methods
    const selectMode = index => {
      layouts
        .forEach((layout, x) => {
          if (index === x) {
            layout.active = true
            store.commit("setContainerElement", {
              config: props.configName,
              value: layouts[index].value
            })
          } else {
            layout.active = false
          }
        })
    }

    return {
      selectedMode: computed(() => store.getters.containerConfiguration[props.configName]),
      selectMode,
      layouts
    }
  }
}
</script>