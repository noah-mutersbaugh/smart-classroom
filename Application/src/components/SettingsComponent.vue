<!--//record settings
//mic settings
//projector settings
//camera settings
//vid output settings
//accordian will work best here
ask about this stuff, what setting are we talking about 
add button for the settings remove accordion
-->
<template>
   <div class = "container">
       <div class="row">
           <div class= col-md-10>
               <button class ="btn btn-default"> Mic settings </button>
               <button class ="btn btn-default"> projector Settings </button>
               <button class ="btn btn-default"> Camera Settings </button>
               <button class ="btn btn-default"> Video output </button>
               <button class ="btn btn-default"> Record Settings </button>
               <button class ="btn btn-default"> Document reeader Settings </button>

               <!--<a class="btn-default" href="#" >Mic Settings</a>
                 input class="btn btn-default" type="button" value="input"
               input class="btn btn-default" type="button" value="submit"-->
           </div>
       </div>
    </div>

</template>

<script>
import Vue from 'vue';
import bootstrapVue from 'bootstrap-vue';
//import Button from '../views/Button.vue';
Vue.use(bootstrapVue);
export default {
  name: "button",
  props: {
    title: String,
    body: String,
    link: String,
    link_desc: String,
  },
};
</script>

<style scoped>
 button {
    display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
 background-color: #088dda;
  padding: 30px 700px;
    }
     
</style>