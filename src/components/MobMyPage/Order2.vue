<template>
  <div class="my-3 rounded-2xl mx-5 bg-pink-50 h-28">
    <div class="h-8.5 pt-2 pb-1.5 border-b-2 border-gray-200 mx-3">
      <span class="text-sm font-semibold pl-1 pt-1">
        常用功能
        <i style="font-size: 1rem" class="iconfont">&#xe62e;</i>
      </span>
    </div>
    <swiper
      :slides-per-view="4"
      :space-between="30"
      class="py-3 px-3"
    >
      <swiper-slide
        class="inline-block text-center"
        v-for="(item) in toolbar"
        :key="item.text"
      >
        <i style="font-size: 1.5rem" class="iconfont block pb-1" v-html="item.icon" />
        <span class="block text-xs">{{item.text}}</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'

export default defineComponent({
  name: 'Order2',
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const toolbar = [
      { text: '客服', icon: '&#xe617;' },
      { text: '收货地址', icon: '&#xe63e;' },
      { text: '个人信息', icon: '&#xe773;' },
      { text: '优惠券', icon: '&#xe62d;' },
      { text: '红包', icon: '&#xe664;' },
      { text: '壁纸', icon: '&#xe833;' },
      { text: '意见反馈', icon: '&#xe601;' },
      { text: '我的会员', icon: '&#xe696;' }
    ]
    return { toolbar }
  }
})
</script>

<style>

</style>
