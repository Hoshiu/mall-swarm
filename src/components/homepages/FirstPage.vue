<template>
  <div>this is first page</div>
  <Docker></Docker>
</template>

<script>
import { defineComponent } from 'vue'
import Docker from '../Com-components/Docker.vue'

export default defineComponent({
  name: 'FirstPage',
  components: {
    Docker
  }
})
</script>

<style scoped>

</style>
