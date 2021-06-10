<template>
  <div class="location">
    <span class="iconfont position__icon">&#xe630;</span>
    <div id="position" class="hidden"></div>
    <span id="location" class="setlocation"> {{data.locationInfo}} </span>
    <span class="iconfont notice__icon">&#xe6f5;</span>
  </div>
</template>
<script>
import AMap from 'AMap'
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  name: 'Location',
  setup () {
    const data = reactive({
      locationInfo: ref('正在获取当前定位...')
    })
    return { data }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 实例化地图
    init () {
      var map = new AMap.Map('position', {
        resizeEnable: true
      })
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })

        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)

        function onComplete (location) {
          // console.log(location.formattedAddress)
          document.getElementById('location').innerText = location.formattedAddress
        }

        function onError (_location) {
          console.log('Error!')
        }
      })
    }
  }
})
</script>

<style scoped lang="scss">
.location {
  position: relative;
  padding: 1rem 1.5rem 1rem 1.5rem;
  line-height:1rem;
  font-size: .875rem;
  white-space: nowrap; //不允许换行
  overflow: hidden; //超出包裹器隐藏
  text-overflow: ellipsis; //显示省略符号来代表被修剪的文本。
  width: 93.5%;
  .position__icon {
    position: relative;
    font-size: 1.25rem;
    top: .0625rem;
  }
  .setlocation {
    padding: 0 .3rem;
    font-family: "Cursive";
  }
  .notice__icon {
    position: absolute;
    right: 0;
    top: 1rem;
    font-size: 1.3rem;
  }
}
</style>
