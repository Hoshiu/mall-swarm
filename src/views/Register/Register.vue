<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-3 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
    <img class="mx-auto h-16 w-16 mb-8" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
    <el-form-item prop="id">
      <el-input
        v-model="ruleForm.id"
        placeholder="输入帐号"
        size="large"
        clearable
        class="text-base"
      ></el-input>
    </el-form-item>
    <el-form-item prop="user">
      <el-input
        v-model="ruleForm.user"
        placeholder="输入用户名"
        size="large"
        class="text-base"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input
        type="password"
        size="large"
        v-model="ruleForm.pass"
        autocomplete="off"
        placeholder="请输入密码"
        class="text-base"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input
        type="password"
        size="large"
        placeholder="确认密码"
        v-model="ruleForm.checkPass"
        autocomplete="off"
        class="text-base"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="group justify-center mt-3 px-4 w-full border border-transparent text-sm font-medium rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="handleRegister"
        plain
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
        <svg
          class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        />
        </span>
        注册
      </el-button>
    </el-form-item>
    <div class="flex justify-center text-gray-500">
      <div class="text-sm -mt-1.5">
        <router-link to="/login">已有帐号去登录</router-link>
      </div>
    </div>
    </div>
  </el-form>
</template>

<script>
import { post } from '../../utils/request'
import { useRouter } from 'vue-router'

export default {
  /* eslint-disable */
  data () {
    const router = useRouter()
    var checkUser = (_rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      setTimeout(() => {
        if (value.length > 13) {
          callback(new Error('用户名过长，请重新输入'))
        } else {
          callback()
        }
      }, 1000)
    }
    var checkId = (_rule, value, callback) => {
      if (!value) {
        return callback(new Error('帐号不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(parseInt(value))) {
          callback(new Error('请输入数字值'))
        } else {
          if (value.length > 13) {
            callback(new Error('账号过长,请重新输入'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (_rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (_rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      checkDemo: {
        showToast: false,
        toastMessage: []
      },
      ruleForm: {
        pass: '',
        checkPass: '',
        user: '',
        id: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        user: [
          { validator: checkUser, trigger: 'blur' }
        ],
        id: [
          { validator: checkId, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async handleRegister () {
      try {
        if(!this.ruleForm.id && !this.ruleForm.user && !this.ruleForm.pass && !this.checkPass) {
          this.$notify({
            title: '警告',
            message: '个人信息不能为空，请填写完毕后进行注册',
            type: 'warning'
          });
          return
        }
        const result = await post('user', {
          id: this.ruleForm.id,
          name: this.ruleForm.user,
          password: this.ruleForm.pass
        })
        if (result.data.code === 200) {
          this.$notify({
            title: '注册成功',
            message: '现在您可以使用已注册的帐号进行登录',
            type: 'success',
            duration: 2000,
            onClose: () => {
              this.$router.back()
            }
          });
        } else {
          this.$notify.error({
            title: '注册失败',
            message: '当前账号已存在',
          });
        }
      } catch (e) {
        this.$notify({
          title: '警告',
          message: '与服务器连接错误',
          type: 'warning'
        });
      }
    },
  }
}
</script>

<style scoped>
.input :deep(.el-input__inner) {
  height: 2.5rem;
  line-height: 2.5rem;
  padding-left: 1rem;
  }
.input :deep(.el-icon-view:before) {
  font-size: 1.2rem;
}
.input :deep(.el-input--small .el-input__icon) {
  line-height: 2.5rem;
}
.button :deep(.el-button) {
  color: #0091FF;
}
a:hover {
  color: rgba(59, 130, 246, 1);
}
</style>
