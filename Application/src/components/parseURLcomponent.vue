<!-- <div id="example-2">
  `greet` is the name of a method defined below 
  <button v-on:click="greet">Greet</button>
  <input type="button" class="btn btn-info" value="Input Button" onclick=" relocate_home()">
</div> <template>
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
            </b-form>
          </td>
        </tr>
        <tr>

</template>
-->


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
          <th scope="col" style="width: 70%">Settings</th>
          <th scope="col" style="width: 30%"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Projector Settings</th>
          <td>
            <button type="button" class="btn btn-success me-3">
              <b-icon icon="plus-square"></b-icon>
            </button>
            <button type="button" class="btn btn-primary me-3">
              <b-icon icon="pen"></b-icon>
            </button>
            <button type="button" class="btn btn-danger me-3">
              <b-icon icon="trash"></b-icon>
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">Video Output Settings</th>
          <td>
            <button type="button" class="btn btn-success me-3">
              <b-icon icon="plus-square"></b-icon>
            </button>
            <button type="button" class="btn btn-primary me-3">
              <b-icon icon="pen"></b-icon>
            </button>
            <button type="button" class="btn btn-danger me-3">
              <b-icon icon="trash"></b-icon>
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">Camera Settings</th>
          <td>
            <button type="button" class="btn btn-success me-3">
              <b-icon icon="plus-square"></b-icon>
            </button>
            <button type="button" class="btn btn-primary me-3">
              <b-icon icon="pen"></b-icon>
            </button>
            <button type="button" class="btn btn-danger me-3">
              <b-icon icon="trash"></b-icon>
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">Microphone Settings</th>
          <td>
            <button type="button" class="btn btn-success me-3">
              <b-icon icon="plus-square"></b-icon>
            </button>
            <button type="button" class="btn btn-primary me-3">
              <b-icon icon="pen"></b-icon>
            </button>
            <button type="button" class="btn btn-danger me-3">
              <b-icon icon="trash"></b-icon>
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">Recording Settings</th>
          <td>
            <button type="button" class="btn btn-success me-3">
              <b-icon icon="plus-square"></b-icon>
            </button>
            <button type="button" class="btn btn-primary me-3">
              <b-icon icon="pen"></b-icon>
            </button>
            <button type="button" class="btn btn-danger me-3">
              <b-icon icon="trash"></b-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TechSettingsTable",
  props: {
    msg: String,
  },
};
</script>