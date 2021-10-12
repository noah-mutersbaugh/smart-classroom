<template>
  <div id="inv">
    <h1>Classrooms and their Associated Technologies</h1>
    <table id="invtable">
      <thead>
        <tr>
          <th style="width: 20px;">#</th>
          <th style="width: 25px;">Abbreviation</th>
          <th style="width: 50px;">Classroom #</th>
          <th style="width: 100px;">Classroom Size</th>
          <th style="width: 300px;">Tech</th>
          <th style="width: 300px;">Layouts</th>
          <th style="width: 200px;">Recommended Settings</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="message in messages" v-bind:key="message._id">
          <td>{{ message._id }}</td>
          <td>{{ message.buildingabbr }}</td>
          <td>{{ message.num }}</td>
          <td>{{ message.size }}</td>
          <td>
            <ul v-for="{id, name, qty} in message.tech" v-bind:key="id">
              <li>{{ qty }} {{ name }}</li>
            </ul>
          </td>
          <td>
            <ul v-for="{id, name} in message.layoutids" v-bind:key="id">
              <li>{{ name }}</li>
            </ul>
          </td>
          <td>
            <ul v-for="recsettings in message.recsettings" v-bind:key="recsettings">
              <li>{{ recsettings }}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import VueAxios from 'vue-axios';
import Vue from 'vue';
import axios from 'axios';

Vue.use(VueAxios, axios);

const db_URL = "http://localhost:4000/get/classrooms";

export default {

  name: 'Inventory',
  data: function() {
    return{
      messages: []
    }
  },
  async mounted() {
    const resp = await axios.get(db_URL);

    this.messages = resp.data;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: "EB Garamond",serif;
  font-weight: normal;
  text-transform: none;
  letter-spacing: .0144827586em;
  font-size: 289.6551724138%;
  padding-top: 0;
  margin-bottom: .3452380952em;
  color: #000;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: circle;
  padding: 0 0;
  margin: 0 0 1em 0;
  height: 100%;
}
li {
      display: list-item;
			padding: .325em 0;
			line-height: 1.0;
			margin: 0 0;
      vertical-align: top;
}

table {
	width: 100%;
	margin-bottom: 20px;
	max-width: 100%;
	background-color: transparent;
	border-collapse: collapse;
	border-spacing: 0;
	margin-bottom: 1em;
}
table > thead > tr > td,
table > tbody > tr > td,
table > tfoot > tr > td {
	padding: .85em;
	vertical-align: top;
	border-top: 1px solid #dddddd;
}
table > tbody > tr {
  text-align: left;
}
table > tbody > tr:nth-child(odd) > td {
	background-color: #f9f9f9;
}
table > thead > tr > th,
table > tbody > tr > th {
	padding: .85em;
	vertical-align: bottom;
	text-align: left;
	border-bottom: 2px solid #dddddd;
	border-top: 0;
	background: #0065a4;
	color: #FFF;
}
a {
  color: #42b983;
}
</style>