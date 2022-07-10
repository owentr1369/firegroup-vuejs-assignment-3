import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@/middlewares/auth";
Vue.use(VueRouter);

const routes = [
  // default
  {
    path: "/",
    name: "Home",
    meta: {
      middleware: [Auth],
    },
    component: () =>
      import(/* webpackChunkName: "default" */ "@/layouts/home.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: {
          middleware: [Auth],
        },
        component: () =>
          import(
            /* webpackChunkName: "default" */ "@/modules/dashboard/views/dashboard.vue"
          ),
      },
      {
        path: "products",
        name: "Products",
        meta: {
          middleware: [Auth],
        },
        component: () =>
          import(
            /* webpackChunkName: "default" */ "@/modules/products/views/products.vue"
          ),
      },
      {
        path: "stores",
        name: "Stores",
        meta: {
          middleware: [Auth],
        },
        component: () =>
          import(
            /* webpackChunkName: "default" */ "@/modules/stores/views/stores.vue"
          ),
      },
      {
        path: "settings",
        name: "Settings",
        meta: {
          middleware: [Auth],
        },
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
    name: "Forgot Password",
    component: () =>
      import(/* webpackChunkName: "auth" */ "@/layouts/forgot.vue"),
  },
  // auth
  {
    path: "/auth",
    name: "Auth",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "auth" */ "@/layouts/auth.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        meta: {},
        component: () =>
          import(
            /* webpackChunkName: "auth" */ "@/modules/auth/views/login.vue"
          ),
      },
      {
        path: "register",
        name: "Register",
        component: () =>
          import(
            /* webpackChunkName: "auth" */ "@/modules/auth/views/register.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
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
router.beforeEach((to, from, next) => {
  document.title = `Logoipsum | ${to.name}`;
  next();
});

export default router;
