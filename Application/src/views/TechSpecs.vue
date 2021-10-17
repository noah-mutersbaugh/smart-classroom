<template>
  <div class="d-flex flex-column">
    <NavBar/>
    <accordion-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import AccordionComponent from '@/components/AccordionComponent.vue'

export default {
  name: 'Tech',
  components: {
    NavBar,
    AccordionComponent,
  }
}
</script>