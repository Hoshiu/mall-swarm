<template>
  <div class="w-full h-full">
    <div class="w-full h-40 bg-gradient-to-b from-blue-500 via-blue-500 to-blue-100">
      <div class="h-10 leading-10 text-center pt-4">
        <span class="absolute text-base left-7 mt-2 iconfont text-white" @touchend="handleBack">&#xe61d;</span>
        <span class="text-white">确认订单</span>
      </div>
      <div class="rounded-xl  bg-gray-50 h-28 w-4/5 mx-auto mt-16">
        <div class="pt-4 pl-4 font-semibold text-base">收货地址</div>
        <div class="pt-4 pl-4 text-sm">中南林业科技大学青园27栋</div>
        <div class="pt-1 pl-4 text-sm">XXX（先生）XXXXXXXXXXX</div>
      </div>
      <div class="w-4/5 mx-auto">
        <ul class="flex flex-col">
          <li
            class="h-28 mt-2 rounded-xl bg-gray-50 flex"
            v-for="(item) of list[0]"
            :key=item.id
          >
            <div class="inline-block flex">
              <img :src="`http://localhost:8080/${item.img}`" class="p-4">
              <div class="flex flex-col w-full py-5 px-2">
                <span class="text flex-1 text-sm">{{item.text}}</span>
                <div class="inline-block">
                  <span class="flex-1 text-red-500 text-base">￥{{item.count}}</span>
                  <div class="inline-block flex float-right mr-1 w-20 border-2 rounded-md border-gray-300 text-sm justify-center">
                    数量：{{item.num}}
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="h-16 w-full"></div>
      </div>
    </div>
  </div>
  <div class="h-14 w-full bg-white fixed bottom-0 left-0 right-0">
    <span class="inline-block w-44 my-4 pl-6 heading-10">
      实付金额
      <span class="text-red-500 text-center text-base">￥{{sum}}</span>
    </span>
    <span class="inline-block float-right h-14 w-28 bg-blue-500 text-white text-center pt-4">提交订单</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Settlement',
  data () {
    return {
      list: [],
      sum: 0
    }
  },
  mounted () {
    this.list = this.$store.state.checkList
    this.sum = this.$store.state.countSum
    console.log(this.sum)
  },
  setup () {
    const router = useRouter()
    const handleBack = () => {
      router.back()
    }
    return { handleBack }
  }
})
</script>

<style scoped>

</style>
