<template>
  <div class="products-table">
    <table>
      <thead>
        <tr>
          <th class="th-checkbox">
            <input type="checkbox" />
          </th>
          <th>Product</th>
          <th class="th-shopify">
            <img src="@/assets/svg/shopify.svg" alt="" /> Status
          </th>
          <th>Quantity</th>
          <th>Options</th>
          <th>Profile</th>
          <th>Shipping</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td class="td-product">
            <img src="@/assets/Rectangle 2727.png" alt="" />
            <div class="product-info">
              <h3 class="product-info_name">
                Imwete Anti Blue Light Computer...
              </h3>
              <p class="product-info_id">Shopify ID: 343972834378</p>
            </div>
          </td>
          <td>Active</td>
          <td>2816 in stock for 3 variants</td>
          <td>2</td>
          <td>
            <select name="" id="">
              <option value="">Global selling</option>
            </select>
            <img src="@/assets/svg/arrow-down-filled.svg" alt="" />
          </td>
          <td>
            <select name="" id="">
              <option value="">Shipping 1</option>
            </select>
            <img src="@/assets/svg/arrow-down-filled.svg" alt="" />
          </td>
          <td>
            <button>Push to Etsy</button>
            <button><img src="@/assets/svg/3-dots.svg" alt="" /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/index.scss";

.products-table {
  width: 100%;
  table {
    background: #fff;
    padding-left: 25px;
    padding-right: 25px;
    border-collapse: collapse;
    thead {
      tr {
        border-bottom: 1px solid #e5e8ef;
        th {
          text-align: left;
          padding-top: 31px;
          padding-bottom: 31px;
          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
          color: #828282;
          &.th-checkbox {
            display: flex;
            align-items: center;
            justify-content: center;
            background: yellow;
            width: 16px;
            padding-top: 10px;
            padding-bottom: 10px;
            position: relative;
            margin-right: 10px;
            margin-left: 25px;
            input[type="checkbox"] {
              appearance: none;
              &::before {
                content: "";
                position: absolute;
                width: 16px;
                height: 19px;
                background: blue;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
              }
              &:checked::before {
                background: red;
              }
            }
          }
          &.th-shopify {
            display: flex;
            align-items: center;
          }
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #e5e8ef;
      }
    }
  }
}
</style>