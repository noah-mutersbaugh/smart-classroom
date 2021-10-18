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