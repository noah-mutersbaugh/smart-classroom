<template>
  <div class="FAQ">
    <NavBar/>
    <Message msg="FAQ page"/>
    <FAQComponent/>
    
    <Accordion txt="This is content for this component" name=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from '@/components/Message.vue'
import NavBar from '@/components/NavBar.vue'
import FAQComponent from '@/components/FAQComponent.vue'
export default {
  name: 'FAQ',
  components: {
    Message,
    NavBar,
    FAQComponent
  }
}
</script>
