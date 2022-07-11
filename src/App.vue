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
  mounted() {
    // fetchUser from Api
    this.$store.dispatch("fetchUser");
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>