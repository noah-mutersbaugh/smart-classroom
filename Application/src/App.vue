<template>
  <div id="app" class=".container-fluid">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

const db_URL_Professors = "http://localhost:4000/get/professors";

export default {
  data() {
    return {
      email: "",
      dbemail: "",
    };
  },
  methods: {},
  async created() {
    // On creation, check signed in status and set store state
    var resp = await axios.get(db_URL_Professors);
    var room = this.$route.query.room;

    this.$gapi.isSignedIn().then((localLoggedInStatus) => {
      this.$store.commit(localLoggedInStatus ? "logIn" : "logOut");
      this.$gapi.currentUser().then((profile) => {
        this.email = profile.email; // This is null if the 'email' scope is not present.));

        var professors = [];
        professors = resp.data;
        for (let element of professors) {
          // var userRoom = `${element.buildingabbr}-${element.num}`;
          var userRoom = element.buildingabbr + element.num;

          if (element.email === this.email) {
            if (element.permission === 0) {
              this.$store.commit("adminLogIn");
              if (userRoom === room) {
                console.log("User is in the room. Apply settings.");
                this.$bvToast.toast('User is in the room. Applied settings.', {
                  title: "BootstrapVue Toast",
                  autoHideDelay: 5000,
                  appendToast: true,
                });
              } else {
                // alert("User is not at the room, so settings weren't applied.");
                console.log("User is not in the room. Did not apply settings.");
                this.toastCount++;
                this.$bvToast.toast('User is not in the room. Did not apply settings.', {
                  title: "BootstrapVue Toast",
                  autoHideDelay: 5000,
                  appendToast: true,
                });
              }
              break;
            }
          }
        }
      });
    });
  },
};
</script>