<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <div class="logo">
        <img src="@/assets/svg/Logo.svg" alt="" />
      </div>
      <nav class="menu">
        <router-link class="menu_item" :to="{ name: 'Dashboard' }">
          <img src="@/assets/svg/clock.svg" alt="" class="menu_item-icon" />
          <span class="menu_item-text">Dashboard</span>
        </router-link>
        <router-link class="menu_item" :to="{ name: 'Products' }">
          <img src="@/assets/svg/box.svg" alt="" class="menu_item-icon" />
          <span class="menu_item-text">Products</span>
        </router-link>
        <router-link class="menu_item" :to="{ name: 'Stores' }">
          <img src="@/assets/svg/store.svg" alt="" class="menu_item-icon" />
          <span class="menu_item-text">Stores</span>
        </router-link>
        <router-link class="menu_item" :to="{ name: 'Settings' }">
          <img src="@/assets/svg/setting.svg" alt="" class="menu_item-icon" />
          <span class="menu_item-text">Settings</span>
        </router-link>
      </nav>
    </div>
    <div class="sidebar-bottom">
      <router-link :to="{ name: 'Call' }">
        <img src="@/assets/svg/headset.svg" alt="" />
      </router-link>
      <router-link :to="{ name: 'Chat' }">
        <img src="@/assets/svg/chat.svg" alt="" />
      </router-link>
      <router-link :to="{ name: 'App' }">
        <img src="@/assets/svg/gribblock.svg" alt="" />
      </router-link>
    </div>
  </div>
</template> 

<script>
export default {};
</script>   

<style lang="scss" scoped>
@import "@/styles/scss/index.scss";
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  height: 100vh;
  background: $product-background;
  border-right: 1px solid #e2e2e2;
  &-top {
    width: 100%;
    .logo {
      width: 100%;
      padding-top: 13px;
      padding-left: 15px;
      margin-bottom: 42px;
    }
    .menu {
      display: block;
      width: 100%;
      &_item {
        position: relative;
        display: flex;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        text-decoration: none;
        transition: all 0.1s ease-in;
        &-icon {
          margin-right: 12px;
        }
        &-text {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #4f4f4f;
        }
        &:hover {
          background: #ebf1ff;
          img {
            filter: invert(58%) sepia(38%) saturate(4383%) hue-rotate(200deg)
              brightness(92%) contrast(95%);
          }
          & > .menu_item-text {
            color: $main-color;
          }
          &::after {
            position: absolute;
            content: "";
            background: $main-color;
            width: 4px;
            height: 40px;
            border-radius: 0 6px 6px 0;
            left: 0;
            top: 0;
            transition: all 0.1s ease-in;
          }
        }
        &.router-link-exact-active {
          background: #ebf1ff;
          img {
            filter: invert(58%) sepia(38%) saturate(4383%) hue-rotate(200deg)
              brightness(92%) contrast(95%);
          }
          &::after {
            content: "";
            background: $main-color;
            position: absolute;
            width: 4px;
            height: 40px;
            border-radius: 0 6px 6px 0;
            left: 0;
            top: 0;
          }
          .menu_item-text {
            color: $main-color;
          }
        }
      }
    }
  }
  &-bottom {
    display: flex;
    width: 200px;
    align-self: center;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid #f3f3f3;
  }
}
</style>