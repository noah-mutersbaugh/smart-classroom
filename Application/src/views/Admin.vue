<template>
  <div class="d-flex flex-column">
    <NavBar msg="Admin Center"/>
    <!-- <building-classroom-selector></building-classroom-selector> -->
    <admin-component></admin-component>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import AdminComponent from '../components/AdminComponent.vue'
// import BuildingClassroomSelector from '../components/BuildingClassroomSelector.vue'

export default {
  name: 'Admin',
  components: {
    NavBar,
    AdminComponent,
    // BuildingClassroomSelector
  }
}
</script>
