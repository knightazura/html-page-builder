<template>
  <div class="my-4">
    <h3 class="el-config--title">Source</h3>
    <input type="text" v-model="src">
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
    const src = ref(store.getters.contentConfiguration[props.configName])

    watch(src, function (level) {
      store.commit("setContentElement", {
        config: props.configName,
        value: level
      })
    })

    return {
      src
    }
  }
}
</script>