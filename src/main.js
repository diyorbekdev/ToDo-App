import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/main.css";

import firebase from "firebase";
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAjZ8YuXmIv8GAaOUh8g2chGw2qfTr6dJ8",
  authDomain: "todo-list-4f7b5.firebaseapp.com",
  projectId: "todo-list-4f7b5",
  storageBucket: "todo-list-4f7b5.appspot.com",
  messagingSenderId: "16806653332",
  appId: "1:16806653332:web:e927f7f421dcd8576eb381"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
