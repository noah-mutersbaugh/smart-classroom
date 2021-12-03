<template>
  <div>
    <b-navbar id="header" toggleable="lg" type="dark">
      <b-navbar-brand to="/" class="ml-5">
        <img alt="GVSU Logo" src="@/assets/gvsu_oneline_RGB_white_1024.png" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse1"></b-navbar-toggle>

      <b-collapse id="nav-collapse1" is-nav>
<<<<<<< HEAD
        <b-navbar-nav class="ms-auto mx-5">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <div
=======
        <b-navbar-nav class="ml-auto mr-5">
          <b-nav-item-dropdown
            id="profile-dropdown"
            v-bind:text="
              this.$store.state.loggedIn
                ? `Logged in as ${this.$store.state.user}`
                : 'Log In'
            "
            right
          >
            <div
              v-show="!this.$store.state.loggedIn"
>>>>>>> 6271ba8459ea6e53ed4e1525d5eb2d33aa7b5ad5
              id="google-signin-btn"
              class="g-signin2 mr-5"
              data-onsuccess="onSignIn"
              @click="signIn"
            ></div>
<<<<<<< HEAD
            <b-nav-item @click="logOut()">Log Out</b-nav-item>
=======
            <b-dropdown-item
              v-show="this.$store.state.loggedIn"
              @click="logOut()"
              >Log Out</b-dropdown-item
            >
>>>>>>> 6271ba8459ea6e53ed4e1525d5eb2d33aa7b5ad5
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <h1 class="ml-5">{{ msg }}</h1>

    <b-navbar id="navigation" toggleable="md">
      <b-navbar-toggle target="nav-collapse2" class="ml-5"></b-navbar-toggle>

      <b-collapse id="nav-collapse2" class="ml-5" is-nav>
        <b-navbar-nav id="nav-list" class="mr-auto">
          <b-nav-item to="/inventory">Inventory</b-nav-item>
          <b-nav-item to="/tech-specs">Tech Specs</b-nav-item>
<<<<<<< HEAD
          <b-nav-item v-show="this.$store.state.loggedIn" to="/tech-settings"
            >Tech Settings</b-nav-item
          >
=======
          <b-nav-item v-show="this.$store.state.loggedIn" to="/tech-settings">Tech Settings</b-nav-item>
          <b-nav-item v-show="this.$store.state.admin" to="/admin">Admin</b-nav-item>
>>>>>>> 6271ba8459ea6e53ed4e1525d5eb2d33aa7b5ad5
          <b-nav-item to="/map">Map</b-nav-item>
          <b-nav-item to="/faq">FAQ</b-nav-item>
          <b-nav-item to="/feedback">Feedback</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- <div>Logged in Status: store - {{ this.$store.state.loggedIn }}</div> -->
  </div>
</template>

<script>
//########################################################################################################################3
//import classroomsmodel from './Application/src/models/classroomsmodel.js'


export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  data: function () {
<<<<<<< HEAD
    return {
      loggedInStatus: undefined,
	  thisIsSmartclass: true,
    };
  },
  created() {
    // On creation, check signed in status and set store state
    this.$gapi.isSignedIn().then((localLoggedInStatus) => {
      this.$store.commit(localLoggedInStatus ? "logIn" : "logOut");
    });
=======
    return {};
>>>>>>> 6271ba8459ea6e53ed4e1525d5eb2d33aa7b5ad5
  },
  mounted() {
    // Explicitly render the google sign-in button. Had to use `window.gapi....` to get past the vue-google-api limitations
    window.gapi.signin2.render("google-signin-btn", {
      onsuccess: this.signIn, // note, no "()" here
    });
    this.$store.commit("changeUser", this.user.name);
    this.$store.commit("logIn");
  },
<<<<<<< HEAD
  //computed is here
  computed: {
	

	  //determine whether or not the parameter in the URL is a class in the database. I.e. is the classroom a smart classroom or not
    //eventually be done in App.vue, but it will probably be easier for you to use a button you create in a component
	 checkPara(){
		 //smartclesses.client.connect(err => {
    //if (err) throw err;
    //const collection = dbserver.client.db("smartclassroom").collection("classrooms");});
	//	const smartclassroom  = dbserver.client.db("smartclassroom").collection("classrooms");
		//pull.get.require( '../models/classroomsmodel',(req,res) =>{

		 const smartclasses = require( '../models/classroomsmodel');
    	signIn.$route.query.smartclasses(err =>{
			if (signIn !=smartclasses){
				//throw err;
				const different  = smartclasses.client.db("smartclassroom").differnet("classrooms");
				this.$store.commit("Denied");
       			console.log("Not a smart classroom.");		
			}
			 else {
				this.$gapi .checkPara().then((user) => {
         		 console.log("Signed in as %s", user.room);
          		this.$store.commit("Correct Room");
		  		this.thisIsSmartclass = this.$store.state.loggedIn;
			});
			 }
        });
	 },
  },

=======
  computed: {},
>>>>>>> 6271ba8459ea6e53ed4e1525d5eb2d33aa7b5ad5
  methods: {
    signIn() {
      this.$gapi
        .signIn()
        .then((user) => {
          console.log("Signed in as %s", user.name);
          this.$store.commit("changeUser", user.name);
          this.$store.commit("logIn");
        })
        .catch((err) => {
          console.error("Not signed in: %s", err.error);
        });
    },
    test(){
     makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
        title: "BootstrapVue Toast",
        message: 'Something went wrong!',
         type: 'error',
        autoHideDelay: 5000000,
        appendToast: append,
      });
      this.$bvToast.scucess(`this is goog ${this.toastCount}`, {
        
        message: 'everything is good !',
         type: 'error',
        autoHideDelay: 5000000,
        appendToast: append,
        postion: 'top',
      });
     },
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
	
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  background-color: #0065a4;
}

.navbar {
  padding: 0.5rem 0rem;
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
  z-index: 0;
}

#nav-list :nth-child(1) > a {
  padding-left: 0;
}

.navbar-expand-md .navbar-nav .nav-link {
  padding-right: 1rem;
}
</style>
