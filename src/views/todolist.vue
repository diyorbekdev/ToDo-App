<template>
  <div class="about">
    <menuComponent></menuComponent>
    <div class="bg-success mt-3 p-3" v-if="successPlan">
      <b class="">one of the plans completed successfully</b>
      <button class="btn btn-danger ml-2 pt-1" @click="successPlan = false">
        X
      </button>
    </div>
    <div class="bg-success mt-3 p-3" v-if="deletePlan">
      <b class="">one of the plans successfully deleted</b>
      <button class="btn btn-danger ml-2 pt-1" @click="deletePlan = false">
        X
      </button>
    </div>

    <div class="index">
      <div class="row">
        <div class="col-12 text-center mt-3 mb-3 text-light">
          <h2 class="p-0 m-0">Create a Todo List</h2>
        </div>
      </div>
      <center v-if="todoTypeBool.all" class="text-center m-3 text-danger">
        <h5>Which section do you want to add?</h5>
        <div class="row mt-4">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
            <div class="item" @click="todoType('feeding')">
              <img src="@/assets/images/icons/christmas-dinner.png" alt="" />
              <b>feeding</b>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
            <div class="item" @click="todoType('study')">
              <img src="@/assets/images/icons/open-book.png" alt="" />
              <b>study</b>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
            <div class="item" @click="todoType('sport')">
              <img src="@/assets/images/icons/fitness.png" alt="" />
              <b>sport</b>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
            <div class="item" @click="todoType('gaming')">
              <img src="@/assets/images/icons/joystick.png" alt="" />
              <b>gaming</b>
            </div>
          </div>
        </div>
      </center>

      <form action="" class="allType" v-if="todoTypeBool.feeding">
        <b>Feeding</b>
        <div>
          <label for="">Enter the time: </label>
          <input type="time" v-model="newTodoPlan.time" />
        </div>
        <div>
          <label for=""> </label>
          <input type="date" v-model="newTodoPlan.data" />
        </div>
        <div>
          <label for="">Who do you dine with: </label>
          <select v-model="newTodoPlan.who">
            <option value="Family" :selected="true">Family</option>
            <option value="Friends">Friends</option>
            <option value="Girl Friends">Girl Friend</option>
            <option value="Partners">Partners</option>
            <option value="Colleagues">Colleagues</option>
          </select>
        </div>
        <div>
          <label for="">Where: </label>
          <select v-model="newTodoPlan.where">
            <option value="Home" :selected="true">Home</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Cafe">Cafe</option>
          </select>
        </div>
        <div class="mt-3">
          <button type="button" @click="todoType('all')" class="btn btn-danger">
            Back
          </button>
          <button
            type="button"
            :disabled="
              newTodoPlan.time === '' ||
                newTodoPlan.data === '' ||
                newTodoPlan.who === '' ||
                newTodoPlan.where === ''
            "
            @click="savePlan(newTodoPlan)"
            class="btn btn-success"
          >
            Save
          </button>
        </div>
      </form>

      <form action="" class="allType" v-if="todoTypeBool.study">
        <b>Study</b>
        <div>
          <label for="">Enter the time: </label>
          <input type="time" v-model="newTodoPlan.time" />
        </div>
        <div>
          <label for=""> </label>
          <input type="date" v-model="newTodoPlan.data" />
        </div>
        <div>
          <label for="">What you learn: </label>
          <select v-model="newTodoPlan.what">
            <option value="Fiction book" :selected="true">Fiction book</option>
            <option value="Tasks">Tasks</option>
            <option value="Computer lessons">Computer lessons</option>
            <option value="Programming">Programming</option>
          </select>
        </div>
        <div>
          <label for="">Where: </label>
          <select v-model="newTodoPlan.where">
            <option value="Home" :selected="true">Home</option>
            <option value="Training course">Training course</option>
            <option value="With a friend">With a friend</option>
          </select>
        </div>
        <div class="mt-3">
          <button type="button" @click="todoType('all')" class="btn btn-danger">
            Back
          </button>
          <button
            type="button"
            @click="savePlan(newTodoPlan)"
            class="btn btn-success"
            :disabled="
              newTodoPlan.time === '' ||
                newTodoPlan.data === '' ||
                newTodoPlan.what === '' ||
                newTodoPlan.where === ''
            "
          >
            Save
          </button>
        </div>
      </form>

      <form action="" class="allType" v-if="todoTypeBool.sport">
        <b>Sport</b>
        <div>
          <label for="">Enter the time: </label>
          <input type="time" v-model="newTodoPlan.time" />
        </div>
        <div>
          <label for=""> </label>
          <input type="date" v-model="newTodoPlan.data" />
        </div>
        <div>
          <label for="">Which type: </label>
          <select v-model="newTodoPlan.what">
            <option value="Football" :selected="true">Football</option>
            <option value="Voleyball">Voleyball</option>
            <option value="Basketball">Basketball</option>
            <option value="Handball">Handball</option>
            <option value="Run">Run</option>
            <option value="Body training">Body training</option>
          </select>
        </div>
        <div>
          <label for="">With whom: </label>
          <select v-model="newTodoPlan.who">
            <option value="Family" :selected="true">Family</option>
            <option value="Friends">Friends</option>
            <option value="TV">TV</option>
          </select>
        </div>
        <div>
          <label for="">Where: </label>
          <select v-model="newTodoPlan.where">
            <option value="Home" :selected="true">Home</option>
            <option value="Stadium">Stadium</option>
            <option value="Training courses">Training courses</option>
          </select>
        </div>
        <div class="mt-3">
          <button type="button" @click="todoType('all')" class="btn btn-danger">
            Back
          </button>
          <button
            type="button"
            @click="savePlan(newTodoPlan)"
            class="btn btn-success"
            :disabled="
              newTodoPlan.time === '' ||
                newTodoPlan.data === '' ||
                newTodoPlan.who === '' ||
                newTodoPlan.where === '' ||
                newTodoPlan.what === ''
            "
          >
            Save
          </button>
        </div>
      </form>
      <form action="" class="allType" v-if="todoTypeBool.gaming">
        <b>Gaming</b>
        <div>
          <label for="">Enter the time: </label>
          <input type="time" v-model="newTodoPlan.time" />
        </div>
        <div>
          <label for=""> </label>
          <input type="date" v-model="newTodoPlan.data" />
        </div>
        <div>
          <label for="">What a game: </label>
          <select v-model="newTodoPlan.what">
            <option value="Cs1.6" :selected="true">Counter Strike 1.6</option>
            <option value="Csgo">Counter Strike Global Offensive</option>
            <option value="Pubg">PUBG</option>
            <option value="Clash">Clash of Clans</option>
            <option value="Football">Football</option>
            <option value="Playstation">Playstation</option>
          </select>
        </div>
        <div>
          <label for="">Where: </label>
          <select v-model="newTodoPlan.where">
            <option :selected="true" value="Home">Home</option>
            <option value="GameClub">Game Club</option>
          </select>
        </div>
        <div class="mt-3">
          <button type="button" @click="todoType('all')" class="btn btn-danger">
            Back
          </button>
          <button
            type="button"
            @click="savePlan(newTodoPlan)"
            class="btn btn-success"
            :disabled="
              newTodoPlan.time === '' ||
                newTodoPlan.data === '' ||
                newTodoPlan.where === '' ||
                newTodoPlan.what === ''
            "
          >
            Save
          </button>
        </div>
      </form>
    </div>

    <div class="plans">
      <div class="row">
        <div class="col-12 mb-4">
          <h4>Activity Planner</h4>
          <div class="btnclick">
            <select v-model="filterPlan.filterOne">
              <option :selected="true" value="all">All</option>
              <option value="feeding">Feeding</option>
              <option value="sport">Sport</option>
              <option value="study">Study</option>
              <option value="gaming">Gaming</option>
            </select>
            <select v-model="filterPlan.filterTwo">
              <option :selecte="true" value="all">All</option>
              <option value="fullfilled">Fullfilled</option>
              <option value="unfullfilled">Unfullfilled</option>
              <option value="overdue">Overdue</option>
            </select>

            <button
              type="button"
              class="btn btn-primary"
              :disabled="
                filterPlan.filterOne == '' && filterPlan.filterTwo == ''
              "
              onclick="
                alert(`Ushbu funksiya xali qo'shilmadi!!!`)
              "
            >
              Filter
            </button>
          </div>
        </div>
        <div class="col-12" v-if="loader">
          <div class="plan-item back-light">
            <div class="loading">
              <div class="dot" style="background: #FBAD7D"></div>
              <div class="dot" style="background: #89cff0"></div>
              <div class="dot" style="background: #4682b4"></div>
              <div class="dot" style="background: #EA61A2"></div>
              <div class="dot" style="background: #FF4E19"></div>
            </div>
          </div>
        </div>
        <div
          class="col-12"
          v-for="(plan, index) in checkTheTime.arr"
          :key="index"
          v-else
        >
          <div
            class="plan-item back-light"
            :class="{
              backsuccess: plan.fullfilled,
              backdanger: plan.overdue
            }"
          >
            <div class="item">
              <div>
                <img
                  v-if="plan.type === 'feeding'"
                  src="@/assets/images/icons/christmas-dinner.png"
                  alt=""
                />
                <img
                  v-if="plan.type === 'study'"
                  src="@/assets/images/icons/open-book.png"
                  alt=""
                />
                <img
                  v-if="plan.type === 'sport'"
                  src="@/assets/images/icons/fitness.png"
                  alt=""
                />
                <img
                  v-if="plan.type === 'gaming'"
                  src="@/assets/images/icons/joystick.png"
                  alt=""
                />
                <b class="ml-2">{{ plan.type }}: </b>
              </div>
              <div class="time ml-4">
                <small>{{ plan.time }}</small>
                <small>{{ plan.data }}</small>
              </div>
              <div>
                <small title="Which type">Type -> {{ plan.what }}</small>
                <small v-if="plan.who" title="Who do you dine with"
                  >Who -> {{ plan.who }}</small
                >
                <small title="Where">Where -> {{ plan.where }}</small>
              </div>
            </div>
            <div class="btns">
              <button class=" mr-2" :disabled="plan.fullfilled || plan.overdue">
                <img
                  src="@/assets/images/icons/checked.png"
                  @click="fullfilled(index)"
                  alt=""
                />
              </button>
              <button class="">
                <img
                  src="@/assets/images/icons/remove.png"
                  @click="removePlan(index)"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>

        <div class="col-12" v-if="checkTheTime.arr.length == 0 && !loader">
          <div class="plan-item back-light p-2">
            <small>Loading...</small>
            <small>number of plans: 0</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from "@/main";
