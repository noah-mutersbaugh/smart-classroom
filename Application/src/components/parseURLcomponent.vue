<script src="https://gvsu.edu/smart-classroom?room=MK-1-111"></script>
 <template>
  <td>
   <div class = "container">
       <div class="row">
           <div class= col-md-10>
             <b-form @submit="onSubmitLocation" @reset="onLocation" v-if="show">
               <button onclick="location.href='https://gvsu.edu/smart-classroom?room=MK-1-111'" type="button">
                  https://gvsu.edu/smart-classroom?room=MK-1-111</button>
            </div>
       </div>
    </div>
  </td>
</template>

<script>
import Vue from 'vue';
import bootstrapVue from 'bootstrap-vue';
//import Button from '../views/Button.vue';



Vue.use(bootstrapVue);
export default {
  name: "urlComponent",
  props: {
    title: String,
    body: String,
    link: String,
    link_desc: String,
  },
};

function getParamater(){

}
   methods: {
      onSubmitLocation(href){
        event.preventDefault()
        alert(JSON.stringify())
      }
   };

</script>
function getLocation(href) {
    var location = document.createElement("a");
    location.href = href;
    // IE doesn't populate all link properties when setting .href with a relative URL,
    // however .href will return an absolute URL which then can be used on itself
    // to populate these additional fields.
    if (location.host == " ") {
      location.href = location.href;
    }
    return location;
};
var room = this.$route.query.room
function notLocation(href) {    //Hypertext REFerenc
    var room = this.$route.query.room;
    location.href = href;
    // IE doesn't populate all link properties when setting .href with a relative URL,
    // however .href will return an absolute URL which then can be used on itself
    // to populate these additional fields.
    if (location.host == "" && location.database) {
        if(loggedIn()&&ValidUser()){
             location.href = location.href
             //techSettings(room)
             
        }
    
    }
    return location;
};
//check to see if valid
function Location(href) { }
//check database to see if its in the location