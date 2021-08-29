import api from "@/database/api.js";
import db from "@/main";

const state = {
  todoListPlansMain: api.todoListPlansMain,
  todoPlansId: api.todoPlansId
};

const mutations = {
  saveData(state, payload) {
    api.todoListPlansMain.push({
      email: payload.email,
      type: payload.type,
      time: payload.time,
      data: payload.data,
      who: payload.who,
      where: payload.where,
      what: payload.where,
      fullfilled: payload.fullfilled,
      unfullfilled: payload.unfullfilled,
      overdue: payload.overdue
    });

    db.collection("todoPlan")
      .add(payload)
      .finally(function() {
        window.location.reload();
      });
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
