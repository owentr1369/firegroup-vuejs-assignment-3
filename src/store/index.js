import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { getCookie } from "@/plugins/cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
  },
  getters: {
    getUser: (state) => state.user,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        axios.defaults.headers.common["Authorization"] = `${getCookie(
          "userToken"
        )}`;
        const res = await axios.get(
          "https://sohead-api-dev.socialhead.dev/api/app/user"
        );
        commit("SET_USER", res.data);
        console.log("user Data :>> ", res.data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  modules: {},
});
