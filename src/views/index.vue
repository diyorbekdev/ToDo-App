<template lang="">
  <div class="template">
    <menuComponent></menuComponent>

    <div class="homepage mt-3">
      <center>
        <h1>Todo List Project</h1>
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-md-6 col-sm-12">
            <img src="@/assets/images/menu/todolist.png" alt="" />
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <ul>
              <li>Beautiful</li>
              <li>Functional</li>
              <li>Creative</li>
              <li>Simple</li>
              <li>Convenient</li>
            </ul>
          </div>
        </div>
      </center>
    </div>
  </div>
</template>
<script>
import menuComponent from "@/components/menu.vue";

export default {
  name: "index",
  // eslint-disable-next-line vue/no-unused-components
  components: { menuComponent },
  created() {}
};
</script>
<style lang=""></style>
