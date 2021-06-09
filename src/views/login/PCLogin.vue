<template>
  <div class="w-screen">
    <PCLoginTop></PCLoginTop>
    <PCLoginBox></PCLoginBox>
    <PCLoginFoot></PCLoginFoot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import PCLoginTop from '../../components/PCLogin/PCLoginTop.vue'
import PCLoginBox from '../../components/PCLogin/PCLoginBox.vue'
import PCLoginFoot from '../../components/PCLogin/PCLoginFoot.vue'

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
