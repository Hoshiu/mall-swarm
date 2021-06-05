<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  watch: {
    $route: 'routerChange'
  },
  mounted () {
    if (this._isMobile()) {
      // alert('mounted手机端')
      this.$router.replace('/login')
    } else {
      // alert('mounted pc端')
      this.$router.replace('/PCLogin')
    }
  },
  methods: {
    // 防止PC与手机端Login页面可以互相访问
    routerChange: function (_to) {
      // console.log(_to)
      if (_to.name === 'PCLogin' || _to.name === 'Login') {
        if (this._isMobile()) {
          this.$router.replace('/login')
        } else {
          this.$router.replace('/PCLogin')
        }
      } else if (_to.name === 'Register' || _to.name === 'PCRegister') {
        if (this._isMobile()) {
          this.$router.replace('/Register')
        } else {
          this.$router.replace('/PCLogin/PCRegister')
        }
      }
    },
    _isMobile () {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    }
  }
})
</script>
