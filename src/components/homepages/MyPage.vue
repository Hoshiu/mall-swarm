<template>
  <div style="margin-bottom: 3.25rem" class="h-full bg-gray-50">
    <Header></Header>
    <Order1></Order1>
    <Order2></Order2>
    <Wares></Wares>
  </div>
  <Docker></Docker>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '../MobMyPage/Header.vue'
import Order1 from '../MobMyPage/Order1.vue'
import Order2 from '../MobMyPage/Order2.vue'
import Wares from '../Com-components/Wares.vue'
import Docker from '../Com-components/Docker.vue'

export default defineComponent({
  name: 'MyPage',
  components: {
    Header,
    Order1,
    Order2,
    Wares,
    Docker
  }
})
</script>

<style scoped>

</style>
