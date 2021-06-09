<template>
  <div style="height: 3.25rem" class="flex box-border fixed w-full bottom-0 left-0 right-0 border-t-2 border-gray-300 bg-white">
    <div
      v-for="(item, index) in dockerList"
      class="text-center flex-1"
      :key="item.icon"
    >
      <div
        style="font-size: 1.2rem"
        class="iconfont pt-1.5 h-8"
        :class="{active: data.isActive}"
        v-html="item.icon"
        @click="handleItemClick(index)"
      />
      <div style="font-size: 0.65rem" class="py-0.5">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Docker',
  setup () {
    const router = useRouter()
    const data = reactive({
      isActive: false
    })
    const handleItemClick = (index) => {
      switch (index) {
        case 0: {
          router.push({ name: 'FirstPage' })
          break
        }
        case 1: {
          router.push({ name: 'SortPage' })
          break
        }
        case 2: {
          router.push({ name: 'SharePage' })
          break
        }
        case 3: {
          router.push({ name: 'ShopCart' })
          break
        }
        case 4: {
          router.push({ name: 'MyPage' })
          break
        }
      }
    }
    const dockerList = [
      { icon: '&#xe60c;', text: '首页' },
      { icon: '&#xe610;', text: '分类' },
      { icon: '&#xe608;', text: '推荐' },
      { icon: '&#xe607;', text: '购物车' },
      { icon: '&#xe7ab;', text: '我的' }
    ]
    return { data, dockerList, handleItemClick }
  }
})
</script>

<style lang="scss" scoped>
.active {
  animation: change 0.8s linear;
  color: rgb(180,42,42);
}
@keyframes change {
  0% {
    font-size: 1.2rem;
  }
  25% {
    font-size: 1rem;
  }
  50% {
    font-size: 1.2rem;
  }
  75% {
    font-size: 1.4rem;
  }
  100% {
    font-size: 1.2rem;
  }
}
</style>