import menuComponent from "@/components/menu.vue";
import api from "@/database/api.js";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    menuComponent
  },
  data() {
    return {
      todoTypeBool: {
        all: true,
        feeding: false,
        study: false,
        gaming: false,
        sport: false
      },
      filterBoolen: {
        noFilter: true,
        Filter: false
      },
      newTodoPlan: {
        email:
          this.$store.state.register !== {}
            ? this.$store.state.register.email
            : null,
        type: "",
        time: "",
        data: "",
        who: "",
        where: "",
        what: "",
        fullfilled: false,
        unfullfilled: true,
        overdue: false
      },
      loader: api.todoListPlansMain,
      filterPlan: {
        filterOne: "",
        filterTwo: ""
      },
      todoPlansId: [],
      todoListPlans: [],
      todoListPlansMain: [],
      filterPlanArr: [],
      successPlan: false,
      deletePlan: false,
      counter: 0
    };
  },
  computed: {
    ...mapGetters({
      checkTheTime: "time/checkTheTime"
    })
  },
  methods: {
    ...mapMutations({
      saveData: "saveData/saveData",
      FULLFILLED: "time/FULLFILLED",
      REMOVEPLAN: "time/REMOVEPLAN"
    }),

    savePlan(payload) {
      this.saveData(payload);
      this.newTodoPlan = new Object();
      this.todoTypeBool = {
        all: true,
        feeding: false,
        study: false,
        gaming: false,
        sport: false
      };
    },

    fullfilled(i) {
      setTimeout(() => {
        this.successPlan = true;
      }, 2000);
      return this.FULLFILLED(i);
    },

    removePlan(index) {
      this.deletePlan = true;
      this.REMOVEPLAN(index);
    },

    todoType(type) {
      switch (type) {
        case type:
          for (const iterator in this.todoTypeBool) {
            iterator !== type
              ? (this.todoTypeBool[iterator] = false)
              : (this.todoTypeBool[iterator] = true);
          }
          this.newTodoPlan.type = type;

          break;
        default:
          for (const iterator in this.todoTypeBool) {
            iterator !== "all"
              ? (this.todoTypeBool[iterator] = false)
              : (this.todoTypeBool[iterator] = true);
          }
          break;
      }
    }
  },

  created() {
    db.collection("todoPlan")
      .get()
      .then(app => {
        if (api.todoListPlansMain.length == 0) {
          app.docs.forEach(doc => {
            api.todoListPlansMain.push(doc.data());
            api.todoListPlansMain[api.todoListPlansMain.length - 1].id = doc.id;
          });
        }
      })
      .finally(() => {
        this.loader = false;
      });
  }
};
</script>
<style scoped></style>
