 const application.parseURLcomponent()<template>
  <div class="d-flex flex-column">
    <NavBar msg="URL"/>
<parseURLcomponent></parseURLcomponent>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import parseURLcomponent from '../components/TechSettingsTable.vue'

export default {
  name: 'parseURL',
  components: {
    NavBar,
    parseURLcomponent
  }
}
</script>

