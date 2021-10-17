<template>
  <b-nav
    id="nav"
    class="d-flex flex-row justify-content-center navbar navbar-expand"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-nav-item to="/" exact exact-active-class="active">
      <img alt="GVSU Logo" src="@/assets/gvsu_oneline_RGB_white_1024.png" />
    </b-nav-item>
    <div class="collapse navbar-collapse p-4" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <b-nav-item to="/inventory" exact exact-active-class="active"
          >Inventory</b-nav-item
        >
        <b-nav-item to="/tech-specs" exact exact-active-class="active"
          >Tech Specs</b-nav-item
        >
        <b-nav-item to="/tech-settings" exact exact-active-class="active"
          >Tech Settings</b-nav-item
        >
        <b-nav-item to="/faq" exact exact-active-class="active">FAQ</b-nav-item>
        <b-nav-item to="/feedback" exact exact-active-class="active"
          >Feedback</b-nav-item
        >
        <b-nav-item to="/map" exact exact-active-class="active">Map</b-nav-item>
      </ul>
    </div>
  </b-nav>
  <!-- </div> -->
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  background-color: #0065a4;
}

.nav-link {
  color: #f9f9f9;
}

img {
  height: 2.5rem;
}
</style>