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
        <button class="logout" @click="logout">
          <span>Log out</span>
          <img src="@/assets/svg/logout.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Submenu",
  methods: {
    logout() {
      document.cookie =
        "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      this.$router.go({ name: "Login" });
    },
  },
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
      position: relative;
      &_avatar {
        width: 32px;
        height: 32px;
      }
      .logout {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100px;
        height: 46px;
        top: 30px;
        left: -55px;
        background: #fff;
        border: 1px solid #ebebf0;
        box-shadow: 0px 8px 12px rgba(61, 90, 153, 0.15);
        border-radius: 6px;
        display: none;
        cursor: pointer;
        span {
          text-decoration: underline;
        }
        img {
          margin-left: 8px;
          width: 14px;
          height: 14px;
          object-fit: cover;
        }
      }
      &:hover .logout {
        display: block;
      }
    }
  }
}
</style>