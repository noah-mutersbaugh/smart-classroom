<template>
  <div class="Inventory">
    <NavBar/>
    <h1>This is an Inventory page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Inventory',
  components: {
    NavBar
  }
}
</script>
