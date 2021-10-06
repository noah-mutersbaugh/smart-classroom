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
        <tr v-for="row in rows" v-bind:key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.buildingabbr }}</td>
          <td>{{ row.num }}</td>
          <td>{{ row.size }}</td>
          <td>
            <ul v-for="tech in row.tech" v-bind:key="tech.name">
              <li>{{ tech.name }}</li>
            </ul>
          </td>
          <td>
            <ul v-for="layout in row.layouts" v-bind:key="layout.name">
              <li>{{ layout.name }}</li>
            </ul>
          </td>
          <td>{{ row.recsettings }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

  name: 'Inventory',
  data: function() {
    return{
      rows: [
        { id: 1,
          buildingabbr: "MAK",
          num: "A-1-111",
          size: "38 Students",
          tech: [
            { name: "Extron ShareLink Pro 500" },
            { name: "Logitech Rally Plus Microphones" },
            { name: "Logitech Rally Plus PTZ Camera" },
            { name: "Logitech Scribe" },
            { name: "Epson PowerLite L510U" },
            { name: "Document Camera" }
          ],
          layouts: [
            { name: "Group Breakout Mode" },
            { name: "Presentation Mode" },
            { name: "Discussion Mode" },
          ],
          recsettings: "N/A"
        },
        { id: 2,
          buildingabbr: "MAK",
          num: "B-1-110",
          size: "36 Students",
          tech: [
            { name: "Extron ShareLink Pro 500" },
            { name: "Shure MXA910" },
            { name: "1Beyond AutoTracker 3" },
            { name: "1Beyond PTZ-IP Camera" },
            { name: "Epson PowerLite L510U" },
            { name: "Document Camera" }
          ],
          layouts: [
            { name: "Group Breakout Mode" },
            { name: "Presentation Mode" },
            { name: "Discussion Mode" },
          ],
          recsettings: "N/A"
        },
        { id: 3,
          buildingabbr: "DEV",
          num: "E-1-121",
          size: "34 Students",
          tech: [
            { name: "Extron ShareLink Pro 500" },
            { name: "Shure MXA910" },
            { name: "1Beyond AutoTracker 3" },
            { name: "1Beyond PTZ-IP Camera" },
            { name: "Epson PowerLite L510U" },
            { name: "Document Camera" }
          ],
          layouts: [
            { name: "Group Breakout Mode" },
            { name: "Presentation Mode" },
            { name: "Discussion Mode" },
          ],
          recsettings: "N/A"
        },
      ]
    }
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