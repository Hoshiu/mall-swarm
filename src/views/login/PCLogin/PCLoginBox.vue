<template>
  <div
    style="background-image: url(//img02.hua.com/pc/assets/img/login_bg.jpg)"
    class="bg-cover bg-center bg-no-repeat"
  >
    <div style="width:1220px" class="overflow-hidden mx-auto">
      <div class="relative my-10 px-8 py-4 w-96 h-96 rounded-lg float-right bg-gray-200 bg-opacity-75 overflow-hidden">
        <div class="py-5 px-10 relative w-full text-xl border-b-2 border-gray-200 text-center">
          Hi，欢迎来到
          <span class="text-red-400">ABC</span>
          商城！
        </div>
        <div class="mt-5 my-6 mx-8">
          <div class="flex px-2 py-2 h-12 text-base">
            <button
              class="flex-auto text-center border-b-2 text-black border-gray-300 focus:outline-none"
              @click="handleChoiseLogin1"
              :class="{ active: isActive }"
            >
              账号密码登录
            </button>
            <button
              class="flex-auto text-center border-b-2 text-black border-gray-300 focus:outline-none"
              @click="handleChoiseLogin2"
              :class="{ active: !isActive }"
            >
              短信认证登录
            </button>
          </div>
          <div v-show="showLogin">
            <div class="mt-5 my-6 border-b-2 border-red-400">
              <i style="font-size:1.2rem" class="iconfont pl-1">&#xe626;</i>
              <input
                placeholder="请输入手机号"
                class="pl-1 pb-1 w-56 bg-gray-200 bg-opacity-0 focus:outline-none"
                v-model="username"
              />
            </div>
            <div class="my-6 border-b-2 border-red-400">
              <i style="font-size:1.2rem" class="iconfont pl-1">&#xe60f;</i>
              <input
                placeholder="请输入密码"
                type="password"
                class="pl-1 pb-1 w-56 bg-gray-200 bg-opacity-0 focus:outline-none"
                v-model="password"
              />
            </div>
            <div class="text-center">
              <button
                class="w-full h-8 mb-3 bg-red-500 rounded-xl text-white hover:bg-red-400 focus:outline-none"
                @click="handlePCLogin"
              >
                登 录
              </button>
            </div>
          </div>
          <div v-show="!showLogin">
            <div class="mt-5 my-6 border-b-2 border-red-400">
              <i style="font-size:1.2rem" class="iconfont pl-1">&#xe626;</i>
              <input
                placeholder="请输入手机号"
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
              <button class="w-full h-8 mb-3 bg-red-500 rounded-xl text-white hover:bg-red-400 focus:outline-none">
                登 录
              </button>
            </div>
          </div>
          <div class="inline-block pr-10">
            <span class="hover:text-blue-400 cursor-pointer">忘记密码？</span>
          </div>
          <div class="inline-block pl-10">
            <button
              class="text-red-400 cursor-pointer focus:outline-none"
              @click="handleToPCRegister"
            >
              免费注册
              <i style="font-size:0.8rem" class="iconfont">&#xe628;</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'PCLoginBox',
  data () {
    return {
      showLogin: true,
      isActive: true,
      username: '',
      password: ''
    }
  },
  methods: {
    handleChoiseLogin1: function () {
      this.showLogin = true
      this.isActive = true
    },
    handleChoiseLogin2: function () {
      this.showLogin = false
      this.isActive = false
    }
  },
  setup () {
    const router = useRouter()
    function handlePCLogin () {
      if (!this.username) {
        ElMessage.error('请输入用户名！')
      } else if (!this.password) {
        ElMessage.error('请输入密码！')
      } else if (this.username !== '123456' || this.password !== '123456') {
        ElMessage.error('密码错误，请校验后重新输入！')
      } else {
        ElMessage.success('登录成功！')
        sessionStorage.isLogin = true
        router.push({ name: 'PCHome' })
      }
    }
    const handleToPCRegister = () => {
      console.log('123')
      router.push({ name: 'PCRegister' })
    }
    return { handlePCLogin, handleToPCRegister }
  }
})
</script>

<style scoped>
.iconfont {
  color: rgb(239, 68, 68);
}
.active {
  font-weight: 600;
  --tw-border-opacity: 1;
  border-color: rgba(248, 113, 113, var(--tw-border-opacity));
}
</style>
