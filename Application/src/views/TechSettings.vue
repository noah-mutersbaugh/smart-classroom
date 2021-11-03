<template>
  <div class="d-flex flex-column">
    <NavBar msg="Technology Settings"/>
    <building-classroom-selector></building-classroom-selector>
    <tech-settings-table></tech-settings-table>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import TechSettingsTable from '../components/TechSettingsTable.vue'
import BuildingClassroomSelector from '../components/BuildingClassroomSelector.vue'

export default {
  name: 'TechSettings',
  components: {
    NavBar,
    TechSettingsTable,
    BuildingClassroomSelector
  }
}
</script>
