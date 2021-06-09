<template>
  <div class="bg-gray-50">
    <Header></Header>
    <Wares></Wares>
  </div>
  <Docker></Docker>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '../MobShopCart/ShopCart.vue'
import Wares from '../Com-components/Wares.vue'
import Docker from '../Com-components/Docker.vue'

export default defineComponent({
  name: 'ShopCart',
  components: {
    Header,
    Wares,
    Docker
  }
})
</script>

<style scoped>

</style>
