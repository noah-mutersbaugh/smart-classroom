<template>
  <div>
    <b-navbar id="header" toggleable="lg" type="dark">
      <b-navbar-brand to="/" class="ms-5">
        <img alt="GVSU Logo" src="@/assets/gvsu_oneline_RGB_white_1024.png" />
      </b-navbar-brand>
    </b-navbar>

    <h1 class="ms-5">{{ msg }}</h1>

    <b-navbar id="navigation" toggleable="md">
      <b-navbar-toggle target="nav-collapse" class="ms-5"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="ms-5" is-nav>
        <b-navbar-nav id="nav-list" class="mr-auto">
          <b-nav-item to="/inventory">Inventory</b-nav-item>
          <b-nav-item to="/tech-specs">Tech Specs</b-nav-item>
          <b-nav-item to="/faq">FAQ</b-nav-item>
          <b-nav-item to="/feedback">Feedback</b-nav-item>
          <b-nav-item v-if="signedin()" to="/tech-settings"
            >Tech Settings</b-nav-item
          >
          <b-nav-item to="/map">Map</b-nav-item>
          <b-nav-item to="/faq">FAQ</b-nav-item>
          <!-- <b-nav-item to="/feedback">Feedback</b-nav-item> -->
        </b-navbar-nav>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  methods: {
    signedin() { /* Check if the user is signed in using vue-google-api */
      this.$gapi.isSignedIn().then((result) => {
        console.log(result ? "Signed in" : "Signed out");
        return result;
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