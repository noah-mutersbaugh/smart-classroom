<template>
  <div class="Tech">
    <NavBar/>
    <inventory-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import InventoryComponent from '@/components/InventoryComponent.vue'

export default {
  name: 'Tech',
  components: {
    NavBar,
    InventoryComponent
  }
}
</script>