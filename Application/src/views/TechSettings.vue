<template>
  <div class="d-flex flex-column">
    <NavBar msg="Technology Settings"/>
    <tech-settings-table></tech-settings-table>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import TechSettingsTable from '../components/TechSettingsTable.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    TechSettingsTable
  }
}
</script>
