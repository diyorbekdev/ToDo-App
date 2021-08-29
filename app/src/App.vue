<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import api from "@/database/api";

export default {
  created() {
    api.user = JSON.parse(localStorage.getItem("user"));
    this.$store.state.register = api.user && api.user;
  }
};
</script>
<style></style>
