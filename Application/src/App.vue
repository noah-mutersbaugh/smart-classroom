<template>
  <div id="app" class=".container-fluid">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

const db_URL_Professors = "http://localhost:4000/get/professors";

export default {
  data() {
    return {
      email: "",
      dbemail: ""
    }
  },
  async created() {
    // On creation, check signed in status and set store state
    var resp = await axios.get(db_URL_Professors);

    this.$gapi.isSignedIn().then((localLoggedInStatus) => {
      this.$store.commit(localLoggedInStatus ? "logIn" : "logOut");
      this.$gapi.currentUser().then((profile) => {
        this.email = profile.email; // This is null if the 'email' scope is not present.));
      });
      var professors = [];
      professors = resp.data;
      for (let element of professors) {
        if (element.email === "Jonathan.Engelsma@gvsu.edu"){
          if (element.permission === 0){
            alert(JSON.stringify(element));
            break;
          }
        }
      }
    });
  },
}
</script>