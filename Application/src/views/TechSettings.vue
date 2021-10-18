<template>
  <div class="TechSetting">
    <NavBar/>
    <Message msg=" Tech settings"/>
    <Accordion txt="This is content for this component" name=""/>
    <SettingsComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from '@/components/Message.vue'
import NavBar from '@/components/NavBar.vue'
import SettingsComponent from '@/components/SettingsComponent.vue'

export default {
  name: 'TechSettings',
  components: {
    Message,
    NavBar,
    SettingsComponent
  }
}
</script>
