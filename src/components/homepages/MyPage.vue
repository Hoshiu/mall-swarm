<template>
  <div class="h-full bg-gray-100">
    <Header></Header>
    <Order></Order>
    <div class="h-48"></div>
    <div class="h-48"></div>
    <div class="h-48"></div>
    <div class="h-48"></div>
    <div class="h-48"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '../MobMyPage/Header.vue'
import Order from '../MobMyPage/Order.vue'

export default defineComponent({
  name: 'MyPage',
  components: {
    Header,
    Order
  }
})
</script>

<style scoped>

</style>
