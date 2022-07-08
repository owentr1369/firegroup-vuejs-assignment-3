<template>
  <div id="app" class="vue-layout-default">
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>
<script>
import sidebar from "@/components/sidebar.vue";
export default {
  name: "Home",
  components: { sidebar },
};
</script>

<style lang="scss">
</style>
