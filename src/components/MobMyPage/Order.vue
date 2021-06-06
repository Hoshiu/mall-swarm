<template>
  <div class="mt-32 rounded-2xl mx-5 bg-white h-28 px-3">
    <div class="h-8.5 pt-3 pb-1.5">
      <span class="text-sm font-semibold">我的</span>
      <span style="font-family: Lucida Handwriting" class="pl-0.5 text-sm font-medium text-pink-400">618</span>
      <span class="text-sm float-right"
      >
        查看全部
        <i style="font-size: 0.75rem" class="iconfont">&#xe628;</i>
      </span>
    </div>
    <ul class="py-1.5">
      <li class="inline-block text-center w-1/4">
        <i style="font-size: 1.5rem" class="iconfont block pb-1">&#xe603;</i>
        <span class="block text-xs">待付款</span>
      </li>
      <li class="inline-block text-center w-1/4">
        <i style="font-size: 1.5rem" class="iconfont block pb-1">&#xe642;</i>
        <span class="block text-xs">待发货</span>
      </li>
      <li class="inline-block text-center w-1/4">
        <i style="font-size: 1.5rem" class="iconfont block pb-1">&#xe62f;</i>
        <span class="block text-xs">待收货</span>
      </li>
      <li class="inline-block text-center w-1/4">
        <i style="font-size: 1.5rem" class="iconfont block pb-1">&#xe772;</i>
        <span class="block text-xs">待评价</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Order'
})
</script>

<style>

</style>
