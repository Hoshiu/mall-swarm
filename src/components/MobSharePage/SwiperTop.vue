<template>
  <swiper
    :slides-per-view="2"
    :space-between="8"
    :centeredSlides="swiperOptions.centeredSlides"
    :loop="swiperOptions.loop"
    :autoplay="swiperOptions.autoplay"
    class="mx-1 pt-2"
  >
    <swiper-slide
      v-for="(item) in List"
      :key="item.id"
      class="flex text-center bg-white h-20 rounded-2xl"
    >
      <img :src="item.img" class="flex-1 bg-cover bg-center rounded-2xl">
      <div class="flex-1 text-xs py-4 px-2 text-left">
        {{item.text}}
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/swiper.scss'
SwiperCore.use([Autoplay])

export default defineComponent({
  name: 'SwiperTop',
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const data = reactive({
      swiperID: 0
    })
    const List = [
      { id: '0', text: '# 梦回敦煌', img: 'https://img14.360buyimg.com/n0/jfs/t1/181369/13/5910/135697/60adef1eEf70581c8/0d066004bae0864d.jpg' },
      { id: '1', text: '# 学生爆款氛围灯', img: 'https://gd4.alicdn.com/imgextra/i1/0/O1CN01BAzW0L1vdMGoHF57A_!!0-item_pic.jpg_400x400.jpg' },
      { id: '2', text: '# 精致宝宝第一步', img: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/642789018/O1CN01jRUkar2GUIOqmfeEx_!!642789018.jpg_430x430q90.jpg' },
      { id: '3', text: '# 故宫同款', img: 'https://img.alicdn.com/imgextra/i4/2206442921944/O1CN019iH8tY1QEOarBKRvQ_!!2206442921944.jpg_430x430q90.jpg' },
      { id: '4', text: '# 我看了都想买的那些东西', img: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/745884513/O1CN01sxWzv41jD07u9VO9y_!!745884513.jpg_430x430q90.jpg' },
      { id: '5', text: '# 敦煌专场', img: 'https://img.alicdn.com/imgextra/i1/3969657161/O1CN0111QeJI22lmpzW5CjV_!!0-item_pic.jpg_430x430q90.jpg' },
      { id: '6', text: '# 买了它你就是爱因斯坦', img: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2208486364023/O1CN01q3TSN71faa3E8qBNv_!!2208486364023.jpg_430x430q90.jpg' }
    ]
    const swiperOptions = reactive({
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      centeredSlides: true,
      loop: true
    })
    return { data, List, swiperOptions }
  }
})
</script>

<style scoped>
</style>
