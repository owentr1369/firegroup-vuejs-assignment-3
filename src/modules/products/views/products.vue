<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="products">
    <div class="products_head">
      <h1 class="products_head-title">Products</h1>
      <button class="products_head-btn">
        <img src="@/assets/svg/plus.svg" alt="" />
        <span>Add new product</span>
      </button>
    </div>  
    <div class="products_actions">
      <div class="searchbar">
        <img src="@/assets/svg/search.svg" class="searchbar_icon"></img>
        <input type="text" placeholder="Search product">
      </div>
      <div class="filters">
        <div class="filters_item">
          <span>Status</span>
          <img src="@/assets/svg/arrow-down-filled.svg" alt="">
        </div>
        <div class="filters_item">
          <span>Quantity</span>
          <img src="@/assets/svg/arrow-down-filled.svg" alt="">
        </div>
        <div class="filters_item">
          <span>Shipping</span>
          <img src="@/assets/svg/arrow-down-filled.svg" alt="">
        </div>
        <div class="filters_item">
          <span>Profile</span>
          <img src="@/assets/svg/arrow-down-filled.svg" alt="">
        </div>
        <div class="filters_item">
          <span>Ready to push</span>
          <img src="@/assets/svg/arrow-down-filled.svg" alt="">
        </div>
      </div>
      <div class="sort">
        <img src="@/assets/svg/sort.svg" alt="">
        <span>Sort</span>
      </div>
    </div>
    <products-table></products-table>
  </div>
</template>

<script>
import ProductsTable from "@/components/products-table.vue";
export default {
  // name: "Products",
  components: { ProductsTable },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/index.scss";

.products {
  width: 100%;
  &_head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    &-title {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #252627;
    }
    &-btn {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      background: $main-color;
      padding: 14.5px 12px;
      border: none;
      border-radius: 4px;
      img {
        margin-right: 8px;
      }
    }
  }
}
</style>