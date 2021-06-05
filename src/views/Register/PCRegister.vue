<template>
  <div style="width: 1536px" class="w-screen">
    <PCLoginTop></PCLoginTop>
    <PCRegisterBox></PCRegisterBox>
    <PCLoginFoot></PCLoginFoot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import PCLoginTop from '../login/PCLogin/PCLoginTop.vue'
import PCRegisterBox from './PCRegister/PCRegisterBox.vue'
import PCLoginFoot from '../login/PCLogin/PCLoginFoot.vue'

export default defineComponent({
  name: 'PCRegister',
  components: {
    PCLoginTop,
    PCRegisterBox,
    PCLoginFoot
  }
})
</script>

<style scoped>

</style>
