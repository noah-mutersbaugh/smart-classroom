<template>
  <div>
    <b-button @click="makeToast()">Show Toast</b-button>
    <b-button @click="makeToast(true)">Show Toast (appended)</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toastCount: 0,
    };
  },
  methods: {
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
        title: "BootstrapVue Toast",
        autoHideDelay: 50000,
        appendToast: append,
      });
    },
  },
};
</script>

<style scoped>
.b-toast {
  z-index: 100;
}
</style>