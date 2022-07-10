<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="register">
    <h1 class="header">Register Account</h1>
    <form>
      <div class="fullname">
        <img src="@/assets/svg/user.svg" alt="" class="email_icon" />
        <input
          v-model="fullName"
          type="text"
          id="fullName"
          placeholder="Full Name"
        />
      </div>
      <div class="email">
        <img src="@/assets/svg/email.svg" alt="" class="email_icon" />
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="Your email"
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
      <button @click.prevent="register">Create Free Account</button>
      <span class="term">
        By providing your email, you are agreeing to our
        <a href="#">terms of service.</a>
      </span>
    </form>

    <div class="seperator">
      <span>Or register with</span>
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
      <span class="footer_text">Already have an account?</span>
      <router-link :to="{ name: 'Login' }">Login Now</router-link>
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
      fullName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    togglePassword() {
      this.isShow = !this.isShow;
    },
    async register() {
      await axios
        .post("https://sohead-api-dev.socialhead.dev/api/app/sign-up", {
          email: this.email,
          password: this.password,
          timezone: new Date(),
          name: this.fullName,
        })
        .then((data) => {
          if (data.status === 200) {
            alert(
              "Congratulations, your account has been successfully created. Go to Login now!"
            );
            router.push({ name: "Login" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/index.scss";

.register {
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
    margin-bottom: 20px;
  }
  form {
    width: 350px;
    margin-bottom: 24px;
    .email,
    .fullname,
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
    .email,
    .fullname {
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
    .term {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #4f4f4f;
      text-align: justify;

      a {
        text-decoration: none;
        color: $main-color;
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
        width: 108%;
        background-color: #ebebf0;
        left: 102%;
        top: 50%;
        z-index: 0;
      }
      &::before {
        content: "";
        position: absolute;
        height: 1px;
        width: 108%;
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
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      width: 168px;
      border: 1px solid #ebebf0;
      background: #fff;
      border-radius: $border-radius;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
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