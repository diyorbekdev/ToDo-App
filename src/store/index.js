import Vue from "vue";
import Vuex from "vuex";
import time from "./modules/time";
import saveData from "./modules/saveData";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoListPlansMain: [],
    todoPlansId: [],
    register: {
      email: "",
      password: "",
      gender: ""
    }
  },
  modules: {
    time,
    saveData
  },
  mutations: {}
});

export default store;
