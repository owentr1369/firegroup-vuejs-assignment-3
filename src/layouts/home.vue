<template>
  <div id="app" class="vue-layout-default">
    <div class="home">
      <sidebar></sidebar>
      <div class="body">
        <submenu></submenu>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from "@/components/sidebar.vue";
import submenu from "@/components/submenu.vue";
export default {
  name: "Home",
  components: { sidebar, submenu },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  .body {
    width: calc(100% - 230px);
  }
}
</style>
