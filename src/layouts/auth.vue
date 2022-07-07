<template>
  <div id="app" class="vue-layout-auth">
    <div class="auth">
      <div class="logo">
        <img src="../assets/svg/Logo.svg" alt="Logo" />
      </div>
      <div class="body">
        <router-view></router-view>
      </div>
      <div class="artwork">
        <div class="artwork_image">
          <img src="../assets/svg/art_work.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
};
</script>
<style lang="scss">
.body {
  margin-left: 18%;
}
</style>
