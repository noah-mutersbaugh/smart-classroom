<template>
  <div class="card text-center h-100">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ body }}
      </p>
      <b-link :to="`/${link}`" class="btn btn-primary">{{ link_desc }}</b-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    body: String,
    link: String,
    link_desc: String,
  },
};
</script>

<style scoped>
.card {
  flex: 1 0 0%;
  margin-right: 15px;
  margin-bottom: 0;
  margin-left: 15px;
}
</style>