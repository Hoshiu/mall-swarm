<template>
  <div class="text-xs leading-6 pl-40 pr-20 py-1.5 bg-gray-100">
    <div class="inline-block">
      hi，欢迎来到商城！
      <a href="/#/PCLogin" class="text-xs text-red-400 pl-2 cursor-pointer hover:text-blue-400">请登录</a>
      <a href="/#/PCLogin/PCRegister" class="text-xs text-red-400 pl-6 cursor-pointer hover:text-blue-400">免费注册</a>
    </div>
    <div class="inline-block pl-96 text-xs text-purple-600">
      <ul class="inline-block pl-20">
        <li class="inline-block text-gray-500 pl-8 pr-4 cursor-pointer hover:text-red-400 border-r-2 border-red-400">
          <a href="/#/PCHome">首页</a>
        </li>
        <li class="inline-block text-gray-500 pl-4 pr-4 cursor-pointer hover:text-red-400 border-r-2 border-red-400">
          <a href="/#/PCLogin">我的商城</a>
        </li>
        <li class="inline-block text-gray-500 pl-4 pr-4 cursor-pointer hover:text-red-400 border-r-2 border-red-400">
          <i style="font-size:1rem" class="iconfont pr-1">&#xe65e;</i>
          <a href="/#/PCLogin">购物车</a>
        </li>
        <li class="inline-block">
          <div>
            <div class="text-gray-500 pl-4 pr-4 cursor-pointer hover:text-red-400 border-r-2 border-red-400">
              <a
                @mouseenter="visible"
                @mouseleave="invisible"
              >
                关注我们
                <i
                  style="font-size:0.8rem"
                  class="inline-block iconfont pl-1 transition duration-200 ease-in transform hover:translate-y-0.5"
                >
                  &#xe646;
                </i>
              </a>
            </div>
            <div class="absolute top-9 h-48 w-72 bg-white z-10" v-show="showWe">
              <img src="../../../../public/erweima.png" class="pt-4 px-20">
              <p class="px-16 text-center text-black text-base">关注我们获取更多精彩</p>
            </div>
          </div>
        </li>
      </ul>
      <span class="pl-4">热线电话：123-456-7890</span>
    </div>
  </div>
  <div class="my-8">
    <div>
      <div
        class="h-12 ml-40 w-auto bg-no-repeat"
        style="background-image: url(https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg)"
      >
        <div class="pl-96">
          <div class="relative pl-40 float-left top-1">
            <input
              type="text"
              placeholder="商品关键字"
              class="border-2 border-red-400 leading-8 w-60 pl-2 focus:outline-none focus:border-red-400"
            />
            <button class="w-20 bg-red-500 leading-9 text-white hover:bg-red-600 focus:outline-none">搜索</button>
          </div>
          <i style="font-size: 1.7rem" class="inline-block iconfont ml-56">&#xe62a;</i>
          <a
            class="inline-block ml-2 mt-2 text-2xl cursor-pointer hover:text-red-400"
            href="/#/PCHome"
          >
            返回首页
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PCLoginTop',
  data () {
    return {
      showWe: false
    }
  },
  methods: {
    visible: function () {
      this.showWe = true
    },
    invisible: function () {
      this.showWe = false
    }
  }
})
</script>

<style scoped>
.iconfont {
  color: rgb(239,68,68);
}
a {
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
</style>
