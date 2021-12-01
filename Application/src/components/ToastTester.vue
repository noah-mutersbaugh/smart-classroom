<template>
  <div>
    <b-button @click="makeToast()">Show Toast</b-button>
    <b-button @click="makeToast(true)">Show Toast (appended)</b-button>
  </div>
</template>

<script>
import {createApp} from 'vue';
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
const app = createApp({});
app.use(VueToast);
app.mount('#app');
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
};

</script>

<style scoped>
.b-toast {
  z-index: 100;
}
</style>
