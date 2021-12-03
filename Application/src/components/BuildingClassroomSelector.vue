<template>
  <div class="d-flex justify-content-center">
        <b-card no-body class="m-2 border-0">Building</b-card>
        <b-form-select class="m-2">
            <template #first>
                <b-form-select-option :value="null" disabled>-Please Select Building-</b-form-select-option>
            </template>
            <b-form-select-option  v-for="building in buildings" v-bind:key="building.abbreviation" :value="building.abbreviation">
                {{ building.abbreviation }}
            </b-form-select-option>
        </b-form-select>
        <b-card no-body class="m-2 border-0">Classroom</b-card>
        <b-form-select class="m-2">
            <template #first>
                <b-form-select-option :value="null" disabled>-Please Select Classroom-</b-form-select-option>
            </template>
            <b-form-select-option  v-for="classroom in classrooms" v-bind:key="classroom.num" :value="classroom.num">
                {{ classroom.num }}
            </b-form-select-option>
        </b-form-select>  </div>
</template>

<script>
/*
* This script will build and allow the population of drop down selections
* for both the building and classrooms of the University.
*/
import Vue from 'vue'
import bootstrapVue from 'bootstrap-vue'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);
Vue.use(bootstrapVue);

const db_URL_Classrooms = "http://localhost:4000/get/classrooms";
const db_URL_Buildings = "http://localhost:4000/get/buildings";

export default {
    data: function() {
        return{
            buildings: [],
            classrooms: []
        };
    },
    // created is used when fetching data
    async created() {
        var resp = await axios.get(db_URL_Buildings);

        this.buildings = resp.data;

        resp = await axios.get(db_URL_Classrooms);
        
        this.classrooms = resp.data;
    },
}
</script>

<style>

</style>
