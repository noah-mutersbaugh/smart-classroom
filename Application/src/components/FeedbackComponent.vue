<template>
  <div id="feedback">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1"></label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1"></label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1"></label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Message"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
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