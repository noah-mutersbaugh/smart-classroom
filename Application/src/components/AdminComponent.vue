<template>
  <div id="adminsettings" class="p-3 m-3 bg-light bg-gradient rounded">
    <table
      id="settings-table"
      class="
        table table-light table-hover table-striped table-responsive-lg
        p-5
      "
    >
      <thead>
        <tr>
          <th scope="col" style="width: 50%">Database Management</th>
          <th scope="col" style="width: 50%"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Professor</th>
          <td>
            <b-form
              @submit="onSubmitProfessor"
              @reset="onResetProfessor"
              v-if="show"
            >
            
              <b-form-group
                id="input-group-1"
                label="Name:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="formProfessor.profname"
                  placeholder="Enter Name"
                  required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Permission:"
                label-for="input-2"
              >      
              
                <b-form-input
                  id="input-2"
                  v-model="formProfessor.permission"
                  placeholder="0 = Admin 1 = Non-Admin Professor 2 = Student"
                  required
                ></b-form-input>
              </b-form-group>
               <div>
               <b-button @click="$bvToast.show.permission('placeholder')">Show toast</b-button>
              <b-toast id="my-toast" variant="warning" solid>
                <div id= "toast-title">
                  <div class="d-flex flex-grow-1 align-items-baseline">
                    <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
                    <strong class="mr-auto">Notice!</strong>
                    <small class="text-muted mr-2">42 seconds ago</small>
                  </div>
                </div>
      This is the content of the toast.
      It is short and to the point.
    </b-toast>
  </div>

              <b-form-group
                id="input-group-3"
                label="Email:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="formProfessor.email"
                  type="email"
                  placeholder="Enter Email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button
                type="submit"
                title="Save Settings"
                class="btn btn-success me-3"
              >
                <b-icon icon="cloud-upload"></b-icon>
              </b-button>
              <b-button
                type="reset"
                title="Remove Settings"
                class="btn btn-danger me-3"
              >
                <b-icon icon="trash"></b-icon>
              </b-button>
            </b-form>
          </td>
        </tr>
        <tr>
          <th scope="row">Technology</th>
          <td>
            <b-form @submit="onSubmitTechnology" @reset="onResetTechnology" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Name:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="formTechnology.name"
                  placeholder="Enter Name"
                  required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Description:"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="formTechnology.description"
                  placeholder="Enter Description"
                  required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="category:"
                label-for="input-6"
              >
                <b-form-input
                  id="input-6"
                  v-model="formTechnology.category"
                  placeholder="Enter Category Example: Projector, Camera, Microphone"
                  required
                >
                </b-form-input>
              </b-form-group>

              <b-button
                type="submit"
                title="Save Settings"
                class="btn btn-success me-3"
              >
                <b-icon icon="cloud-upload"></b-icon>
              </b-button>
              <b-button
                type="reset"
                title="Remove Settings"
                class="btn btn-danger me-3"
              >
                <b-icon icon="trash"></b-icon>
              </b-button>
            </b-form>
          </td>
        </tr>
        <tr>
          <th scope="row">Buildings</th>
          <td>
            <b-form @submit="onSubmitBuilding" @reset="onResetBuilding" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Name:"
                label-for="input-7"
              >
                <b-form-input
                  id="input-7"
                  v-model="formBuilding.name"
                  placeholder="Enter Building Name"
                  required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Location:"
                label-for="input-8"
              >
                <b-form-input
                  id="input-8"
                  v-model="formBuilding.location"
                  placeholder="Enter Location Example: Allendale"
                  required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Abbreviation:"
                label-for="input-9"
              >
                <b-form-input
                  id="input-9"
                  v-model="formBuilding.abbreviation"
                  placeholder="Enter Building Abbreviation Example: MAK"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button
                type="submit"
                title="Save Settings"
                class="btn btn-success me-3"
              >
                <b-icon icon="cloud-upload"></b-icon>
              </b-button>
              <b-button
                type="reset"
                title="Remove Settings"
                class="btn btn-danger me-3"
              >
                <b-icon icon="trash"></b-icon>
              </b-button>
            </b-form>
          </td>
        </tr>
        <tr>
          <th scope="row">Classrooms</th>
          <td>
            <b-form @submit="onSubmitClassroom" @reset="onResetClassroom" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Buildling Abbreviation:"
                label-for="input-10"
              >
                <b-form-input
                  id="input-10"
                  v-model="formClassroom.buildingabbr"
                  placeholder="Enter Building Abbreviation Example: MAK"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Number:"
                label-for="input-11"
              >
                <b-form-input
                  id="input-11"
                  v-model="formClassroom.num"
                  placeholder="1-1-10"
                  required
                ></b-form-input>
              </b-form-group>

                <b-form-group
                id="input-group-3"
                label="Size:"
                label-for="input-12"
              >
                <b-form-input
                  id="input-12"
                  v-model="formClassroom.size"
                  placeholder="0"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button
                type="submit"
                title="Save Settings"
                class="btn btn-success me-3"
              >
                <b-icon icon="cloud-upload"></b-icon>
              </b-button>
              <b-button
                type="reset"
                title="Remove Settings"
                class="btn btn-danger me-3"
              >
                <b-icon icon="trash"></b-icon>
              </b-button>
            </b-form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/*
* This script will get/place/delete information from multiple collections
* in the MongoDB database. The purpose of this script is to implement CRUD.
* This will allow the user to modify the database through the web app.
*/
import Vue from "vue";
import bootstrapVue from "bootstrap-vue";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(bootstrapVue);

