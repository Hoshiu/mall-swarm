<template>
  <div style="width: 1536px" class="w-screen">
    <PCLoginTop></PCLoginTop>
    <PCLoginBox></PCLoginBox>
    <PCLoginFoot></PCLoginFoot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import PCLoginTop from './PCLogin/PCLoginTop.vue'
import PCLoginBox from './PCLogin/PCLoginBox.vue'
import PCLoginFoot from './PCLogin/PCLoginFoot.vue'

export default defineComponent({
  name: 'PCLogin',
  components: {
    PCLoginTop,
    PCLoginBox,
    PCLoginFoot

  }
})
</script>

<style scoped>

</style>
