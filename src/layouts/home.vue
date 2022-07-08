<template>
  <div id="app" class="vue-layout-default">
    <div class="home">
      <sidebar></sidebar>
      <router-view></router-view>
    </div>
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
.home {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
