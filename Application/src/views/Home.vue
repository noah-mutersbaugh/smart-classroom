<template>
  <div class="d-flex flex-column">
    <NavBar/>
    <Message msg="This is the home page"/>
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
