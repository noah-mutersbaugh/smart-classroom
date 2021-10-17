<template>
  <div id="feedback">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSeCsmkfys0-P4hrOqYuRx8h8jSLtHbL24BLu7Zy-rZGPT3LyQ/viewform?embedded=true"
      width="640"
      height="736"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Loading…</iframe
    >
  </div>
</template>

<script>
export default {
  name: "FeedbackComponent",
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
</style>