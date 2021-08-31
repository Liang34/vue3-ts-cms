<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  setup() {
    return {}
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
  background: #000;
}
</style>
