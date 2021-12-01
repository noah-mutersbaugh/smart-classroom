<template>
  <div id="TechSettings" class="p-3 m-3 bg-light bg-gradient rounded">
    <div>{{this.$store.state.adminLoggedIn}}</div>
    <table
      v-show="this.$store.state.adminLoggedIn"
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
            <b-form
              @submit="onSubmitProjector"
              @reset="onResetProjector"
              v-if="show"
            >
              <b-form-group
                id="input-group-1"
                label="Power:"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio-group
                  id="radio-1"
                  v-model="formProjector.projectorPower"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-radio value="On">On</b-form-radio>
                  <b-form-radio value="Off">Off</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Brightness:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="formProjector.brightness"
                  placeholder="100"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Contrast:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="formProjector.contrast"
                  placeholder="100"
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
                title="Clear Settings"
                class="btn btn-danger me-3"
              >
                Clear
              </b-button>
            </b-form>
          </td>
        </tr>
        <tr>
          <th scope="row">Video Output Settings</th>
          <td>
            <b-form @submit="onSubmitVideo" @reset="onResetVideo" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Power:"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio-group
                  id="radio-2"
                  v-model="formVideo.videoPower"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-radio value="On">On</b-form-radio>
                  <b-form-radio value="Off">Off</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Source:"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio-group
                  id="radio-3"
                  v-model="formVideo.source"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-radio value="internal">Internal</b-form-radio>
                  <b-form-radio value="external">External</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Cable:"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio-group
                  id="radio-4"
                  v-model="formVideo.cable"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-radio value="hdmi">HDMI</b-form-radio>
                  <b-form-radio value="usbc">USB-C</b-form-radio>
                </b-form-radio-group>
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
                title="Clear Settings"
                class="btn btn-danger me-3"
              >
                Clear
              </b-button>
            </b-form>
          </td>
        </tr>
        <tr>
          <th scope="row">Camera Settings</th>
          <td>
            <b-form @submit="onSubmitCamera" @reset="onResetCamera" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Power:"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio-group
                  id="radio-2"
                  v-model="formCamera.cameraPower"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-radio value="on">On</b-form-radio>
                  <b-form-radio value="off">Off</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Tracking:"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio-group
                  id="radio-3"
                  v-model="formCamera.tracking"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-radio value="auto">Auto</b-form-radio>
                  <b-form-radio value="off">Off</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Zoom:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="formCamera.zoom"
                  placeholder="100"
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
                title="Clear Settings"
                class="btn btn-danger me-3"
              >
                Clear
              </b-button>
            </b-form>
          </td>
        </tr>
        <tr>
          <th scope="row">Microphone Settings</th>
          <td>
            <b-form @submit="onSubmitMic" @reset="onResetMic" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Power:"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio-group
                  id="radio-2"
                  v-model="formMic.micPower"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-radio value="on">On</b-form-radio>
                  <b-form-radio value="off">Off</b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Volume:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="formMic.volume"
                  placeholder="100"
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
                title="Clear Settings"
                class="btn btn-danger me-3"
              >
                Clear
              </b-button>
            </b-form>
          </td>
        </tr>
        <tr>
          <th scope="row">Recording Settings</th>
          <td>
            <b-form @submit="onSubmitRec" @reset="onResetRec" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Power:"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio-group
                  id="radio-2"
                  v-model="formRec.recPower"
                  :aria-describedby="ariaDescribedby"
                >
                  <b-form-radio value="on">On</b-form-radio>
                  <b-form-radio value="off">Off</b-form-radio>
                </b-form-radio-group>
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
                title="Clear Settings"
                class="btn btn-danger me-3"
              >
                Clear
              </b-button>
            </b-form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import bootstrapVue from "bootstrap-vue";
