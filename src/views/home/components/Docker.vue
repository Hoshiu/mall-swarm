<template>
  <div class="flex box-border absolute w-full bottom-0 left-0 border-t-2 border-gray-300">
    <div
      v-for="(item, index) in dockerList"
      class="text-center flex-1"
      :key="item.icon"
    >
      <div
        style="font-size: 1.2rem"
        class="iconfont pt-2 h-8"
        :class="activeClass == index ? 'active' : ''"
        v-html="item.icon"
        @click="handleItemClick(index)"
        />
      <div style="font-size: 0.7rem" class="pt-1 pb-2">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Docker',
  data () {
    return {
      activeClass: -1
    }
  },
  methods: {
    handleItemClick (index) {
      if (this.activeClass === -1 && index === 0) {
        return
      } else {
        this.activeClass = index
      }
      this.$emit('index', this.activeClass)
    }
  },
  setup () {
    const dockerList = [
      { icon: '&#xe60c;', text: '首页' },
      { icon: '&#xe610;', text: '分类' },
      { icon: '&#xe608;', text: '推荐' },
      { icon: '&#xe607;', text: '购物车' },
      { icon: '&#xe7ab;', text: '我的' }
    ]
    return { dockerList }
  }
})
</script>

<style lang="scss" scoped>
.active {
  animation: change 0.5s linear;
}
@keyframes change {
  0% {
    font-size: 1.2rem;
  }
  50% {
    font-size: 1rem;
  }
  100% {
    font-size: 1.2rem;
  }
}
</style>
