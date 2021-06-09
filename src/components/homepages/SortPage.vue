<template>
  <Top></Top>
  <div style="margin-bottom: 3.25rem" class="fixed overflow-hidden inset-0 mt-12">
    <ScrollLeft @index="handlePageIndex"></ScrollLeft>
    <ScrollRight1 :pageIndex="data.pageIndex"></ScrollRight1>
  </div>
  <Docker></Docker>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import Top from '../Com-components/Top.vue'
import ScrollLeft from '../MobSortPage/ScrollLeft.vue'
import ScrollRight1 from '../MobSortPage/ScrollRight.vue'
import Docker from '../Com-components/Docker.vue'

export default defineComponent({
  name: 'SortPage',
  components: {
    Top,
    ScrollLeft,
    ScrollRight1,
    Docker
  },
  setup () {
    const data = reactive({
      pageIndex: 0
    })
    const handlePageIndex = (param) => {
      data.pageIndex = param
    }
    return { data, handlePageIndex }
  }
})
</script>

<style scoped>

</style>
