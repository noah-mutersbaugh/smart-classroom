<template>
  <div id="TechSettings" class="p-3 m-3 bg-light bg-gradient rounded">
    <table
      id="settings-table"
      class="
        table table-light table-hover table-striped table-responsive-lg
        p-5
      "
    >
      <thead>
        <tr>
          <th scope="col" style="width: 50%">Settings</th>
          <th scope="col" style="width: 50%"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Projector Settings</th>
          <td>
            <b-form @submit="onSubmitProjector" @reset="onResetProjector" v-if="show">
              <b-form-group id="input-group-1" label="Power:" v-slot="{ ariaDescribedby }">
                <b-form-radio-group id="radio-1" v-model="formProjector.projectorPower" :aria-describedby="ariaDescribedby">
                  <b-form-radio value="On">On</b-form-radio>
                  <b-form-radio value="Off">Off</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group id="input-group-2" label="Brightness:" label-for="input-2">
              <b-form-input id="input-2" v-model="formProjector.brightness" placeholder="100" required></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Contrast:" label-for="input-3">
              <b-form-input id="input-3" v-model="formProjector.contrast" placeholder="100" required></b-form-input>
              </b-form-group>

            <b-button type="submit" title="Save Settings" class="btn btn-success me-3">
              <b-icon icon="cloud-upload"></b-icon>
            </b-button>
            <b-button type="reset" title="Remove Settings" class="btn btn-danger me-3">
              <b-icon icon="trash"></b-icon>
            </b-button>
            <!--button for a link -->
            <input type="button" class="btn btn-info" value="Login to class" onclick=" relocate_home()">
            </b-form>
          </td>
        </tr>
        <tr>
          <th scope="row">Video Output Settings</th>
          <td>
            <b-form @submit="onSubmitVideo" @reset="onResetVideo" v-if="show">
              <b-form-group id="input-group-1" label="Power:" v-slot="{ ariaDescribedby }">
                <b-form-radio-group id="radio-2" v-model="formVideo.videoPower" :aria-describedby="ariaDescribedby">
                  <b-form-radio value="On">On</b-form-radio>
                  <b-form-radio value="Off">Off</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group id="input-group-2" label="Source:" v-slot="{ ariaDescribedby }">
                <b-form-radio-group id="radio-3" v-model="formVideo.source" :aria-describedby="ariaDescribedby">
                  <b-form-radio value="internal">Internal</b-form-radio>
                  <b-form-radio value="external">External</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group id="input-group-3" label="Cable:" v-slot="{ ariaDescribedby }">
                <b-form-radio-group id="radio-4" v-model="formVideo.cable" :aria-describedby="ariaDescribedby">
                  <b-form-radio value="hdmi">HDMI</b-form-radio>
                  <b-form-radio value="usbc">USB-C</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

            <b-button type="submit" title="Save Settings" class="btn btn-success me-3">
              <b-icon icon="cloud-upload"></b-icon>
            </b-button>
            <b-button type="reset" title="Remove Settings" class="btn btn-danger me-3">
              <b-icon icon="trash"></b-icon>
            </b-button>
            <!--button for a link -->
            <input type="button" class="btn btn-info" value="Login to class" onclick=" relocate_home()">
            </b-form>
          </td>
        </tr>
        <tr>
          <th scope="row">Camera Settings</th>
          <td>
            <b-form @submit="onSubmitCamera" @reset="onResetCamera" v-if="show">
              <b-form-group id="input-group-1" label="Power:" v-slot="{ ariaDescribedby }">
                <b-form-radio-group id="radio-2" v-model="formCamera.cameraPower" :aria-describedby="ariaDescribedby">
                  <b-form-radio value="on">On</b-form-radio>
                  <b-form-radio value="off">Off</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group id="input-group-2" label="Tracking:" v-slot="{ ariaDescribedby }">
                <b-form-radio-group id="radio-3" v-model="formCamera.tracking" :aria-describedby="ariaDescribedby">
                  <b-form-radio value="auto">Auto</b-form-radio>
                  <b-form-radio value="off">Off</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group id="input-group-3" label="Zoom:" label-for="input-3">
                <b-form-input id="input-3" v-model="formCamera.zoom" placeholder="100" required></b-form-input>
              </b-form-group>

            <b-button type="submit" title="Save Settings" class="btn btn-success me-3">
              <b-icon icon="cloud-upload"></b-icon>
            </b-button>
            <b-button type="reset" title="Remove Settings" class="btn btn-danger me-3">
              <b-icon icon="trash"></b-icon>
            </b-button>
            <!--button for a link -->
            <input type="button" class="btn btn-info" value="Login to class" onclick=" relocate_home()">
            </b-form>
          </td>
        </tr>
        <tr>
          <th scope="row">Microphone Settings</th>
          <td>
            <b-form @submit="onSubmitMic" @reset="onResetMic" v-if="show">
              <b-form-group id="input-group-1" label="Power:" v-slot="{ ariaDescribedby }">
                <b-form-radio-group id="radio-2" v-model="formMic.micPower" :aria-describedby="ariaDescribedby">
                  <b-form-radio value="on">On</b-form-radio>
                  <b-form-radio value="off">Off</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group id="input-group-2" label="Volume:" label-for="input-2">
                <b-form-input id="input-2" v-model="formMic.volume" placeholder="100" required></b-form-input>
              </b-form-group>

            <b-button type="submit" title="Save Settings" class="btn btn-success me-3">
              <b-icon icon="cloud-upload"></b-icon>
            </b-button>
            <b-button type="reset" title="Remove Settings" class="btn btn-danger me-3">
              <b-icon icon="trash"></b-icon>
            </b-button>
            <!--button for a link -->
            <input type="button" class="btn btn-info" value="Login to class" onclick=" relocate_home()">
            </b-form>
          </td>
        </tr>
        <tr>
          <th scope="row">Recording Settings</th>
          <td>
            <b-form @submit="onSubmitRec" @reset="onResetRec" v-if="show">
              <b-form-group id="input-group-1" label="Power:" v-slot="{ ariaDescribedby }">
                <b-form-radio-group id="radio-2" v-model="formRec.recPower" :aria-describedby="ariaDescribedby">
                  <b-form-radio value="on">On</b-form-radio>
                  <b-form-radio value="off">Off</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

            <b-button type="submit" title="Save Settings" class="btn btn-success me-3">
              <b-icon icon="cloud-upload"></b-icon>
            </b-button>
            <b-button type="reset" title="Remove Settings" class="btn btn-danger me-3">
              <b-icon icon="trash"></b-icon>
            </b-button>
            <!--button for a link -->
            <input type="button" class="btn btn-info" value="Login to class" onclick=" relocate_home()">
            </b-form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import bootstrapVue from 'bootstrap-vue'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
