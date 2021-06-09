<template  e>
  <Top class="sticky"></Top>
  <div style="margin-bottom: 3.25rem" class="h-full bg-blue-100">
    <SwiperTop></SwiperTop>
    <ShareBody></ShareBody>
  </div>
  <Docker></Docker>
</template>

<script>
import { defineComponent } from 'vue'
import Top from '../Com-components/Top.vue'
import SwiperTop from '../MobSharePage/SwiperTop.vue'
import ShareBody from '../MobSharePage/ShareBody.vue'
import Docker from '../Com-components/Docker.vue'

export default defineComponent({
  name: 'SharePage',
  components: {
    Top,
    SwiperTop,
    ShareBody,
    Docker
  }
})
</script>

<style scoped>

</style>
