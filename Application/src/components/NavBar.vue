<template>
  <div id="nav">
    <img src="@/assets/gvsu_oneline_RGB_white_1024.png" />
    <div id="nav-wrapper">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/inventory">Inventory</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  /* height: 2rem; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #0065a4;
  padding: 30px;
}

img {
  height: 2.5rem;
}

#nav-wrapper {
    width: 50%;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
