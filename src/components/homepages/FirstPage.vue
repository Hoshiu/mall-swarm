<template>
  <div class="bg-gray-50 min-h-full">
    <Header @changeId="setId"/>
    <ContentPart />
  </div>
  <Docker :index="index"></Docker>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '../MobHome/Header.vue'
import ContentPart from '../MobHome/ContentPart.vue'
import Docker from '../Com-components/Docker.vue'

export default defineComponent({
  name: 'FirstPage',
  components: {
    Header,
    ContentPart,
    Docker
  },
  data () {
    return {
      id: 0,
      index: 0
    }
  },
  methods: {
    setId (id) {
      this.$emit('setId', id)
    }
  }
})
</script>

<style scoped>
</style>
