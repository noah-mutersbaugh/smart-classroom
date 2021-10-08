<template>
  <div class="wrapper">
      <div class="accordion" v-on:click="toggle">
          <h2 class="accordion-head">
              <span v-show="show" class="icon icon-chevron-down"></span>
              <slot name="accordion-head"></slot>
          </h2>
      </div>
      <div v-show="show" class="accordion-content">
          <slot name="accordion-content">{{ text }}</slot>
      </div>
  </div>
</template>

<script>
export default {
    components: {},
    data: function() {
        return{
            show: false,
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
        },
    }
}
</script>