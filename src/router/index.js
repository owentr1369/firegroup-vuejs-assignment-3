import Vue from "vue";
import VueRouter from "vue-router";
// import Auth from "@/middlewares/auth";
// import OnBoard from "@/middlewares/onboard";
Vue.use(VueRouter);

const routes = [
  // default
  {
    path: "/",
    name: "Home",
    // meta: {
    //   middleware: [Auth, OnBoard],
    // },
    component: () =>
      import(/* webpackChunkName: "default" */ "@/layouts/home.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        // meta: {
        // middleware: [Auth, OnBoard],
        // },
        component: () =>
          import(
            /* webpackChunkName: "default" */ "@/modules/dashboard/views/dashboard.vue"
          ),
      },
      {
        path: "products",
        name: "Products",
        // meta: {
        // middleware: [Auth, OnBoard],
        // },
        component: () =>
          import(
            /* webpackChunkName: "default" */ "@/modules/products/views/products.vue"
          ),
      },
      {
        path: "stores",
        name: "Stores",
        // meta: {
        // middleware: [Auth, OnBoard],
        // },
        component: () =>
          import(
            /* webpackChunkName: "default" */ "@/modules/stores/views/stores.vue"
          ),
      },
      {
        path: "settings",
        name: "Settings",
        // meta: {
        // middleware: [Auth, OnBoard],
        // },
        component: () =>
          import(
            /* webpackChunkName: "default" */ "@/modules/settings/views/settings.vue"
          ),
      },
    ],
  },
  // forgot password
  {
    path: "/forgot-password",
    name: "Forgot",
    // meta: {
    //   middleware: [Auth, OnBoard],
    // },
    component: () =>
      import(/* webpackChunkName: "auth" */ "@/layouts/forgot.vue"),
  },
  // auth
  {
    path: "/auth",
    name: "Auth",
    meta: {
      // middleware: [Auth, OnBoard],
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "auth" */ "@/layouts/auth.vue"),

    children: [
      {
        path: "login",
        name: "Login",
        meta: {
          // middleware: [Auth, OnBoard],
        },
        component: () =>
          import(
            /* webpackChunkName: "auth" */ "@/modules/auth/views/login.vue"
          ),
      },
      {
        path: "register",
        name: "Register",
        // meta: {
        //   middleware: [Auth, OnBoard],
        // },
        component: () =>
          import(
            /* webpackChunkName: "auth" */ "@/modules/auth/views/register.vue"
          ),
      },
    ],
  },

  // {
  //   path: "/articles",
  //   component: () => import(/* webpackChunkName: "about" */ "@/modules/article/views/layout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       name: "Article",
  //       component: () =>
  //         import(/* webpackChunkName: "dashboard" */ "@/modules/article/views/index.vue"),
  //     },
  //     {
  //       path: "create",
  //       name: "CreateArticle",
  //       component: () =>
  //         import(/* webpackChunkName: "dashboard" */ "@/modules/article/views/create.vue"),
  //     },
  //     {
  //       path: ":id",
  //       name: "DetailArticle",
  //       component: () =>
  //         import(/* webpackChunkName: "dashboard" */ "@/modules/article/views/detail.vue"),
  //     },
  //   ],
  // },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
  // scrollBehavior: function (to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // },
});
router.beforeEach(async (to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware;
    const payload = { to, from, next };
    let preventNext = false;
    for (let i = 0; i < middleware.length; i++) {
      const result = await middleware[i](payload);
      if (!result) {
        preventNext = true;
        break;
      }
    }
    if (preventNext) {
      return;
    }
  }
  next();
});

export default router;
