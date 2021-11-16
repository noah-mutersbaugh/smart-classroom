<template>
  <div id="app" class=".container-fluid">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    // On creation, check signed in status and set store state
    this.$gapi.isSignedIn().then((localLoggedInStatus) => {
      this.$store.commit(localLoggedInStatus ? "logIn" : "logOut");
      // if (parameterInURL) { // concatenate smartclassroom.classrooms
      //   if (user.isFaculty) { // check permission in database based on email
      //     if (room.isInDB) { // get the room in the parameter and check if it's in smartclassroom.classrooms
      //       // Change settings in room
      //     }
      //   }
      // }
    });
  },
};
</script>