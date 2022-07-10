<template>
  <div class="stores">
    <div class="stores_head">
      <h1 class="stores_head-title">Stores</h1>
      <button class="stores_head-btn">
        <img src="@/assets/svg/plus.svg" alt="" />
        <span>Add new store</span>
      </button>
    </div>
    <stores-table></stores-table>
  </div>
</template>

<script>
import storesTable from "@/components/stores-table.vue";
export default {
  name: "Stores",
  components: {
    storesTable,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/index.scss";

.stores {
  width: 100%;
  background: $product-background;
  min-height: calc(100vh - 51px);
  &_head {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 25px;

    &-title {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #252627;
    }

    &-btn {
      padding: 14.5px 12px;
      border: none;
      border-radius: 4px;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      background: $main-color;
      cursor: pointer;
      img {
        margin-right: 8px;
      }
    }
  }
}
</style>