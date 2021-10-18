<template>
  <div class="d-flex flex-column">
    <NavBar msg="Feedback Form"/>
    <Feedback/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Feedback from '@/components/FeedbackComponent.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Feedback
  }
}
</script>