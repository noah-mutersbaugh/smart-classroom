<template>
    <div class ="home">
        <transititon name ="toast">
            <Toast v-if="showToast"/>
        </transititon> 
        <Todos @badValue ="trigerToast" /> 
        </div>          
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import TechSettingsTable from '../components/TechSettingsTable.vue'
import Toad from '../components/Todos'
export default {
    component : {Toast, Todos},
    setup(){
        const showToast = ref(false)

        const triggerToast = () =>{
            showToast.value = true;
            setTimeout(() => showToast.value = false, 3000)

        }
        return {showToast,triggerToast,showP}
    }
}
</script>
<style>
.toast-enter-from{
    opacity: 0;
}
.toast-enter-to{}
.toast-enter-active{}
</style>