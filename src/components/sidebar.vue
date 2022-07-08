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
      <img src="@/assets/svg/headset.svg" alt="" />
      <img src="@/assets/svg/chat.svg" alt="" />
      <img src="@/assets/svg/gribblock.svg" alt="" />
    </div>
  </div>
</template> 

<script>
export default {};
</script>   

<style lang="scss" scoped>
@import "@/styles/scss/index.scss";
.sidebar {
  width: 230px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>