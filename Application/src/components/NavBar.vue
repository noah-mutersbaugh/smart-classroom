<template>
  <div>
    <b-navbar id="header" toggleable="lg" type="dark">
      <b-navbar-brand to="/" class="ms-5 me-auto">
        <img alt="GVSU Logo" src="@/assets/gvsu_oneline_RGB_white_1024.png" />
      </b-navbar-brand>
			<div id="google-signin-btn" class="g-signin2 me-5" data-onsuccess="onSignIn" @click="signIn"></div>
			<button class="me-5" @click="logOut()">Log Out</button>
    </b-navbar>

    <h1 class="ms-5">{{ msg }}</h1>

    <b-navbar id="navigation" toggleable="md">
      <b-navbar-toggle target="nav-collapse" class="ms-5"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="ms-5" is-nav>
        <b-navbar-nav id="nav-list" class="mr-auto">
          <b-nav-item to="/inventory">Inventory</b-nav-item>
          <b-nav-item to="/tech-specs">Tech Specs</b-nav-item>
          <b-nav-item to="/faq">FAQ</b-nav-item>
          <!-- <b-nav-item to="/feedback">Feedback</b-nav-item> -->
          <b-nav-item v-show="this.$store.state.loggedIn" to="/tech-settings"
            >Tech Settings</b-nav-item
          >
          <b-nav-item to="/map">Map</b-nav-item>
          <!-- <b-nav-item to="/faq">FAQ</b-nav-item> -->
          <!-- <b-nav-item to="/feedback">Feedback</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- <div>Logged in Status: {{ this.$store.state.loggedIn }}</div> -->
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  data: function () {
    return {
      loggedInStatus: undefined,
    };
  },
  created() {
    // On creation, check signed in status and set store state
    this.$gapi.isSignedIn().then((localLoggedInStatus) => {
      this.$store.commit(localLoggedInStatus ? "logIn" : "logOut");
    });
  },
  mounted() {
		// Explicitly render the google sign-in button. Had to use `window.gapi....` to get past the vue-google-api limitations
		window.gapi.signin2.render('google-signin-btn', { // this is the button "id"
      onsuccess: this.signIn // note, no "()" here
    })
	},
  watch: {
    // Watch for changes in the store state
    "$store.state.loggedIn": function () {
      this.loggedInStatus = this.$store.state.loggedIn;
    },
  },
  computed: {},
  methods: {
    signIn() {
      this.$gapi
        .signIn()
        .then((user) => {
          console.log("Signed in as %s", user.name);
          this.$store.commit("logIn");
        })
        .catch((err) => {
          console.error("Not signed in: %s", err.error);
        });
    },
    getInfo() {
      this.$gapi.currentUser().then((profile) => {
        console.log("ID: " + profile.id); // Do not send to your backend! Use an ID token instead.
        console.log("Name: " + profile.name);
        console.log("Image URL: " + profile.image);
        console.log("Email: " + profile.email); // This is null if the 'email' scope is not present.));
      });
    },
    logOut() {
      this.$gapi.signOut().then(() => {
        this.$store.commit("logOut");
        console.log("User disconnected.");
      });
    },
    state() {
      console.log(this.$store.state.loggedIn);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  background-color: #0065a4;
}

.nav-link {
  color: #f9f9f9;
}

img {
  height: 2.5rem;
}

#navigation {
  background: #f7f7f7;
  border: 1px solid #ccc;
  font-size: 1.2rem;
  z-index: 9999;
}

#nav-list :nth-child(1) > a {
  padding-left: 0;
}

.navbar-expand-md .navbar-nav .nav-link {
  padding-right: 1rem;
}
</style>