<template>
  <div id="app" class="vue-layout-auth">
    <div class="auth">
      <router-link :to="{ name: 'Home' }" class="logo">
        <img src="../assets/svg/Logo.svg" alt="Logo" />
      </router-link>
      <div class="body">
        <router-view></router-view>
      </div>
      <div class="artwork">
        <img class="artwork_image" src="../assets/svg/art_work.svg" alt="" />
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
.auth {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background: #f6f8ff;
  .logo {
    position: absolute;
    top: 30px;
    left: 30px;
  }
  .body {
    margin-left: 18%;
  }
  .artwork {
    width: 34%;
    min-height: 100vh;
    display: flex;
    align-items: center;

    background: linear-gradient(
        181.62deg,
        rgba(255, 255, 255, 0.56) 12.9%,
        rgba(255, 255, 255, 0.2) 108.61%
      ),
      #ccdcff;
    box-shadow: 0px 12px 20px #ebf1ff;
    &_image {
      margin-left: -40%;
    }
  }
}
</style>
