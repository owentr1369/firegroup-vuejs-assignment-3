import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

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
        const data = await axios.get(
          "https://sohead-api-dev.socialhead.dev/api/app/user"
        );
        commit("SET_USER", data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  modules: {},
});
