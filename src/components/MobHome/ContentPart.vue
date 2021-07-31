<template>
  <div class="icons">
    <div
      class="icons__item"
      v-for="item in iconsList"
      :key="item.desc"
      @click="handleToCat(item.desc)"
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
        <button @click="handleToGo" class="leading-3 h-8 text-sm mt-4 fontStyle font-semibold bg-gradient-to-r from-red-500 to-red-600 py-2.5 px-0.5 pl-2 rounded-xl text-white">
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
          @click="handleToFind"
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
          class="w-1/4 h-20"
          v-for="item in newPublishList"
          :key="item.desc"
          @click="handleToNew"
        >
          <div class="flex justify-center mt-4 mx-1.5 rounded-lg bg-gradient-to-b from-red-50 to-white">
            <img :src="item.imgSrc" class="h-6 w-12 my-auto" />
          </div>
        </div>
      </div>
      <div class="flex flex-1">
        <div
          class="w-1/2 h-44"
          v-for="item in fixedList"
          :key="item.desc"
          @click="handleSelect(item.desc)"
        >
          <div class="flex justify-center">
            <img :src="item.imgSrc" class="h-36 w-36 my-auto"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleToCat: function (id) {
      switch (id) {
        case '超市': {
          window.location.href = 'https://chaoshi.m.tmall.com/?user_number_id=725677994&ali_trackid=2%3Amm_33231688_7050284_23466709%3A1623295398_147_126978917&union_lens=recoveryid%3A201_11.27.64.247_2136410_1623295394648%3Bprepvid%3A201_11.27.64.247_2136410_1623295394648&spm=a311n.23395961a311n.1_6.2&bxsign=tbk5jTogJjXZssKjJ7+cqAF0wwFRGpKgS4O4MRpbXd9Wlwkyew+l0IG+VOVLfciMdHeE1aGKCkQqKXqjyvv5qTXpoxH4Fi3BYuAcIQcOZ+7R9I'
          break
        }
        case '进口': {
          window.location.href = 'https://pages.tmall.com/wow/jinkou/act/zhiyingchaoshi?wh_biz=tm&ali_trackid=2:mm_33231688_7050284_23466709:1623295857_212_1799926527&union_lens=lensId:OPT@1605090123@0b0fa18f_4517_175b6d39e77_b368@01;eventPageId:20150318020000718;recoveryid:201_11.11.161.153_2136443_1623295853962;prepvid:201_11.11.161.153_2136443_1623295853962&spm=a311n.23395961a311n.1_6.3&e=EZMGc1bRm2RfRHk7Z7SOOCPYV75b4Z7Qfta7THsegPZdITvXwTxvKNuKw96QzgSPITWNSCR2hefEab6PkGqHJoNeUBWFp6CX1n2u1uaGfFTg9irfa5pICenp3MNRF4YnzdQNylG_s8MVtNsEmmbI1k1qX2kqoUC1WfLJSmJtadOheFL5nGp5Kszj8PmgRXsw5OkFNS34mxIztUnG9WuN45vRiZ7ABMa43sxNJjA99D8znigWnSoAM2JQuLenLkv5qiDfcknX9HhNrKwvDJNPXvbMZQUAYF5AvSwz3WI4p1_mEcMi5RatXA&type=2&tk_cps_param=33231688&tkFlag=1&tk_cps_ut=2&bxsign=tbkNU5JyXOym6WJqm3yaQMDLZdIyi2ynJPvlI/ZF0X4SWCw/YKPPjQLLpUsukdYEURHuHiD0IiOru3/Ow0LviYJFltpbgu3hradU+458WhDbb8='
          break
        }
        case '奢品' : {
          window.location.href = 'https://pages.tmall.com/wow/a/act/tmall/dailygroup/2612/wupr?wh_pid=daily-246031&ali_trackid=2:mm_33231688_7050284_23466709:1623295931_226_738437704&union_lens=lensId:OPT@1622714849@0b5c3282_807d_179d157976f_7b6d@01;eventPageId:20150318020005645;recoveryid:201_11.23.83.213_2137461_1623295874019;prepvid:201_11.23.83.213_2137461_1623295874019&spm=a311n.23395961a311n.9004.1&e=bt0YL3DxpytfRHk7Z7SOOCPYV75b4Z7Qfta7THsegPa_pr5l6lKtohaM8b2QJJO8cnZ39ZhOYG1sF_-NIcPNN6lFk7i657Rq65wnQ1snB-90VGlj0K8XWVRApU3iH9IND2YAkVjcw98gz5OWgYoO8SP88i591npAf_4GecRIwDxf_JSzFPax2pjRmnKe2OR-yI7EB31pXjBOz-B4xZz04Zzb1_Mb-9wpIzr_3A9CElqh4TWVEQ3ogT1w_zl51MZzGwqSonWT0s2OywGtw1KzNnY7FPCGDrFvk8QkFrjx45Wvp77genS_BA&type=2&tk_cps_param=33231688&tkFlag=1&tk_cps_ut=2&bxsign=tbkJOhpduy5Q5r/EdVQBQ8Ibg57ITTQz8Abg9hyYpMInWG9q3sQmPXroswVqQhUgoPeReiK3TRWqBknIks9S2EU3Jeg6P8Ck6lCtz8L8G37q5Q='
          break
        }
        case '新品': {
          window.location.href = 'https://ku.m.taobao.com/bus?refpid=ecpm&ali_trackid=19_0c4ebb6ad88479fe94da90a53720dbab'
          break
        }
        case '同城': {
          window.location.href = 'https://618.tmall.com/?spm=a211oj.23240261a211oj.6324963840.1&wh_act_nativebar=0&wh_bizStageId=4740&disableNav=YES&pha=true'
          break
        }
      }
    },
    handleToGo: function () {
      window.location.href = 'https://618.tmall.com/union?wh_alimama=true&disableNav=YES&ali_trackid=2:mm_33231688_7050284_23466709:1623291474_197_54128744&union_lens=lensId:OPT@1622098122@0b1a25bf_72c6_179ac9516ca_cc88@01;eventPageId:20150318020005342;recoveryid:201_11.15.254.94_2122236_1623291469211;prepvid:201_11.15.254.94_2122236_1623291469211&spm=a311n.23395961a311n.1_12.3&e=BukTSZVxXx1fRHk7Z7SOOCPYV75b4Z7Qfta7THsegPZgYh-m7jOlAxaM8b2QJJO8I3mCgOhcOPRYMHcufUusSOO-GhkTZXVyi7ziQpNyUJMIJBVw90OvjETaQ6Qs2EELMiFF7UwMsHSYRU3JE5jHdj-Ys7_l-gH16ivJS2oiHj7iMyeXUfux2_4VGEg2OUFqIPW039Yl4OHP-kIS64NL59Ti-TcIPoR-PiG5PdMfyE1zut9RqxGZWRJvH1RHkvIWl_6a_eTvrwylLmcSHKfaXx2SadjAQJ-3TLl3adE9TtzEXzm7ZfO5Mg&type=2&tk_cps_param=33231688&tkFlag=1&tk_cps_ut=2&bxsign=tbknDptoIM9XrsDRzGfnFn0oqzn2twU7aRG3CFesI2ALIluDivebs1HaZb4ZU6oIm9XdNPsTqrf5czzNE+/N2UexK48uAjej4IMLIex8gOQb5w='
    },
    handleToFind: function () {
      window.location.href = 'https://ai.m.taobao.com/'
    },
    handleToNew: function () {
      window.location.href = 'https://618.tmall.com/?spm=a211oj.23287777/evo121242b143935.6324963840.3&wh_act_nativebar=2&wh_bizStageId=4740&disableNav=YES&pha=true'
    },
    handleSelect: function (id) {
      if (id === '1') {
        window.location.href = 'https://uland.taobao.com/coupon/edetail?spm=a311n.14543358.24829614.2&e=kd3FKxZ75%2FMNfLV8niU3R40dlhWtfp96Ng4Gqf8CT4A2Aq%2FO3VjMOIZItBIZ8jQFmMHpNfYdHdBY%2BiId%2B4uYyZgEWiVy%2Fm6QlWdGH7JeCBHMAQLNOhwDs97fq%2FfW4bHGSoAdVyT4AyHjSACZfJOmvay5I0kQ2fkAojKiH9aD8S47mmMWJDI59WUFFgz3RBVH&app_pvid=59590_33.39.143.73_631_1623295301114&ptl=floorId%3A31512%3Bapp_pvid%3A59590_33.39.143.73_631_1623295301114%3Btpp_pvid%3A100_11.182.55.32_92608_9621623295301125183&union_lens=lensId%3AOPT%401623295301%4021278f49_07d5_179f3f09680_b39a%4001%3Brecoveryid%3A201_11.11.161.153_2133137_1623295135218%3Bprepvid%3A201_11.1.240.219_2135752_1623295300632&pid=mm_33231688_7050284_23466709'
      } else {
        window.location.href = 'https://uland.taobao.com/coupon/edetail?spm=a311n.14543358.24829614.8&e=Q7KElAOJYPkNfLV8niU3R40dlhWtfp96Ng4Gqf8CT4D%2BcZ7R%2F%2Fm9t5GKR183JIcOmMHpNfYdHdBY%2BiId%2B4uYyZgEWiVy%2Fm6QlWdGH7JeCBHMAQLNOhwDsx7eqH8wRkWpkToXVngHQO2rDB8ypkbUGbXy5s7HDHA6iky7oqwJCGQM1L%2FmEra8u344d%2BzmctAY&app_pvid=59590_11.181.137.51_654_1623295330416&ptl=floorId%3A31512%3Bapp_pvid%3A59590_11.181.137.51_654_1623295330416%3Btpp_pvid%3A100_11.139.184.131_9631_5491623295330424475&union_lens=lensId%3AOPT%401623295330%400bb58933_078e_179f3f108ab_a319%4001%3Brecoveryid%3A201_11.11.161.153_2133137_1623295135218%3Bprepvid%3A201_11.11.158.245_2134213_1623295329706&pid=mm_33231688_7050284_23466709'
      }
    }
  },
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
      { imgSrc: require('../../assets/首页推荐/apm.jpg'), desc: '1' },
      { imgSrc: require('../../assets/首页推荐/anta.svg'), desc: '2' },
      { imgSrc: require('../../assets/首页推荐/rapoo.svg'), desc: '3' },
      { imgSrc: require('../../assets/首页推荐/mihoyo.png'), desc: '4' }
    ]
    const fixedList = [
      { imgSrc: '//gw.alicdn.com/bao/uploaded/i3/606753541/O1CN01y1gKI11c1p9Mnw8YQ_!!0-item_pic.jpg_468x468q75.jpg_.webp', desc: '1' },
      { imgSrc: '//gw.alicdn.com/bao/uploaded/i2/2166475645/O1CN01zKRk9G1rZSRx3GWQO_!!0-item_pic.jpg_468x468q75.jpg_.webp', desc: '2' }
    ]
    return { iconsList, recommendList, newPublishList, fixedList }
  }
}
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
  width: 4rem;
  height: 4.7rem;
  font-size: 1.8rem;
  margin: 0 auto;
}
</style>
