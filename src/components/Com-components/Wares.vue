<template>
<div class="rounded-t-2xl bg-blue-50 my-2 mx-3">
  <div class="pl-2.5 pt-2.5 text-sm font-medium">
    <img src="../../../public/img.png" class="inline h-5 rounded-full">
    你可能还喜欢
  </div>
  <div class="flex">
    <div class="flex-1 w-1/2 bg-blue-50 rounded-tl-2xl">
      <ul class="flex flex-col">
        <li
          class="bg-pink-50 ml-2 mr-1 my-2 break-words rounded-xl"
          v-for="(item) in List1"
          :key="item.text"
        >
          <img :src="item.img" class="rounded-t-xl">
          <span class="text block m-2 text-sm">
            {{item.text}}
          </span>
          <div class="mx-2 mb-2">
            <span class="ml-1 text-red-400">
              <span style="font-size: 0.8rem; display: inline-block; width: 0.5em;">￥</span>
              {{item.count}}
            </span>
            <i
              style="font-size: 1.1rem"
              class="iconfont float-right text-red-500"
              @touchend="handleShop(item)"
            >
              &#xe65e;
            </i>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1 w-1/2 bg-blue-50 rounded-tr-2xl">
      <ul class="flex flex-col">
        <li
          class="bg-pink-50 mr-2 ml-1 my-2 break-words rounded-xl"
          v-for="(item) in List2"
          :key="item.text"
        >
          <img :src="item.img" class="rounded-t-xl">
          <span class="text block m-2 text-sm">
            {{item.text}}
          </span>
          <div class="mx-2 mb-2">
            <span class="ml-1 text-red-400">
              <span style="font-size: 0.8rem; display: inline-block; width: 0.5em;">￥</span>
              {{item.count}}
            </span>
            <i
              style="font-size: 1.1rem"
              class="iconfont float-right text-red-500"
              @touchend="handleShop(item)"
            >
              &#xe65e;
            </i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Wares',
  methods: {
    handleShop (item) {
      this.$store.commit('addItemToCart', item)
    }
  },
  setup () {
    const List1 = [
      {
        text: '迪士尼授权 白雪公主 原创 森女部落设计',
        img: require('../../../public/shopItem/img1.png'),
        count: '118.0'
      },
      {
        text: '大头鞋女条纹 夏季鞋',
        img: require('../../../public/shopItem/img2.png'),
        count: '229.0'
      },
      {
        text: '小孩电动钓鱼玩具磁性',
        img: require('../../../public/shopItem/img3.png'),
        count: '18.8'
      },
      {
        text: '原创日系蝴蝶裙子 夏天裙子',
        img: require('../../../public/shopItem/img4.png'),
        count: '199.0'
      },
      {
        text: '短款上衣 女针织假两件',
        img: require('../../../public/shopItem/img5.png'),
        count: '49.0'
      },
      {
        text: '网红潮鞋厚底',
        img: require('../../../public/shopItem/img6.png'),
        count: '69.8'
      },
      {
        text: '黑色连衣裙女背带裙',
        img: require('../../../public/shopItem/img7.png'),
        count: '119.0'
      },
      {
        text: '日系ins大容量帆布包',
        img: require('../../../public/shopItem/img8.png'),
        count: '28.8'
      },
      {
        text: '轻薄防晒衣遮阳防空调',
        img: require('../../../public/shopItem/img9.png'),
        count: '98.0'
      },
      {
        text: '可爱卡通布朗熊儿童玩具',
        img: require('../../../public/shopItem/img10.png'),
        count: '18.0'
      },
      {
        text: '日本UV遮阳帽女夏季韩版百搭大沿渔夫帽防紫外线防晒帽遮脸太阳帽',
        img: require('../../../public/shopItem/img13.png'),
        count: '19.8'
      }
    ]
    const List2 = [
      {
        text: 'FCS少女心蝴蝶结麦昆达半拖帆布鞋女单鞋2021年新款休闲小白板鞋',
        img: require('../../../public/shopItem/img12.png'),
        count: '55.0'
      },
      {
        text: '日本UV遮阳帽女夏季韩版百搭大沿渔夫帽防紫外线防晒帽遮脸太阳帽',
        img: require('../../../public/shopItem/img13.png'),
        count: '19.8'
      },
      {
        text: '知伞太阳伞女夏防晒双层超强防紫外线小巧便携自动晴雨两用遮阳伞',
        img: require('../../../public/shopItem/img14.png'),
        count: '39.8'
      },
      {
        text: 'bosie夏POLO衫小王子联名情侣男t休闲潮撞色翻领短袖个性潮03153',
        img: require('../../../public/shopItem/img15.png'),
        count: '199.0'
      },
      {
        text: '电动牙刷情侣套装男全自动女成人简洁男士声波软毛一对情侣款平价',
        img: require('../../../public/shopItem/img16.png'),
        count: '199.0'
      },
      {
        text: '马尔代夫海边度假沙滩裙性感露背吊带连衣裙仙女超仙甜美收腰长裙',
        img: require('../../../public/shopItem/img17.png'),
        count: '79.8'
      },
      {
        text: '夏季新款裙子两件套套装',
        img: require('../../../public/shopItem/img18.png'),
        count: '119.8'
      },
      {
        text: '弹力烟雾泡泡机无毒儿童玩具',
        img: require('../../../public/shopItem/img19.png'),
        count: '38.8'
      },
      {
        text: '手提电脑包适用所有尺寸',
        img: require('../../../public/shopItem/img20.png'),
        count: '48.8'
      },
      {
        text: '华为HUAWEI HUAWEI P30 PRO 4G全网通手机 徕卡四摄麒麟980曲面屏',
        img: require('../../../public/shopItem/img11.png'),
        count: '3888.00'
      }
    ]
    // List1.forEach(i => {
    //   const splitPrice = i.count.split('.')
    //   if (splitPrice[1]) {
    //     i.count = `<span style="font-size: 0.8rem; display: inline-block; width: 0.5em;">￥</span>
    //       ${splitPrice[0]}.
    //       <span style="font-size: 0.8rem; display: inline-block">${splitPrice[1]}</span>`
    //   }
    // })
    // List2.forEach(i => {
    //   const splitPrice = i.count.split('.')
    //   if (splitPrice[1]) {
    //     i.count = `<span style="font-size: 0.8rem; display: inline-block; width: 0.5em;">￥</span>
    //       ${splitPrice[0]}.
    //       <span style="font-size: 0.8rem; display: inline-block">${splitPrice[1]}</span>`
    //   }
    // })
    return { List1, List2 }
  }
})
</script>

<style scoped>
.text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>
