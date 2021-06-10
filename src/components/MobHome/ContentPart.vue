<template>
  <div class="icons">
    <div
      class="icons__item"
      v-for="item in iconsList"
      :key="item.desc"
    >
      <i v-html="item.imgName" class="iconfont iconImg" :style="{ color: item.color }"></i>
      <p class="iconDesc">{{ item.desc }}</p>
    </div>
  </div>
  <div>
    <div class="bg-gradient-to-b from-pink-50 to-white mt-5 mx-5 rounded-2xl" style="height: 21rem">
      <div class="boxSet w-2/5 pt-1">
        <span class="iconfont boxTitleIcon relative">&#xe605;</span>
        <span class="text-base font-semibold">天猫主会场</span>
      </div>
      <div class="pl-4 fontStyle">
        <div class="w-2/5 text-xl pt-5 font-semibold">大牌尖货首发</div>
        <div class="w-2/5 font-medium pt-2.5">破圈式运动</div>
        <button class="leading-3 h-8 text-sm mt-4 fontStyle font-semibold bg-gradient-to-r from-red-500 to-red-600 py-2.5 px-0.5 pl-2 rounded-xl text-white">
          立即抢购
          <i class="bg-white px-1 rounded-md buttonSet">
            GO
            <span class="iconfont buttonSize">&#xe602;</span>
          </i>
        </button>
      </div>
      <img src="../../assets/首页推荐/连衣裙.svg" class="h-52 w-48 float-right relative -mt-36 top-1" />
      <div class="flex flex-1 clear-right">
        <div
          class="w-1/4 h-36"
          v-for="item in recommendList"
          :key="item.desc"
        >
          <div class="mx-1.5 rounded-lg bg-gradient-to-b from-red-50 to-white">
            <img :src="item.imgSrc" class="iconfont listImg" />
            <p class="iconDesc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gradient-to-b from-pink-50 to-white mt-5 mx-5 mb-16 rounded-2xl" style="height: 21rem">
      <div class="boxSet w-2/5 pt-1">
        <span class="iconfont boxTitleIcon relative">&#xe605;</span>
        <span class="text-base font-semibold">品牌上新</span>
      </div>
      <div class="pl-4 fontStyle">
        <div class="w-full text-xl pt-5 font-semibold">apm MONACO新品发布</div>
      </div>
      <div class="flex flex-1 clear-right">
        <div
          class="w-1/4 h-36"
          v-for="item in newPublishList"
          :key="item.desc"
        >
          <div class="mx-1.5 rounded-lg bg-gradient-to-b from-red-50 to-white">
            <img :src="item.imgSrc" class="listImg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const iconsList = [
      { imgName: '&#xe609;', desc: '超市', color: 'rgb(216,30,6)' },
      { imgName: '&#xe835;', desc: '进口', color: 'rgb(122,101,175)' },
      { imgName: '&#xe63c;', desc: '奢品', color: 'rgb(140,102,255)' },
      { imgName: '&#xe6a2;', desc: '新品', color: 'rgb(255,97,4)' },
      { imgName: '&#xe697;', desc: '同城', color: 'rgb(255,107,107)' }
    ]
    const recommendList = [
      { imgSrc: require('../../assets/首页推荐/女神1.png'), desc: '镇店之宝' },
      { imgSrc: require('../../assets/首页推荐/鞋08.png'), desc: '尖货来了' },
      { imgSrc: require('../../assets/首页推荐/鞋17.png'), desc: '排行榜' },
      { imgSrc: require('../../assets/首页推荐/红包.png'), desc: '福气红包' }
    ]
    const newPublishList = [
      { imgSrc: require('../../assets/首页推荐/apm.jpg'), decc: '1' },
      { imgSrc: require('../../assets/首页推荐/anta.svg') },
      { imgSrc: require('../../assets/首页推荐/rapoo.svg') },
      { imgSrc: require('../../assets/首页推荐/mihoyo.png') }
    ]
    return { iconsList, recommendList, newPublishList }
  }
})
</script>

<style scoped>
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 6rem;
  padding-top: .8rem;
}
.icons__item {
  width: 20%;
}
.iconImg {
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.8rem;
  padding-left: .3rem;
  margin: 0 auto;
}
.iconDesc {
  margin: 0 auto;
  padding-top: .5rem;
  padding-bottom: .35rem;
  text-align: center;
  color: #333;
  font-size:.875rem;
}
.boxSet {
  color: rgb(245,9,63);
  padding-left: 1rem;
}
.boxTitleIcon {
  font-size: 1.7rem;
  top: .18rem;
  padding-right: .3rem;
}
.fontStyle {
  font-family: Microsoft Yahei;
}
.buttonSet {
  color: rgb(245,9,63);
}
.buttonSize {
  position: relative;
  font-size: .3rem;
  bottom: .1rem;
}
.listImg {
  display: block;
  width: 2.3rem;
  height: 1rem;
  font-size: .5rem;
  margin: 0 auto;
}
</style>
