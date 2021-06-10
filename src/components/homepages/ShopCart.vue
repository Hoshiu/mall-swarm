<template>
  <div class="bg-gray-50">
    <Header v-if="refresh"></Header>
    <Wares @click="handleClick"></Wares>
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
  },
  data () {
    return {
      refresh: true
    }
  },
  methods: {
    handleClick () {
      this.refresh = false
      this.$nextTick(() => {
        this.refresh = true
      }, 0)
    }
  }
})
</script>

<style scoped>

</style>
