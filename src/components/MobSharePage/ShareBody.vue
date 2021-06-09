<template>
  <div class="flex rounded-t-2xl bg-white my-2 mx-1">
    <div class="flex-1 w-1/2 bg-blue-100">
      <ul class="flex flex-col">
        <li
          class="bg-red-200 ml-2 mr-1 my-2 break-words rounded-xl"
          v-for="(item) in List1"
          :key="item.ID"
        >
          <img :src="item.img" class="rounded-t-xl">
          <span class="text block m-2 text-sm">
            {{item.text}}
          </span>
          <div class="mx-2 mb-2">
            <img :src="item.head" class="h-6 w-6 inline rounded-full">
            <span class="ml-1">{{item.ID}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1 w-1/2 bg-blue-100">
      <ul class="flex flex-col">
        <li
          class="bg-red-200 ml-1 mr-2 my-2 break-words rounded-xl"
          v-for="(item) in List2"
          :key="item.ID"
        >
          <img :src="item.img" class="rounded-t-xl">
          <span class="text block m-2 text-sm">
            {{item.text}}
          </span>
          <div class="mx-2 mb-2">
            <img :src="item.head" class="h-6 w-6 inline rounded-full">
            <span class="ml-1">{{item.ID}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ShareBody',
  setup () {
    const List1 = [
      {
        ID: '麻酥小丸子',
        head: require('../../../public/headPortrait/head1.png'),
        text: '酸酸甜甜的软糖，一包两个口味，外面裹了一层酸粉，有嚼劲。超级推荐！！',
        img: require('../../../public/shareItem/img1.png')
      },
      {
        ID: '是青羊啊',
        head: require('../../../public/headPortrait/head2.png'),
        text: '精致妹妹第一步，上脚巨巨巨巨时髦！！',
        img: require('../../../public/shareItem/img2.png')
      },
      {
        ID: '搭配师米乐',
        head: require('../../../public/headPortrait/head3.png'),
        text: '浅色系的配色经典百搭不挑人，不管是日常上课还是通勤都很nice。',
        img: require('../../../public/shareItem/img3.png')
      },
      {
        ID: '木木然',
        head: require('../../../public/headPortrait/head4.png'),
        text: '洗完之后香香的！！而且是痘痘粉刺的终结者，便宜又大碗。',
        img: require('../../../public/shareItem/img4.png')
      },
      {
        ID: '干饭人',
        head: require('../../../public/headPortrait/head5.png'),
        text: '别拦着我，我还能吃！！香香辣辣，搭配米饭面条一起，绝妙。',
        img: require('../../../public/shareItem/img5.png')
      },
      {
        ID: '小椰包',
        head: require('../../../public/headPortrait/head6.png'),
        text: '提升居住幸福感的出租屋好物和小家电分享。',
        img: require('../../../public/shareItem/img6.png')
      },
      {
        ID: '黄油猫',
        head: require('../../../public/headPortrait/head7.png'),
        text: '提能充电又能当手办高颜值充电宝，一万毫安太实用了，我先冲了！',
        img: require('../../../public/shareItem/img7.png')
      },
      {
        ID: 'Beck',
        head: require('../../../public/headPortrait/head8.png'),
        text: '简约大气的新款阿玛尼钻表，小巧的表盘搭配时尚的水钻，光彩闪耀。',
        img: require('../../../public/shareItem/img8.png')
      },
      {
        ID: '逛吃逛吃',
        head: require('../../../public/headPortrait/head9.png'),
        text: '手机颜值超级高，还送了耳机，总体感觉非常好，喜欢的快快下单吧。',
        img: require('../../../public/shareItem/img9.png')
      },
      {
        ID: 'ROSA',
        head: require('../../../public/headPortrait/head10.png'),
        text: '别三款不重样的热汤面，五分钟搞定，超级简单又美味。',
        img: require('../../../public/shareItem/img10.png')
      },
      {
        ID: '晴栀',
        head: require('../../../public/headPortrait/head11.png'),
        text: '浅戴上去后没有异物感，也不容易滑片，超级水润，戴久了眼睛也不会干涩，太适合我了。',
        img: require('../../../public/shareItem/img11.png')
      }
    ]
    const List2 = [
      {
        ID: '黄油猫',
        head: require('../../../public/headPortrait/head7.png'),
        text: '提能充电又能当手办高颜值充电宝，一万毫安太实用了，我先冲了！',
        img: require('../../../public/shareItem/img7.png')
      },
      {
        ID: 'Beck',
        head: require('../../../public/headPortrait/head8.png'),
        text: '简约大气的新款阿玛尼钻表，小巧的表盘搭配时尚的水钻，光彩闪耀。',
        img: require('../../../public/shareItem/img8.png')
      },
      {
        ID: '逛吃逛吃',
        head: require('../../../public/headPortrait/head9.png'),
        text: '手机颜值超级高，还送了耳机，总体感觉非常好，喜欢的快快下单吧。',
        img: require('../../../public/shareItem/img9.png')
      },
      {
        ID: 'ROSA',
        head: require('../../../public/headPortrait/head10.png'),
        text: '别三款不重样的热汤面，五分钟搞定，超级简单又美味。',
        img: require('../../../public/shareItem/img10.png')
      },
      {
        ID: '晴栀',
        head: require('../../../public/headPortrait/head11.png'),
        text: '浅戴上去后没有异物感，也不容易滑片，超级水润，戴久了眼睛也不会干涩，太适合我了。',
        img: require('../../../public/shareItem/img11.png')
      },
      {
        ID: '今天也要加油啊',
        head: require('../../../public/headPortrait/head12.png'),
        text: '一周减脂早餐，月瘦6斤的减脂餐，好好吃早餐，健康减肥，让我们一起好好吃饭吧。',
        img: require('../../../public/shareItem/img12.png')
      },
      {
        ID: '麻酥小丸子',
        head: require('../../../public/headPortrait/head1.png'),
        text: '酸酸甜甜的软糖，一包两个口味，外面裹了一层酸粉，有嚼劲。超级推荐！！',
        img: require('../../../public/shareItem/img1.png')
      },
      {
        ID: '是青羊啊',
        head: require('../../../public/headPortrait/head2.png'),
        text: '精致妹妹第一步，上脚巨巨巨巨时髦！！',
        img: require('../../../public/shareItem/img2.png')
      },
      {
        ID: '搭配师米乐',
        head: require('../../../public/headPortrait/head3.png'),
        text: '浅色系的配色经典百搭不挑人，不管是日常上课还是通勤都很nice。',
        img: require('../../../public/shareItem/img3.png')
      },
      {
        ID: '木木然',
        head: require('../../../public/headPortrait/head4.png'),
        text: '洗完之后香香的！！而且是痘痘粉刺的终结者，便宜又大碗。',
        img: require('../../../public/shareItem/img4.png')
      },
      {
        ID: '干饭人',
        head: require('../../../public/headPortrait/head5.png'),
        text: '别拦着我，我还能吃！！香香辣辣，搭配米饭面条一起，绝妙。',
        img: require('../../../public/shareItem/img5.png')
      }
    ]
    return { List1, List2 }
  }
})
</script>

<style scoped>
.text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
