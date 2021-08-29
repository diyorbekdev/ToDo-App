import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/main.css";
// import { initializeApp } from "firebase/app";

import firebase from "firebase";
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyD_xhPUWROpmR0jZiGbYxQxoSenxtmHGsg",
  authDomain: "todo-app-6c6f2.firebaseapp.com",
  projectId: "todo-app-6c6f2",
  storageBucket: "todo-app-6c6f2.appspot.com",
  messagingSenderId: "966493026349",
  appId: "1:966493026349:web:854b7b65551292973da0a4"
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
