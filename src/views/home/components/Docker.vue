<template>
  <div class="flex box-border absolute px-0 py-4 w-full bottom-0 left-0 h-4 border-t-2 border-gray-300 text-black">
    <div
      v-for="(item, index) in dockerList"
      :class="{'docker__item': true, 'docker__item--active': index === 0}"
      class="docker__item "
      :key="item.icon"
    >
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe665;', text: '首页' },
      { icon: '&#xe603;', text: '购物车' },
      { icon: '&#xe63e;', text: '订单' },
      { icon: '&#xe660;', text: '我的' }
    ]
    return { dockerList }
  }
})
</script>

<style lang="scss" scoped>

// .docker {
//   &__item {
//     flex: 1;
//     text-align: center;
//     .iconfont {
//       margin: .07rem 0 .02rem 0;
//       font-size: .18rem;
//     }
//     &--active {
//       color: #1FA4FC;
//     }
//   }
//   &__title {
//     font-size: .2rem;
//     transform: scale(.5, .5);
//     transform-origin: center top;
//   }
// }
</style>
