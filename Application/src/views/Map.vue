<template>
  <div class="Map">
    <NavBar msg="Map"/>
    <MapComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MapComponent from '@/components/MapComponent.vue'

export default {
  name: 'Map',
  components: {
    NavBar,
    MapComponent
  }
}
</script>
