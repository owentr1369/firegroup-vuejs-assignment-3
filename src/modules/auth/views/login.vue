<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <h1 class="header">Hi, Welcome Back!</h1>
    <form>
      <div class="email">
        <img src="@/assets/svg/email.svg" alt="" class="email_icon" />
        <input
          type="email"
          id="email"
          placeholder="Your email"
          v-model="email"
        />
      </div>
      <div class="password">
        <img src="@/assets/svg/password.svg" alt="" class="password_icon" />
        <input
          :type="isShow ? 'text' : 'password'"
          name=""
          id="password"
          placeholder="Password"
          v-model="password"
        />
        <button @click.prevent="togglePassword">
          <span v-if="!isShow">SHOW</span>
          <span v-else>HIDE</span>
        </button>
      </div>
      <div class="options">
        <div class="options_remember">
          <input type="checkbox" name="" id="remember" v-model="rememberMe" />
          <label for="remember">Remember Me</label>
        </div>
        <div class="options_forgot">
          <router-link :to="{ name: 'Forgot Password' }"
            >Forgot password?</router-link
          >
        </div>
      </div>
      <button @click.prevent="login">Login</button>
    </form>
    <div class="seperator">
      <span>Or login with</span>
    </div>
    <div class="other-methods">
      <button class="google">
        <img src="@/assets/svg/google.svg" alt="" />
        <span>Google Account</span>
      </button>
      <button class="facebook">
        <img src="@/assets/svg/facebook.svg" alt="" />
        <span>Facebook Account</span>
      </button>
    </div>
    <div class="footer">
      <span class="footer_text">Don't have an account?</span>
      <router-link :to="{ name: 'Register' }"
        >Create a Free Account
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  data() {
    return {
      isShow: false,
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    togglePassword() {
      this.isShow = !this.isShow;
    },
    async login() {
      const { data } = await axios
        .post("https://sohead-api-dev.socialhead.dev/api/app/sign-in", {
          email: this.email,
          password: this.password,
          timezone: new Date(),
        })
        .then(({ data }) => data)
        .catch((err) => {
          if (err.response.status === 422) {
            return alert("Email address or password incorrect!");
          }
        });

      let now = new Date();
      now.setDate(now.getDate() + 1);
      // Expired after 24h
      document.cookie = `userToken=${
        data.token
      }; expires= ${now.toUTCString()}`;

      router.push("/products");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/index.scss";
.login {
  width: fit-content;
  background: transparent;

  .header {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 55px;
    text-align: center;
    color: $main-color;
  }
  form {
    width: 350px;
    .email,
    .password {
      border: 1px solid $form-border;
      padding-left: 13px;
      display: flex;
      align-items: center;
      border-radius: $border-radius;
      background: #fff;
      input {
        border: none;
        outline: none;
        color: #828282;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-left: 10px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
      }
    }
    .email {
      margin-bottom: 10px;
    }
    .password {
      margin-bottom: 12px;
      button {
        width: fit-content;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        background: transparent;
        border: none;
        margin: 0;
        margin-right: 12px;
        color: #4f4f4f;
        cursor: pointer;
      }
    }
    .options {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      &_remember {
        display: flex;
        align-items: center;
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
            outline: 1px solid #cecece;
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
        label {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          color: #252627;
        }
      }
      &_forgot {
        a {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          text-decoration: none;
          color: $main-color;
        }
      }
    }
    button {
      width: 100%;
      padding-top: 8px;
      padding-bottom: 8px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      border: none;
      background: $main-color;
      color: #fff;
      margin-bottom: 23px;
      cursor: pointer;
    }
  }
  .seperator {
    margin-bottom: 16px;
    text-align: center;

    span {
      position: relative;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #4f4f4f;
      width: fit-content;
      z-index: 1;
      &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 148%;
        background-color: #ebebf0;
        left: 102%;
        top: 50%;
        z-index: 0;
      }
      &::before {
        content: "";
        position: absolute;
        height: 1px;
        width: 148%;
        background-color: #ebebf0;
        right: 102%;
        top: 50%;
        z-index: 0;
      }
    }
  }
  .other-methods {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    button {
      padding-top: 11px;
      padding-bottom: 11px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 168px;
      border: 1px solid #ebebf0;
      background: #fff;
      border-radius: $border-radius;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      cursor: pointer;
    }
    .google {
      img {
        margin-right: 6px;
      }
    }
    .facebook {
      img {
        margin-right: 3px;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    &_text,
    a {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
    &_text {
      color: #4f4f4f;
      margin-right: 6px;
    }
    a {
      color: $main-color;
      text-decoration: none;
    }
  }
}
</style>