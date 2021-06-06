<template>
  <FirstPage v-if="componentID ===  0"></FirstPage>
  <SortPage v-if="componentID ===  1"></SortPage>
  <SharePage v-if="componentID ===  2"></SharePage>
  <ShopCart v-if="componentID ===  3"></ShopCart>
  <MyPage v-if="componentID ===  4"></MyPage>
  <Docker @index="handleChangeIndex"></Docker>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Docker from './components/Docker.vue'
import FirstPage from './components/homepages/FirstPage.vue'
import SortPage from './components/homepages/SortPage.vue'
import SharePage from './components/homepages/SharePage.vue'
import ShopCart from './components/homepages/ShopCart.vue'
import MyPage from './components/homepages/MyPage.vue'

export default defineComponent({
  name: 'MobHome',
  components: {
    Docker,
    FirstPage,
    SortPage,
    SharePage,
    ShopCart,
    MyPage
  },
  data () {
    return {
      componentID: 0
    }
  },
  methods: {
    handleChangeIndex (param: number) {
      this.componentID = param
    }
  }
})
</script>
