<template>
  <div class="URL">
    <NavBar msg="URL"/>
    <MapComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MapComponent from '@/components/parseURLcomponent.vue'

export default {
  name: 'URL',
  components: {
    NavBar,
    MapComponent
  }
}
</script>
