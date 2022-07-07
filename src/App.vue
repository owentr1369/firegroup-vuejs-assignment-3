<template>
  <div id="app">
    <vue-extend-layouts />
  </div>
</template>

<script>
import VueExtendLayouts from "vue-extend-layout";
export default {
  name: "App",
  components: { VueExtendLayouts },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>