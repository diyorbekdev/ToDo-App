<template lang="">
  <div class="docs">
    <menuComponent></menuComponent>
    <ol class="container-fluid">
      <li type="1">
        You must first register to use a todolist:
        <a href="/login">Sign In</a>
      </li>
      <li>Go to the <a href="/todo-app">todo-app </a> page</li>
      <li>
        <img src="@/assets/images/menu/type.png" alt="" />
        <p>
          Choose one of the 4 categories you need and fill in each form shown in
          the appropriate order
        </p>
      </li>
      <li>
        <img src="@/assets/images/menu/plans.png" alt="" />
        Your plans are saved using the use button.
      </li>
      <li>
        You can classify these plans by duration, outcome, category, and also
        delete or mark them as executed
      </li>
    </ol>
  </div>
</template>
<script>
import menuComponent from "@/components/menu.vue";
export default {
  components: {
    menuComponent
  },
  methods: {}
};
</script>
<style lang=""></style>
