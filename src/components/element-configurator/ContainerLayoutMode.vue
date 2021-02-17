<template>
  <div class="mb-4">
    <h4 class="font-bold">Layout Mode</h4>
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
    {{ selectedMode }}
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
import { useStore } from 'vuex';

import OneOneOne from './Container/OneOneOne.vue'
import OneTwo from './Container/OneTwo.vue'
import TwoOne from './Container/TwoOne.vue'
import FullThree from './Container/FullThree.vue'


export default {
  components: {
    "one-one-one": OneOneOne,
    "one-two": OneTwo,
    "two-one": TwoOne,
    "full-three": FullThree
  },

  setup() {
    const store = useStore();
    const selectedMode = ref(store.getters.containerConfiguration.layoutMode)
    let layouts = reactive([
      { name: "one-one-one", value: '1-1-1', active: true},
      { name: "one-two", value: '1-2', active: false},
      { name: "two-one", value: '2-1', active: false},
      { name: "full-three", value: '3', active: false},
    ]);

    watch(selectedMode, function (mode) {
      store.commit("setContainerElement", {
        config: "layoutMode",
        value: mode
      })
    })

    // Methods
    const selectMode = index => {
      layouts
        .forEach((layout, x) => {
          layout.active = (index === x) ? true : false
          selectedMode.value = layouts[index].value
        })
    }

    return {
      selectedMode,
      selectMode,
      layouts
    }
  }
}
</script>