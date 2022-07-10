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
          <select name="" id="status">
            <option value="">Status</option>
          </select>
          <img src="@/assets/svg/arrow-down-filled.svg" alt="" />
        </div>
        <div class="filters_item">
          <select name="" id="">
            <option value="">Quantity</option>
          </select>
          <img src="@/assets/svg/arrow-down-filled.svg" alt="" />
        </div>
        <div class="filters_item">
          <select name="" id="">
            <option value="">Shipping</option>
          </select>
          <img src="@/assets/svg/arrow-down-filled.svg" alt="" />
        </div>
        <div class="filters_item">
          <select name="" id="">
            <option value="">Profile</option>
          </select>
          <img src="@/assets/svg/arrow-down-filled.svg" alt="" />
        </div>
        <div class="filters_item">
          <select name="" id="">
            <option value="">Ready to push</option>
          </select>
          <img src="@/assets/svg/arrow-down-filled.svg" alt="" />
        </div>
      </div>
      <div class="sort">
        <img src="@/assets/svg/sort.svg" alt="">
        <select name="" id="">
          <option value="">Sort</option>
        </select>
      </div>
    </div>
    <products-table></products-table>
  </div>
</template>

<script>
import ProductsTable from "@/components/products-table.vue";
export default {
  name: "Products",
  components: { ProductsTable },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/index.scss";

.products {
  width: 100%;
  background: $product-background;
  &_head {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 25px;

    &-title {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: $dark-text;
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

  &_actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 26px;
    .searchbar {
      display: flex;
      align-items: center;
      width: 36%;
      border: 1px solid $table-border;
      border-radius: 4px;
      overflow: hidden;
      background: #fff;

      &_icon {
        margin: 9px 12px;
      }
      input {
        width: 100%;
        padding-top: 12px;
        padding-bottom: 12px;
        outline: none;
        border: none;
      }
    }
    .filters {
      display: flex;
      border-radius: 4px;
      border: 1px solid $table-border;
      overflow: hidden;
      background: #fff;
      &_item {
        position: relative;
        border-right: 1px solid $table-border;
        &:last-child {
          border: none;
        }
        select {
          outline: none;
          border: none;
          appearance: none;
          padding: 12px 27px 12px 14px;
          background: transparent;
          cursor: pointer;
          z-index: 2;
          &:last-child {
            padding-right: 24px;
          }
        }
        img {
          position: absolute;
          right: 11px;
          top: 52%;
          transform: translateY(-50%);
          z-index: 0;
        }
      }
    }
    .sort {
      position: relative;
      border: 1px solid $table-border;
      border-radius: 4px;
      background: #fff;
      z-index: 2;
      overflow: hidden;
      img {
        position: absolute;
        top: 50%;
        left: 14px;
        transform: translateY(-50%);
        z-index: 0;
      }
      select {
        appearance: none;
        border: none;
        outline: none;
        padding: 12px 15px 12px 31px;
        cursor: pointer;
      }
    }
  }
}
</style>