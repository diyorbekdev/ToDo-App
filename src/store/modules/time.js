import api from "@/database/api.js";
import db from "@/main";
const newDate = new Date();
let data = newDate.toLocaleDateString();
data = data.slice(6, 10) + "-" + data.slice(3, 5) + "-" + data.slice(0, 2);
let time = newDate.toLocaleTimeString();

const state = {
  list: api.todoListPlansMain,
  userId: api.todoPlansId,
  arr: [],
  sortPlans: []
};

const getters = {
  newType: state => {
    return state.list;
  },
  checkTheTime: state => {
    state.arr = [];
    state.list.forEach((el, index) => {
      if (el.email == api.user.email) {
        state.arr.push(el);
        if (el.data < data && el.overdue === false) {
          el.overdue = true;
          db.collection("todoPlan")
            .doc(state.list[index].id)
            .update({
              overdue: true
            });
        }
        if (el.data == data && el.overdue === false && el.time < time) {
          el.overdue = true;
          db.collection("todoPlan")
            .doc(state.userId[index])
            .update({
              overdue: true
            });
        }
      } else {
        state.userId.splice(index, 1);
      }
    });

    return state;

    // console.log(payload);

    // if (payloadOne == "filter") {
    //   if (payloadTwo.filterTwo === "") {
    //     state.arr.forEach(item => {
    //       if (
    //         item.type == payloadTwo.filterOne ||
    //         payloadTwo.filterOne == "all"
    //       ) {
    //         state.sortPlans.push(item);
    //       }
    //     });
    //   } else if (payloadTwo.filterOne === "") {
    //     if (payloadTwo.filterTwo === "fullfilled") {
    //       state.arr.forEach(item => {
    //         if (item.fullfilled === true) {
    //           state.sortPlans.push(item);
    //         }
    //       });
    //     }

    //     if (payloadTwo.filterTwo === "unfullfilled") {
    //       state.arr.forEach(item => {
    //         if (item.unfullfilled === true) {
    //           state.sortPlans.push(item);
    //         }
    //       });
    //     }

    //     if (payloadTwo.filterTwo === "overdue") {
    //       state.arr.forEach(item => {
    //         if (item.overdue === true) {
    //           state.sortPlans.push(item);
    //         }
    //       });
    //     }
    //     if (payloadTwo.filterTwo === "all") {
    //       state.arr.forEach(item => {
    //         state.sortPlans.push(item);
    //       });
    //     }
    //   } else {
    //     state.arr.forEach(item => {
    //       if (item.type == payloadTwo.filterOne) {
    //         if (payloadTwo.filterTwo === "fullfilled") {
    //           if (item.fullfilled === true) {
    //             state.sortPlans.push(item);
    //           }
    //         }
    //         if (payloadTwo.filterTwo === "unfullfilled") {
    //           if (item.unfullfilled === true) {
    //             state.sortPlans.push(item);
    //           }
    //         }
    //         if (payloadTwo.filterTwo === "overdue") {
    //           if (item.overdue === true) {
    //             state.sortPlans.push(item);
    //           }
    //         }
    //         if (payloadTwo.filterTwo === "all") {
    //           state.sortPlans.push(item);
    //         }
    //       }
    //       if (payloadTwo.filterOne == "all") {
    //         if (payloadTwo.filterTwo === "fullfilled") {
    //           if (item.fullfilled === true) {
    //             state.sortPlans.push(item);
    //           }
    //         }
    //         if (payloadTwo.filterTwo === "unfullfilled") {
    //           if (item.unfullfilled === true) {
    //             state.sortPlans.push(item);
    //           }
    //         }
    //         if (payloadTwo.filterTwo === "overdue") {
    //           if (item.overdue === true) {
    //             state.sortPlans.push(item);
    //           }
    //         }
    //         if (payloadTwo.filterTwo === "all") {
    //           state.sortPlans.push(item);
    //         }
    //       }
    //     });
    //   }

    //   return state.sortPlans;
    // } else {
    //   return state.arr;
    // }
  }
};

const mutations = {
  FULLFILLED: (state, payload) => {
    db.collection("todoPlan")
      .doc(state.arr[payload].id)
      .update({
        fullfilled: true
      })
      .finally(function() {
        state.arr[payload].fullfilled = true;
        window.location.reload();
      });
  },
  REMOVEPLAN: (state, payload) => {
    db.collection("todoPlan")
      .doc(state.arr[payload].id)
      .delete()
      .finally(function() {
        window.location.reload();
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
