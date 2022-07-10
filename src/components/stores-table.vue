<template>
  <div class="stores-table">
    <table>
      <thead>
        <tr>
          <th class="th-name">Store name</th>
          <th class="th-status">Status</th>
          <th class="th-products">Products</th>
          <th class="th-actions"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="td-name">
            <div>
              <img src="@/assets/png/store-1.png" />
              <div class="info">
                <h2>Baobashop</h2>
                <p>phuongnnguyen@gmail.com</p>
              </div>
            </div>
          </td>
          <td class="td-status">
            <span>Live</span>
          </td>
          <td class="td-products">560</td>
          <td class="td-actions">
            <div>
              <button class="more">
                <img src="@/assets/svg/3-dots.svg" alt="" />
              </button>
              <button>Detail</button>
            </div>
          </td>
        </tr>
        <tr>
          <td class="td-name">
            <div>
              <img src="@/assets/png/store-2.png" />
              <div class="info">
                <h2>Coffee Pet shop</h2>
                <p>phuongnnguyen@gmail.com</p>
              </div>
            </div>
          </td>
          <td class="td-status">
            <span>Live</span>
          </td>
          <td class="td-products">560</td>
          <td class="td-actions">
            <div>
              <button class="more">
                <img src="@/assets/svg/3-dots.svg" alt="" />
              </button>
              <button>Detail</button>
            </div>
          </td>
        </tr>
        <tr>
          <td class="td-name">
            <div>
              <img src="@/assets/png/store-3.png" />
              <div class="info">
                <h2>X-Deal fashion</h2>
                <p>phuongnnguyen@gmail.com</p>
              </div>
            </div>
          </td>
          <td class="td-status">
            <span>Live</span>
          </td>
          <td class="td-products">560</td>
          <td class="td-actions">
            <div>
              <button class="more">
                <img src="@/assets/svg/3-dots.svg" alt="" />
              </button>
              <button>Detail</button>
            </div>
          </td>
        </tr>
        <tr>
          <td class="td-name">
            <div>
              <img src="@/assets/png/store-4.png" />
              <div class="info">
                <h2>D.Mix Store</h2>
                <p>phuongnnguyen@gmail.com</p>
              </div>
            </div>
          </td>
          <td class="td-status">
            <span class="disconnected">Disconnected</span>
          </td>
          <td class="td-products">560</td>
          <td class="td-actions">
            <div>
              <button class="more">
                <img src="@/assets/svg/3-dots.svg" alt="" />
              </button>
              <button>Detail</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/index.scss";

.stores-table {
  width: 100%;
  table {
    width: 100%;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.03);
    background: #fff;
    border-collapse: collapse;
    border-radius: 3px;
    overflow: hidden;
    border: 1px solid $table-border;
    thead {
      tr {
        border-bottom: 1px solid $table-border;
        th {
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          padding-top: 25px;
          padding-bottom: 25px;
          text-align: left;
          &.th-name {
            padding-left: 25px;
          }
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid $table-border;
        &:hover {
          background: $product-background;
          cursor: pointer;
        }
        td {
          &.td-name {
            padding: 20px 120px 20px 24px;
            div {
              display: flex;
              align-items: center;
              img {
                margin-right: 10px;
              }
              .info {
                display: flex;
                flex-direction: column;
                text-align: left;
                align-items: flex-start;
                h2 {
                  font-weight: 700;
                  font-size: 14px;
                  line-height: 17px;
                  color: #252627;
                }
                p {
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 17px;
                  color: #828282;
                }
              }
            }
          }
          &.td-status {
            padding-right: 110px;
            span {
              padding: 3px 8px;
              background: #c2f2d8;
              border-radius: 4px;
              color: #35b26f;
              font-weight: 400;
              font-size: 12px;
              line-height: 16px;
              &.disconnected {
                color: #f2545d;
                background: #ffe5e6;
              }
            }
          }
          &.td-products {
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            padding-right: 280px;
          }
          &.td-actions {
            div {
              display: flex;
              button {
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid$table-border;
                padding: 8px 21px;
                border-radius: 4px;
                background: #fff;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                color: #252627;
                cursor: pointer;
                &.more {
                  padding: 8px 14px;
                  margin-right: 10px;
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