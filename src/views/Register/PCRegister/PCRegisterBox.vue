<template>
  <div
    style="background-image: url(//img02.hua.com/pc/assets/img/login_bg.jpg)"
    class="login-bg bg-cover bg-center bg-no-repeat"
  >
    <div style="width:1220px" class="overflow-hidden mx-auto">
      <div class="relative my-10 px-8 py-4 w-96 h-96 rounded-lg float-right bg-gray-200 bg-opacity-75 overflow-hidden">
        <div class="py-4 px-10 relative w-full text-2xl border-b-2 border-gray-200 text-center">
          注册账号
        </div>
        <div class="my-10 mx-8">
          <div class="my-6 border-b-2 border-red-400">
            <i style="font-size:1.2rem" class="iconfont pl-1">&#xe626;</i>
            <input
              placeholder="请输入手机号"
              class="pl-1 pb-1 w-56 bg-gray-200 bg-opacity-0 focus:outline-none"
            />
          </div>
          <div class="my-6 border-b-2 border-red-400">
            <i style="font-size:1.2rem" class="iconfont pl-1">&#xe60f;</i>
            <input
              placeholder="请输入密码"
              type="password"
              class="pl-1 pb-1 w-56 bg-gray-200 bg-opacity-0 focus:outline-none"
            />
          </div>
          <div class="my-6">
              <div class="inline-block w-40 border-b-2 border-red-400">
                <i style="font-size:1.2rem" class="iconfont pl-1">&#xe62b;</i>
                <input
                  placeholder="请输入验证码"
                  class="pl-1 pb-1 mr-2 w-32 bg-gray-200 bg-opacity-0 focus:outline-none"
                />
              </div>
              <button
                style="font-size: 0.8rem"
                class="w-20 pt-2 pb-1.5 ml-2 bg-red-500 text-white rounded hover:bg-red-400 focus:outline-none"
              >
                获取验证码
              </button>
            </div>
          <div class="text-center">
            <button
              class="w-full h-8 mb-3 bg-red-500 rounded-xl text-white hover:bg-red-400 focus:outline-none"
              @click="handlePCLogin"
            >
              注 册
            </button>
            <div>
              <button
                class="text-red-400 cursor-pointer focus:outline-none"
                @click="handleToPCLogin"
              >
                <i style="font-size:0.8rem" class="iconfont">&#xe67a;</i>
                返回登录页面
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const router = useRouter()
    const handleToPCLogin = () => {
      router.back()
    }
    return { handleToPCLogin }
  }
})
</script>

<style scoped>
  .iconfont {
    color: rgb(239,68,68);
  }
</style>
