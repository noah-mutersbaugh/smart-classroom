<template>
  <div class="Map">
    <NavBar/>
    <Message msg="This is the map page"/>
    <MapComponent/>
    
    <Accordion txt="This is content for this component" name=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from '@/components/Message.vue'
import NavBar from '@/components/NavBar.vue'
import MapComponent from '@/components/MapComponent.vue'
export default {
  name: 'Map',
  components: {
    Message,
    NavBar,
    MapComponent
  }
}
</script>
