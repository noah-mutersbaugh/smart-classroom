<template>
  <div class="d-flex flex-column">
    <NavBar/>
    <inventory-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import InventoryComponent from '@/components/InventoryComponent.vue'

export default {
  name: 'Inventory',
  components: {
    NavBar,
    InventoryComponent
  }
}
</script>