export default {
  name: "TechSettingsTable",
  props: {
    msg: String,
  },
  // This is the format conversion from the form -> MongoDB database
  data() {
    return {
      formProfessor: {
        profname: "",
        buildingabbr: "",
        num: 0,
        settings: {
          video: {
            onoff: "",
            source: "",
            cable: ""
          },
          projectors: [
            {
              onoff: "",
              brightness: "",
              contrast: ""
            },
            {
              onoff: "",
              brightness: "",
              contrast: ""
            },
            {
              onoff: "",
              brightness: "",
              contrast: ""
            },
            {
              onoff: "",
              brightness: "",
              contrast: ""
            }
          ],
          camera: {
            onoff: "",
            tracking: "",
            zoom: ""
          },
          microphone: {
            onoff: "",
            volume: ""
          },
          recorder: {
            onoff: ""
          }
        },
        permission: 0,
        email: "",
      },
      formTechnology: {
        name: "",
        description: "",
        category: "",
      },
      formBuilding: {
        name: "",
        location: "",
        abbreviation: "",
      },
      formClassroom: {
        buildingabbr: "",
        num: "",
        size: 0,
        tech: [
          {
            id: "",
            name: "",
            qty: ""
          },
          {
            id: "",
            name: "",
            qty: ""
          },
          {
            id: "",
            name: "",
            qty: ""
          },
          {
            id: "",
            name: "",
            qty: ""
          },
          {
            id: "",
            name: "",
            qty: ""
          },
          {
            id: "",
            name: "",
            qty: ""
          },
        ],
        layoutids: [
          {
            id: "",
            name: ""
          },
          {
            id: "",
            name: ""
          },
            {
            id: "",
            name: ""
          }
        ],
        recsettings: [1, 2],
      },
      show: true,
      id: "",
    };
  },
  // These methods will convert the form information to alter data in the database
  methods: {
    onSubmitProfessor(event) {
      event.preventDefault();
      const profInfo = this.formProfessor;
      const postURL = "http://localhost:4000/new/professor";
      // Builds the format for professors
      const profObj = {
          profname: profInfo.profname,
          buildingabbr: profInfo.buildingabbr,
          num: profInfo.num,
          settings: profInfo.settings,
          permission: profInfo.permission,
          email: profInfo.email,
        };

      axios.post(postURL, profObj);
      alert("Professor Submitted");
    },
    onSubmitTechnology(event) {
      event.preventDefault();
      const techInfo = this.formTechnology;
      const postURL = "http://localhost:4000/new/tech";
      // Builds the format for technology
      const techObj = {
        name: techInfo.name,
        description: techInfo.description,
        category: techInfo.category,
      };

      axios.post(postURL, techObj);
      alert("Technology Submitted");
    },
    onSubmitBuilding(event) {
      event.preventDefault();
      const buildingInfo = this.formBuilding;
      const postURL = "http://localhost:4000/new/building";
      // Builds the format for buildings
      const buildingObj = {
        name: buildingInfo.name,
        location: buildingInfo.location,
        abbreviation: buildingInfo.abbreviation,
      };

      axios.post(postURL, buildingObj);
      alert("Building Submitted");
    },
    onSubmitClassroom(event) {
      event.preventDefault();
      const roomInfo = this.formClassroom;
      const postURL = "http://localhost:4000/new/classroom";
      // Builds the format for classrooms
      const roomObj = {
        buildingabbr: roomInfo.buildingabbr,
        num: roomInfo.num,
        size: roomInfo.size,
        tech: roomInfo.tech,
        layoutids: roomInfo.layoutids,
        recsettings: roomInfo.recsettings,
      };

      axios.post(postURL, roomObj);
      alert("Classroom Submitted");
    },
    onResetProfessor(event) {
      event.preventDefault();
      // Reset our form values
      this.formProfessor.profname = "";
      this.formProjector.permission = 0;
      this.formProjector.email = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onResetTechnology(event) {
      event.preventDefault();
      // Reset our form values
      this.formTechnology.name = "";
      this.formTechnology.description = "";
      this.formTechnology.category = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onResetBuilding(event) {
      event.preventDefault();
      // Reset our form values
      this.formBuilding.name = "";
      this.formBuilding.location = "";
      this.formBuilding.abbreviation = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onResetClassroom(event) {
      event.preventDefault();
      // Reset our form values
      this.formClassroom.buildingabbr = "";
      this.formClassroom.num = "";
      this.formClassroom.size = 0;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  // Unusued mounted decleration for future use
  async mounted() {},
};
</script>
<style>
#input-group-2 {
  margin-top: 1em;
}
#input-group-3 {
  margin-top: 1em;
}
.btn {
  margin-top: 1em;
}
</style>