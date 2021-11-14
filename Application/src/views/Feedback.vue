<template>
  <div class="d-flex flex-column">
    <NavBar msg="Feedback Form"/>
    <FeedbackComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FeedbackComponent from '@/components/FeedbackComponent.vue'

export default {
  name: 'Feedback',
  components: {
    NavBar,
    FeedbackComponent
  }
}
</script>