Vue.use(bootstrapVue);
const db_URL_Professors = "http://localhost:4000/get/professors";
export default {
  name: "TechSettingsTable",
  props: {
    msg: String,
  },
      data() {
      return {
        formProjector: {
          projectorPower: [],
          brightness: '',
          contrast: ''
        },
        formVideo: {
          videoPower: [],
          source: [],
          cable: []
        },
        formCamera: {
          cameraPower: [],
          tracking: [],
          zoom: ''
        },
        formMic: {
          micPower: "",
          volume: '',
        },
        formRec: {
          recPower: ""
        },
        show: true
      }
    },
   // const relocate_home(){
     //  location.href = "www.yoursite.com";
    //},
    methods: {
          onSubmitProjector(event) {
        event.preventDefault()
        classRoomAvilable: "this class is available ",
         location.href = "http://localhost:8080/classroom?MAK-111-01",
       //fullName: event.relocate_home() {
        // return this.location.href +" " + this.db_URL_Professors +this.classRoomAvilable
       
        alert(JSON.stringify(this.formProjector))
      },
      onSubmitVideo(event) {
        event.preventDefault()
        alert(JSON.stringify(this.formVideo))
      },
      onSubmitCamera(event) {
        event.preventDefault()
          event.relocate_home()
        alert(JSON.stringify(this.formCamera))
      },
      onSubmitMic(event) {
        event.preventDefault()
        event.relocate_home()
        alert(JSON.stringify(this.formMic))
      },
      onSubmitRec(event) {
        event.preventDefault()
          event.relocate_home()
        alert(JSON.string(this.formRec))
      },
      onResetProjector(event) {
        event.preventDefault()
  
        // Reset our form values
        this.formProjector.projectorPower = []
        this.formProjector.brightness = ''
        this.formProjector.contrast = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onResetVideo(event) {
        event.preventDefault()
        // Reset our form values
        this.formVideo.videoPower = []
        this.formVideo.source = []
        this.formVideo.cable = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onResetCamera(event) {
        event.preventDefault()
        // Reset our form values
        this.formCamera.cameraPower = []
        this.formCamera.tracking = []
        this.formCamera.zoom = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onResetMic(event) {
        event.preventDefault()
        // Reset our form values
        this.formMic.micPower = []
        this.formMic.volume = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onResetRec(event) {
        event.preventDefault()
        // Reset our form values
        this.formRec.recPower = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    async mounted() {
        var resp = await axios.get(db_URL_Professors);
        var professor = [];
        professor = resp.data;
        var projectors = [];
        projectors = professor[0].settings.projectors;
        this.formProjector.projectorPower = projectors[0].oldonoff;
        this.formProjector.brightness = projectors[0].oldbrightness;
        this.formProjector.contrast = projectors[0].oldcontrast;
    },
};
</script>
<style>
  #input-group-2{
    margin-top: 1em;
  }
  #input-group-3{
    margin-top: 1em;
  }
  .btn{
    margin-top: 1em;
  }
</style>