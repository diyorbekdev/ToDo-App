<template lang="">
  <div class="login">
    <menuComponent></menuComponent>
    <h2 class="mt-5">Sign Up</h2>
    <form @submit.prevent="saveAccount(form)">
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="inputEmail3"
            v-model="form.email"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="inputPassword3"
            v-model="form.password"
          />
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="Male"
                checked
                v-model="form.gender"
              />
              <label class="form-check-label" for="gridRadios1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="Female"
                v-model="form.gender"
              />
              <label class="form-check-label" for="gridRadios2">
                Female
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div class="form-group row">
        <div class="col-sm-2">Password</div>
        <div class="col-sm-10">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="gridCheck1"
              v-model="showing"
            />
            <label v-if="showing" class="form-check-label" for="gridCheck1">
              {{ form.password }}
            </label>
            <label v-else class="form-check-label" for="gridCheck1">
              Show
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="
              form.gender == '' || form.email == '' || form.password == ''
            "
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import menuComponent from "@/components/menu.vue";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        gender: ""
      },
      showing: false
    };
  },
  components: {
    menuComponent
  },
  methods: {
    saveAccount(data) {
      localStorage.setItem("user", JSON.stringify(data));
      this.$store.state.register = new Object();
      this.$store.state.register.gender = data.gender;
      setTimeout(() => {
        this.$router.push({ name: "todo-app" });
        window.location.reload();
      }, 1500);
    }
  }
};
</script>
<style lang=""></style>
