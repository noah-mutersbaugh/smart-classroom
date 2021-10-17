<template>
  <div class="d-flex flex-column">
    <NavBar/>
    <Message msg="This is the feedback page"/>
    <Feedback/>
    <Accordion txt="This is content for this component" name=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from '@/components/Message.vue'
import NavBar from '@/components/NavBar.vue'
import Feedback from '@/components/FeedbackComponent.vue'

export default {
  name: 'Home',
  components: {
    Message,
    NavBar,
    Feedback
  }
}
</script>
