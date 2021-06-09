<template>
  <div
    class="fixed flex h-12 w-full back justify-center items-center text-base text-white z-20"
    :style="data.opacityStyle"
  >
    我的ID
  </div>
  <ul class="text-white">
    <li class="inline fixed top-0 right-16 mx-3 my-2 z-30">
      <i style="font-size: 1.5rem" class="iconfont">&#xe612;</i>
    </li>
    <li class="inline fixed top-0 right-8 mx-3 my-2 z-30">
      <i style="font-size: 1.5rem" class="iconfont">&#xe62e;</i>
    </li>
    <li class="inline fixed top-0 right-0 mx-3 my-2 z-30">
      <i style="font-size: 1.5rem" class="iconfont">&#xe635;</i>
    </li>
  </ul>

  <div class="h-40">
    <div class="back h-40 bg-cover bg-bottom bg-no-repeat">
      <div class="inline-block float-left pl-5 pr-4 pt-8 w-28">
        <img
          src="../../../public/erweima.png"
          class="rounded-full"
        >
      </div>
      <div class="inline-block float-left pt-9">
        <span class="text-xl font-bold text-pink-400">我的ID</span>
      </div>
      <div style="padding-top:5.2rem" class="text-purple-600">
        <i class="iconfont">&#xe62c;</i>
        <span class="pl-1 text-sm">写点儿什么...</span>
      </div>
    </div>
  </div>

  <div class="absolute inset-x-0 top-28 w-full h-44 px-5 py-1.5 mb-2 z-10">
    <div class="rounded-2xl bg-white h-40 p-2.5 bg-blue-100">
      <ul class="pb-2 border-b-2 border-gray-300">
        <li class="inline-block border-r-2 border-gray-300 w-1/3">
          <div class="inline-block w-2/3 text-center pl-2">
            <span class="block text-sm pb-1">收藏夹</span>
            <span class="block text-xs">99+</span>
          </div>
          <i style="font-size: 1.5rem" class="inline-block iconfont float-right py-1 w-1/3">&#xe629;</i>
        </li>
        <li class="inline-block border-r-2 border-gray-300 w-1/3">
          <div class="inline-block w-2/3 text-center pl-2">
            <span class="block text-sm pb-1">关注</span>
            <span class="block text-xs">99+</span>
          </div>
          <i style="font-size: 1.5rem" class="inline-block iconfont float-right py-1 w-1/3">&#xe662;</i>
        </li>
        <li class="inline-block w-1/3">
          <div class="inline-block w-2/3 text-center pl-2">
            <span class="block text-sm pb-1">足迹</span>
            <span class="block text-xs">99+</span>
          </div>
          <i style="font-size: 1.5rem" class="inline-block iconfont float-right py-1 w-1/3">&#xe600;</i>
        </li>
      </ul>
      <div class="h-8.5 py-1.5">
        <span class="text-sm font-semibold">我的订单</span>
        <span class="text-sm float-right"
        >
          查看全部
          <i style="font-size: 0.75rem" class="iconfont">&#xe628;</i>
        </span>
      </div>
      <ul class="py-1.5">
        <li
          class="inline-block text-center w-1/5"
          v-for="(item) in orderToolbar"
          :key=item.text
        >
          <i style="font-size: 1.5rem" class="iconfont block pb-1" v-html="item.icon" />
          <span class="block text-xs">{{item.text}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, reactive } from 'vue'

export default defineComponent({
  name: 'Header',
  setup () {
    const data = reactive({
      opacityStyle: {
        opacity: 0
      }
    })
    const orderToolbar = [
      { text: '待付款', icon: '&#xe603;' },
      { text: '待发货', icon: '&#xe642;' },
      { text: '待收货', icon: '&#xe62f;' },
      { text: '待评价', icon: '&#xe772;' },
      { text: '售后', icon: '&#xe623;' }
    ]
    const handleScroll = () => {
      const scorll = document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset
      if (scorll > 40) {
        let opacity = scorll / 160
        opacity = opacity > 1 ? 1 : opacity
        data.opacityStyle = { opacity }
      } else {
        data.opacityStyle = { opacity: 0 }
      }
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return { data, orderToolbar, handleScroll }
  }
})
</script>

<style scoped>
.back {
  background-image: url(../../../public/myPageBg.jpg);
}
</style>
