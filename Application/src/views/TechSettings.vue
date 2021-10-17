<template>
  <div class="d-flex flex-column">
    <NavBar msg="Technology Settings"/>
    <Accordion txt="This is content for this component" name=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
