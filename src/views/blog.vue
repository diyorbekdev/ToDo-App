<template lang="">
  <div>
    <ul>
      <li v-for="item in filtered" :key="item">{{ item }}</li>
    </ul>
    <select v-model="selectValue">
      <option selected value="">one</option>
      <option value="">two</option>
      <option value="">three</option>
      <option value="">four</option>
    </select>
    <button @click="click">click</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    filtered: function() {
      //   console.log(selectValue);
      return this.selectValue == "one" ? this.funcOne() : this.funcTwo();
    }
  },
  methods: {
    funcOne() {
      return [1];
    },
    funcTwo() {
      return [1, 2, 3, 5];
    }
  }
};
</script>
<style lang=""></style>
