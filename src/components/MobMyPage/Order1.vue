<template>
  <div class="mt-32 rounded-2xl mx-5 bg-pink-50 h-28">
    <div class="back h-8.5 pt-2 pb-1.5 rounded-2xl">
      <span class="text-sm font-semibold pl-3 text-pink-400">我的</span>
      <span style="font-family: Lucida Handwriting" class="pl-0.5 text-sm font-medium text-pink-500">618</span>
      <span class="text-sm float-right pr-3"
      >
        火热开抢
        <i style="font-size: 0.75rem" class="iconfont">&#xe628;</i>
      </span>
    </div>
    <ul class="py-3 px-3">
      <li
        class="inline-block text-center w-1/4"
        v-for="(item) in List"
        :key="item.index"
      >
        <i style="font-size: 1.7rem" class="iconfont block pb-1" v-html="item.icon" />
        <span class="block text-sm">{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Order1',
  setup () {
    const List = [
      { text: '广告位招租', icon: '&#xe65d;' },
      { text: '广告位招租', icon: '&#xe65d;' },
      { text: '广告位招租', icon: '&#xe65d;' },
      { text: '广告位招租', icon: '&#xe65d;' }
    ]
    return { List }
  }
})
</script>

<style>
.back {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #cce2ff;
  --tw-gradient-stops: var(--tw-gradient-from), #ede9fe, var(--tw-gradient-to, rgba(237, 233, 254, 0));
  --tw-gradient-stops: var(--tw-gradient-from), #e1daff, var(--tw-gradient-to, rgba(196, 181, 253, 0));
  --tw-gradient-to: #ffd7ee;
}
</style>
