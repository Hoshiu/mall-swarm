<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 -mt-10">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="input">
            <el-input
              placeholder="用户名"
              class="pb-4 text-base"
              v-model="data.username"
              clearable
            >
              <template #prefix>
                <i class="el-icon-user-solid text-lg ml-1.5 mt-1.5 text-gray-400"></i>
              </template>
            </el-input>
            <el-input
              placeholder="密码"
              class="text-base"
              v-model="data.password"
              show-password
            >
              <template #prefix>
                <i class="el-icon-edit text-lg ml-1.5 mt-1.5 text-gray-400"></i>
              </template>
            </el-input>
          </div>
        </div>

        <div class="flex items-center justify-between text-gray-600">
          <div class="text-sm ml-6">
            <router-link to="/">找回密码</router-link>
          </div>

          <div class="text-sm mr-6">
            <router-link to="/register">注册账号</router-link>
          </div>
        </div>

        <div>
          <el-button type="primary" :loading='data.isclick'  @click="handleLogin" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              />
            </span>
            {{data.submitinfo}}
          </el-button>
        </div>
      </div>
    </div>
  </div>
  <Toast v-if="data.showToast" v-model:remove="data.showToast" :message="data.toastMessage"/>
</template>

<script>
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import { defineComponent, reactive } from 'vue'
import Toast from '../../components/MobLoginToast/Toast.vue'

export default defineComponent({
  name: 'Login',
  components: {
    Toast
  },
  setup () {
    const data = reactive({
      username: '',
      password: '',
      showToast: false,
      isclick: false,
      toastMessage: [],
      submitinfo: '登录'
    })
    const router = useRouter()
    const showToast = (...message) => {
      data.submitinfo = '登录'
      data.showToast = true
      data.isclick = false
      if (data.toastMessage != null) {
        data.toastMessage.length = 0
        data.username = ''
        data.password = ''
      }
      data.toastMessage.push(...message)
      // console.log(message)
    }
    const handleLogin = async () => {
      // 测试用
      if (data.username === '123456' && data.password === '123456') {
        sessionStorage.isLogin = true
        router.push({ name: 'FirstPage' })
      }
      try {
        data.isclick = true
        data.submitinfo = 'Loading...'
        const result = await post('user/login', {
          id: data.username,
          password: data.password
        })
        if (result.data.data === true) {
          sessionStorage.isLogin = true
          router.push({ name: 'FirstPage' })
        } else {
          showToast('登录失败', '密码错误，请校验后重新输入!')
        }
      } catch (e) {
        showToast('登录失败', '该学号未匹配或暂未注册，请校验后重新登录')
      }
    }
    const handleRegisterClick = () => {
      router.push({ name: 'Register' })
    }
    const resetToast = (msg) => {
      data.showToast = msg
    }
    return { handleLogin, handleRegisterClick, resetToast, data }
  }
})
</script>

<style scoped>
.input :deep(.el-input__inner) {
  height: 2.5rem;
  line-height: 2.5rem;
  padding-left: 2.2rem;
  }
.input :deep(.el-icon-view:before) {
  font-size: 1.2rem;
}
.input :deep(.el-input--small .el-input__icon) {
    line-height: 2.5rem;
}
a:hover {
  color: rgba(59, 130, 246, 1);
}
</style>
