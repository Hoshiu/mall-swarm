<template>
  <div class="flex box-border absolute w-full bottom-0 left-0 border-t-2 border-gray-300">
    <div
      v-for="(item, index) in dockerList"
      :class="{ 'docker__item--active': index === 0}"
      class="text-center flex-1"
      :key="item.icon"
    >
      <div class="iconfont text-base" v-html="item.icon" />
      <div class="text-base transform scale-50 origin-center origin-top">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe62a;', text: '首页' },
      { icon: '&#xe603;', text: '购物车' },
      { icon: '&#xe63e;', text: '订单' },
      { icon: '&#xe660;', text: '我的' }
    ]
    return { dockerList }
  }
})
</script>

<style lang="scss" scoped>
.active {
  color: #1FA4FC;
}
</style>
