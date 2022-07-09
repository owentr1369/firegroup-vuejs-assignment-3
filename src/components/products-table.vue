<template>
  <div class="products-table">
    <table>
      <thead>
        <tr>
          <th class="th-checkbox">
            <span>
              <input type="checkbox" />
            </span>
          </th>
          <th class="th-product">Product</th>
          <th class="th-shopify">
            <div>
              <img src="@/assets/svg/shopify.svg" alt="" />
              <span>Status</span>
            </div>
          </th>
          <th class="th-quantity">Quantity</th>
          <th class="th-options">Options</th>
          <th class="th-profile">Profile</th>
          <th class="th-shipping">Shipping</th>
          <th class="th-actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="td-checkbox">
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
          <td class="td-shopify">
            <div>
              <img src="@/assets/svg/green-dot.svg" alt="" />
              <span>Active</span>
            </div>
          </td>
          <td class="td-quantity">
            <span
              ><strong>2816</strong> in stock for
              <strong>3</strong> variants</span
            >
          </td>
          <td class="td-options">2</td>
          <td class="td-profile">
            <div>
              <select name="" id="">
                <option value="">Global selling</option>
              </select>
              <img src="@/assets/svg/arrow-down-filled.svg" alt="" />
            </div>
          </td>
          <td class="td-shipping">
            <div>
              <select name="" id="">
                <option value="">Shipping 1</option>
              </select>
              <img src="@/assets/svg/arrow-down-filled.svg" alt="" />
            </div>
          </td>
          <td class="td-actions">
            <div>
              <button>Push to Etsy</button>
              <button class="more">
                <img src="@/assets/svg/3-dots.svg" alt="" />
              </button>
            </div>
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
    border-collapse: collapse;
    width: 100%;
    thead {
      tr {
        border-bottom: 1px solid #e5e8ef;
        th {
          text-align: left;
          padding-top: 32px;
          padding-bottom: 28px;
          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
          color: #828282;

          &.th-checkbox {
            padding-left: 25px;
            input[type="checkbox"] {
              appearance: none;
              position: relative;
              margin-right: 10px;
              width: 16px;
              height: 16px;
              &::before {
                content: "";
                position: absolute;
                width: 16px;
                height: 19px;
                outline: 1px solid #828282;
                border-radius: $border-radius;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #fff;
              }

              &:checked {
                &::before {
                  outline: none;
                  background: $main-color;
                }
                &:after {
                  content: "";
                  position: absolute;
                  width: 4px;
                  height: 8px;
                  border-right: 3px solid #fff;
                  border-bottom: 3px solid #fff;
                  top: 8%;
                  left: 29%;
                  transform: rotate(45deg);
                }
              }
            }
          }
          &.th-product {
            width: 24%;
          }
          &.th-shopify {
            width: 64px;
            padding-right: 25px;
            div {
              display: flex;
              align-items: center;
              img {
                margin-right: 6px;
              }
            }
          }
          // &.th-quantity {
          // }
          &.th-options {
            width: fit-content;
            padding-right: 22px;
          }
          &.th-profile {
            width: 112px;
          }
          &.th-shipping {
            width: 100px;
          }
          &.th-actions {
            width: auto;
          }
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #e5e8ef;
        td {
          padding-top: 20px;
          padding-bottom: 20px;
          input[type="checkbox"] {
            appearance: none;
            position: relative;
            margin-right: 10px;
            width: 16px;
            height: 16px;
            &::before {
              content: "";
              position: absolute;
              width: 16px;
              height: 16px;
              outline: 1px solid #828282;
              border-radius: $border-radius;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: #fff;
            }

            &:checked {
              &::before {
                outline: none;
                background: $main-color;
              }
              &:after {
                content: "";
                position: absolute;
                width: 4px;
                height: 8px;
                border-right: 3px solid #fff;
                border-bottom: 3px solid #fff;
                top: 8%;
                left: 29%;
                transform: rotate(45deg);
              }
            }
          }
          &.td-checkbox {
            padding-left: 25px;
          }
          &.td-product {
            display: flex;
            align-items: center;
            padding-right: 9px;
            img {
              width: 40px;
              margin-right: 10px;
            }
            h3 {
              font-weight: 400;
              font-size: 14px;
              line-height: 18px;
              color: #252627;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            p {
              font-weight: 400;
              font-size: 12px;
              line-height: 15px;
              color: #828282;
            }
          }
          &.td-shopify {
            div {
              display: flex;
              align-items: center;
              img {
                margin-right: 5px;
              }
              span {
                color: #36b26f;
                font-weight: 400;
                font-size: 14px;
                line-height: 18px;
              }
            }
          }
          &.td-quantity {
            padding-right: 29px;
            span {
              font-weight: 400;
              font-size: 14px;
              line-height: 18px;
              color: #828282;

              strong {
                color: #252627;
                font-weight: 400;
              }
            }
          }
          &.td-options {
            color: #828282;
          }
          &.td-profile {
            padding-right: 13px;

            div {
              position: relative;
              select {
                outline: none;
                border: 1px solid #e5e8ef;
                border-radius: 4px;
                appearance: none;
                padding-top: 8px;
                padding-bottom: 7px;
                padding-left: 9px;
                padding-right: 25px;
                background: transparent;
                z-index: 2;
                cursor: pointer;
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
          &.td-shipping {
            padding-right: 10px;
            div {
              position: relative;
              select {
                outline: none;
                border: 1px solid #e5e8ef;
                border-radius: 4px;
                appearance: none;
                padding-top: 8px;
                padding-bottom: 7px;
                padding-left: 9px;
                padding-right: 23px;
                background: transparent;
                z-index: 2;
                cursor: pointer;
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
          &.td-actions {
            padding-right: 24px;
            div {
              display: flex;
              justify-content: space-between;
              button {
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                padding: 8px;
                color: $main-color;
                border: 1px solid $main-color;
                border-radius: 4px;
                cursor: pointer;
                background: #fff;
                &.more {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-color: #e5e8ef;
                  padding: 8px 14px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>