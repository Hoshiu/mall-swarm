<template>
  <div class="wrapper bg-blue-50 w-3/4 h-full overflow-auto float-left">
    <div class="h-32 p-4">
      <div class="h-full w- full bg-pink-100 rounded-lg text-center pt-10">This is {{pageIndex}} page</div>
    </div>
    <div class="p-2 sticky bg-blue-50 top-0">
      <swiper
        :slides-per-view="3.3"
        :space-between="15"
      >
        <swiper-slide
          v-for="(item) in sortList"
          :key=item.text
          class="text-center rounded-full bg-pink-100"
        >
          <span class="inline-block text-xs p-1">{{item.text}}</span>
        </swiper-slide>
      </swiper>
    </div>
    <div
      v-for="(item) in sortList"
      :key="item.text"
      class="border-b-2 border-pink-200"
    >
      <span class="block px-2 py-2">{{item.text}}</span>
      <div class="flex flex-wrap">
        <div
          class="w-1/3 h-24 px-2 py-1"
          v-for="(thing) in item.list"
          :key=thing.name
        >
          <div
            class="w-full h-16 rounded-lg"
            :style="{ backgroundColor: thing.color }"
          />
          <span class="block text-center p-1">{{thing.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'

export default defineComponent({
  name: 'ScrollRight1',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    pageIndex: Number
  },
  setup () {
    const sortList = [
      {
        text: '食品酒饮',
        list: [
          { name: '蓝酒', color: '#98F5FF' },
          { name: '红酒', color: '#B22222' },
          { name: '绿酒', color: '#98FB98' },
          { name: '黄酒', color: '#EEEE00' },
          { name: '米酒', color: '#FFFFE0' },
          { name: '紫酒', color: '#BA55D3' },
          { name: '鸡尾酒', color: '#FF1493' }
        ]
      },
      {
        text: '手机产品',
        list: [
          { name: 'iphone', color: '#98F5FF' },
          { name: 'huawei', color: '#B22222' },
          { name: 'xiaomi', color: '#98FB98' },
          { name: 'vivo', color: '#EEEE00' },
          { name: 'oppo', color: '#FFFFE0' },
          { name: 'meizu', color: '#BA55D3' }
        ]
      },
      {
        text: '数码产品',
        list: [
          { name: '平板', color: '#98F5FF' },
          { name: '相机', color: '#B22222' },
          { name: '耳机', color: '#98FB98' },
          { name: '智能手表', color: '#EEEE00' }
        ]
      },
      {
        text: '母婴童装',
        list: [
          { name: '奶粉', color: '#98F5FF' },
          { name: '宝宝粉', color: '#B22222' },
          { name: '花露水', color: '#98FB98' },
          { name: '妈妈背心', color: '#EEEE00' },
          { name: '锁子甲', color: '#FFFFE0' },
          { name: '纸尿裤', color: '#BA55D3' }
        ]
      },
      {
        text: '美妆护肤',
        list: [
          { name: '蓝色口红', color: '#98F5FF' },
          { name: '红色口红', color: '#B22222' },
          { name: '绿色口红', color: '#98FB98' },
          { name: '黄色口红', color: '#EEEE00' },
          { name: '浅色口红', color: '#FFFFE0' }
        ]
      },
      {
        text: '男装女装',
        list: [
          { name: '时尚大衣', color: '#98F5FF' },
          { name: '春夏热款', color: '#B22222' },
          { name: '热卖', color: '#98FB98' },
          { name: '明星同款', color: '#EEEE00' },
          { name: '时尚潮流', color: '#FFFFE0' },
          { name: '大绒裤', color: '#BA55D3' }
        ]
      }
    ]
    return { sortList }
  }
})
</script>

<style scoped>

</style>
