<template>
  <div id="app" class="vue-layout-default">
    <div class="home">
      <sidebar></sidebar>
      <div class="body">
        <submenu></submenu>
        <router-view class="content"></router-view>
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
  display: flex;
  width: 100%;
  height: 100%;
  .body {
    width: calc(100% - 230px);
    .content {
      padding-left: 55px;
      padding-right: 55px;
      padding-top: 30px;
    }
  }
}
</style>
