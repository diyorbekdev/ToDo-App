<template lang="">
  <nav class="navbar navbar-expand-lg navbar-light container-fluid menu">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <h4>To Do App</h4>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'index' }">
            <img :src="home" alt="" /> Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'documentation' }">
            <img :src="docs" alt="" /> Documentation</router-link
          >
        </li>

        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'todolist' }">
            <img :src="todolist" alt="" /> Todo List</router-link
          >
        </li>
        <li class="nav-item">
          <a href="https://ddev-portfolio.netlify.app/">
            <img :src="blog" alt="" /> Owner
          </a>
        </li>
        <li class="account nav-item" v-if="this.$store.state.register !== null">
          <div class="btn-group dropleft">
            <button
              type="button"
              class="btn btn-info dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                :src="male"
                v-if="
                  this.$store.state.register &&
                    this.$store.state.register.gender === 'Male'
                "
                alt=""
              />
              <img v-else :src="female" alt="" />
            </button>
            <div class="dropdown-menu bg-info">
              <ul>
                <li>
                  <button style="" class="logout" type="button" @click="logOut">
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li class="nav-item" v-else>
          <router-link class="nav-link" :to="{ name: 'login' }">
            <img :src="login" alt="" /> Sign-Up</router-link
          >
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </nav>
</template>
<script>
import home from "@/assets/images/menu/home.png";
import blog from "@/assets/images/menu/blog.png";
import docs from "@/assets/images/menu/document.png";
import login from "@/assets/images/menu/login.png";
import todolist from "@/assets/images/menu/to-do-list.png";
import male from "@/assets/images/icons/profile.png";
import female from "@/assets/images/icons/woman.png";

export default {
  name: "menuComponent",
  data() {
    return {
      home,
      blog,
      login,
      docs,
      todolist,
      male,
      female
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("user");
      setTimeout(() => {
        this.$router.push({ path: "/" });
        window.location.reload();
      }, 100);
    }
  }
};
</script>
<style></style>
