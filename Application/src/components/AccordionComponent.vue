<template>
<div>
    <div class="accordion" role="tablist">
    <b-card v-for="tech in technologies" v-bind:key="tech._id" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="accordion-button" block v-b-toggle="tech._id" variant="info">{{ tech.name }}</b-button>
      </b-card-header>
      <b-collapse v-bind:id="tech._id" accordion="my-accordion" role="tabpanel">
          <b-card :img-src="tech.image_url" img-right>
            <b-card-text class="accordion-text">{{ tech.description }}</b-card-text>
            <b-card-text class="accordion-text">{{ tech.resolution }}</b-card-text>
            <b-card-text class="accordion-text">{{ tech.framerate }}</b-card-text>
            <a :href="tech.product_url">Link to {{ tech.name }}</a>
          </b-card>
      </b-collapse>
    </b-card>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import bootstrapVue from 'bootstrap-vue'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);
Vue.use(bootstrapVue);

const db_URL = "http://localhost:4000/get/tech";

export default {
    data: function() {
        return {
            technologies: []
        };
    },
    async mounted() {
        const resp = await axios.get(db_URL);
        this.technologies = resp.data;
        console.log(this.technologies);
    },
}
</script>
<style>
:root {
    --fontSizeBase: 14.5px;
    --lgWidth: 1280px;
    --smWidth: 800px;
    --mdWidth: 1000px;
    --maxWidth: 1366px;
    --fontsize: 17px/var(--fontSizeBase) * 100%;
}
.mb-1 {
    padding: .625em;
}
.accordion-text {
    text-align: left;
    padding: .625em;
}
.p-1 {
    display: block;
    background: #F5F5F5;
    padding: .625em;
    color: #000;
    text-align: left;
    word-break: break-word;
    font-family: "lato",sans-serif;
    letter-spacing: 1 / var(--fontSizeBase) * .5px + 0em;
    font-size: 15.5px;
    line-height: 1.75;
}
.accordion-button {
    border: 1px solid #F5F5F5;
    background: #F5F5F5;
    margin-bottom: 1em;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    word-break: break-word;
    color: #232323;
    line-height: 1.75;
    width: 100%;
    text-align: left;
}
.accordion-button:focus {
    outline: #0065A4 solid 3px !important;
    outline-offset: 6px;
}

.card-img-right {
    max-height: 15rem;
}
</style>
