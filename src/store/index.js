import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    fetchUser({ commit }) {
      axios
        .get("https://sohead-api-dev.socialhead.dev/api/app/user")
        .then((res) => res.data)
        .then((user) => {
          commit("setUser", user);
          console.log("user :>> ", user);
        });
    },
  },
  modules: {},
});
