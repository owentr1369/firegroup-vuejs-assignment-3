<template>
  <div class="submenu">
    <button class="submenu_button">
      <img src="@/assets/svg/burger-menu.svg" alt="" />
    </button>
    <div class="submenu_main">
      <div class="shopify">
        <img class="shopify_image" src="@/assets/svg/shopify-with-circle.svg" />
        <span class="shopify_name">Lotusprayer</span>
        <img src="@/assets/svg/arrow-down.svg" alt="" class="shopify_arrow" />
      </div>
      <div class="user">
        <img src="@/assets/svg/avatar.svg" alt="" class="user_avatar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Submenu",
};
</script>

<style lang="scss" scoped>
.submenu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;

  &_button {
    background: transparent;
    border: none;
    padding-left: 20px;
  }
  &_main {
    display: flex;
    .shopify {
      padding-left: 15px;
      border-left: 1px solid #f3f3f3;
      border-right: 1px solid #f3f3f3;
      padding-right: 18px;
      display: flex;
      align-items: center;
      &_image {
        margin-right: 9px;
        width: 36px;
        height: 36px;
      }
      &_name {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #252627;
        margin-right: 4px;
      }
    }
    .user {
      margin: 9px 17px 9px 15px;
      display: flex;
      align-items: center;
      &_avatar {
        width: 32px;
        height: 32px;
      }
    }
  }
}
</style>