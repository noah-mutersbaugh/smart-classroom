<template>
  <div class="home">
    <NavBar/>
    <Message msg="This is the map page"/>
    <Accordion txt="This is content for this component" name=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from '@/components/Message.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    Message,
    NavBar
  }
}
</script>
