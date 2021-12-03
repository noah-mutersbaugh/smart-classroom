<template>
  <div>
    <b-button @click="makeToast()">Show Toast</b-button>
    <b-button @click="makeToast(true)">Show Toast (appended)</b-button>
  </div>
</template>

<script>
<<<<<<< HEAD
import {createApp} from 'vue';
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
const app = createApp({});
app.use(VueToast);
app.mount('#app');
=======
>>>>>>> 6271ba8459ea6e53ed4e1525d5eb2d33aa7b5ad5
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
<<<<<<< HEAD
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

=======
        autoHideDelay: 50000,
        appendToast: append,
      });
    },
  },
};
>>>>>>> 6271ba8459ea6e53ed4e1525d5eb2d33aa7b5ad5
</script>

<style scoped>
.b-toast {
  z-index: 100;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 6271ba8459ea6e53ed4e1525d5eb2d33aa7b5ad5
