<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  mounted () {
    if (this._isMobile()) {
      // 跳转至手机端路由
      // alert('手机端')
      this.$router.replace('/login')
    } else {
      // 跳转至 pc 端路由
      // alert('pc端')
      this.$router.replace('/PCLogin')
    }
  },
  methods: {
    _isMobile () {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    }
  }
}
</script>