import VueAxios from "vue-axios";
import axios from "axios";

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
        brightness: 0,
        contrast: 0,
      },
      formVideo: {
        videoPower: [],
        source: [],
        cable: [],
      },
      formCamera: {
        cameraPower: [],
        tracking: [],
        zoom: "",
      },
      formMic: {
        micPower: "",
        volume: "",
      },
      formRec: {
        recPower: "",
      },
      show: true,
      id: "",
    };
  },
  methods: {
    onSubmitProjector(event) {
      event.preventDefault();
      const projInfo = this.formProjector;
      const patchURL = "http://localhost:4000/patch/professors/" + this.id;
      const projObj = [
        {
          onoff: projInfo.projectorPower,
          brightness: projInfo.brightness,
          contrast: projInfo.contrast,
        },
        {
          onoff: projInfo.projectorPower,
          brightness: projInfo.brightness,
          contrast: projInfo.contrast,
        },
        {
          onoff: projInfo.projectorPower,
          brightness: projInfo.brightness,
          contrast: projInfo.contrast,
        },
        {
          onoff: projInfo.projectorPower,
          brightness: projInfo.brightness,
          contrast: projInfo.contrast,
        },
      ];

      axios.patch(patchURL, {
        "settings.projectors": projObj,
      });
      alert("Projector Settings Saved");
    },
    onSubmitVideo(event) {
      event.preventDefault();
      const videoInfo = this.formVideo;
      const patchURL = "http://localhost:4000/patch/professors/" + this.id;
      const videoObj = {
        onoff: videoInfo.videoPower,
        source: videoInfo.source,
        cable: videoInfo.cable,
      };

      axios.patch(patchURL, {
        "settings.video": videoObj,
      });
      alert("Video Settings Saved");
    },
    onSubmitCamera(event) {
      event.preventDefault();
      const cameraInfo = this.formCamera;
      const patchURL = "http://localhost:4000/patch/professors/" + this.id;
      const cameraObj = {
        onoff: cameraInfo.cameraPower,
        tracking: cameraInfo.tracking,
        zoom: cameraInfo.zoom,
      };

      axios.patch(patchURL, {
        "settings.camera": cameraObj,
      });
      alert("Camera Settings Saved");
    },
    onSubmitMic(event) {
      event.preventDefault();
      const micInfo = this.formMic;
      const patchURL = "http://localhost:4000/patch/professors/" + this.id;
      const micObj = {
        onoff: micInfo.micPower,
        volume: micInfo.volume,
      };

      axios.patch(patchURL, {
        "settings.microphone": micObj,
      });
      alert("Microphone Settings Saved");
    },
    onSubmitRec(event) {
      event.preventDefault();
      const recInfo = this.formRec;
      const patchURL = "http://localhost:4000/patch/professors/" + this.id;
      const recObj = {
        onoff: recInfo.recPower,
      };

      axios.patch(patchURL, {
        "settings.recorder": recObj,
      });
      alert("Recorder Settings Saved");
    },
    onResetProjector(event) {
      event.preventDefault();
      // Reset our form values
      this.formProjector.projectorPower = [];
      this.formProjector.brightness = "";
      this.formProjector.contrast = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onResetVideo(event) {
      event.preventDefault();
      // Reset our form values
      this.formVideo.videoPower = [];
      this.formVideo.source = [];
      this.formVideo.cable = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onResetCamera(event) {
      event.preventDefault();
      // Reset our form values
      this.formCamera.cameraPower = [];
      this.formCamera.tracking = [];
      this.formCamera.zoom = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onResetMic(event) {
      event.preventDefault();
      // Reset our form values
      this.formMic.micPower = [];
      this.formMic.volume = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onResetRec(event) {
      event.preventDefault();
      // Reset our form values
      this.formRec.recPower = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  async mounted() {
    var resp = await axios.get(db_URL_Professors);

    this.$gapi.currentUser().then((profile) => {
      var professors = [];
      professors = resp.data;
      for (let element of professors) {
        if (element.email === profile.email) {
          this.id = element._id;
          var projectors = [];
          projectors = element.settings.projectors;
          var video = element.settings.video;
          var camera = element.settings.camera;
          var mic = element.settings.microphone;
          var rec = element.settings.recorder;
          this.formProjector.projectorPower = projectors[0].onoff;
          this.formProjector.brightness = projectors[0].brightness;
          this.formProjector.contrast = projectors[0].contrast;
          this.formVideo.videoPower = video.onoff;
          this.formVideo.source = video.source;
          this.formVideo.cable = video.cable;
          this.formCamera.cameraPower = camera.onoff;
          this.formCamera.tracking = camera.tracking;
          this.formCamera.zoom = camera.zoom;
          this.formMic.micPower = mic.onoff;
          this.formMic.volume = mic.volume;
          this.formRec.recPower = rec.onoff;
        }
      }
    });
  },
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