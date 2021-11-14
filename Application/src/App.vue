<template>
  <div id="app" class=".container-fluid">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    // On creation, check signed in status and set store state
    this.$gapi.isSignedIn().then((localLoggedInStatus) => {
      this.$store.commit(localLoggedInStatus ? "logIn" : "logOut");
    });
  },
}
</script>