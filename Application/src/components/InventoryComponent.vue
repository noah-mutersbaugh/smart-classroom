<template>
  <div id="inv" class="p-3 m-3 bg-light bg-gradient rounded">
    <table
      id="invtable"
      class="table table-hover table-striped table-responsive-lg p-5"
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Abbreviation</th>
          <th>Room Number</th>
          <th>Size</th>
          <th>Tech</th>
          <th>Layouts</th>
          <th>Recommended Settings</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="message in messages" v-bind:key="message._id">
          <td>{{ message._id }}</td>
          <td>{{ message.buildingabbr }}</td>
          <td>{{ message.num }}</td>
          <td>{{ message.size }}</td>
          <td>
            <ul v-for="{ id, name, qty } in message.tech" v-bind:key="id">
              <li>{{ qty }} {{ name }}</li>
            </ul>
          </td>
          <td>
            <ul v-for="{ id, name } in message.layoutids" v-bind:key="id">
              <li>{{ name }}</li>
            </ul>
          </td>
          <td>
            <ul
              v-for="recsettings in message.recsettings"
              v-bind:key="recsettings"
            >
              <li>{{ recsettings }}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import VueAxios from "vue-axios";
import Vue from "vue";
import axios from "axios";

Vue.use(VueAxios, axios);

const db_URL = "http://localhost:4000/get/classrooms";

export default {
  name: "Inventory",
  data: function () {
    return {
      messages: [],
      fields: [
        "id",
        "abbreviation",
        "classroom_number",
        "classroom_size",
        "technology",
        "layouts",
        "recommended_settings",
      ],
      items: [],
    };
  },
  async mounted() {
    const resp = await axios.get(db_URL);

    this.messages = resp.data;
    this.items = resp.data;
    console.log(this.messages);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#inv {
  font-size: 0.8rem;
}

thead {
  background-color: #0065a4;
  color: white;
}
</style>