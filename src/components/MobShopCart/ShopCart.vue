<template>
  <div class="h-12 bg-gray-50">
    <span class="inline-block mt-3 ml-2.5 text-xl font-bold">购物车</span>
    <span class="inline-block mt-3.5 mr-3 text-base float-right">管理</span>
  </div>
  <div
    class="fixed h-12 top-0 w-full back text-white z-50"
    :style="data.opacityStyle"
  >
    <div class="h-10 w-full text-center px-2 pt-3.5">购物车</div>
    <div class="fixed top-3.5 right-3">管理</div>
  </div>
  <div v-if="noItem === 1" class="h-48 w-full bg-gray-50">
    <img src="../../../public/购物车.png" class="h-28 py-2 mx-auto">
    <span class="block text-center text-base mt-1 text-gray-500">购物车还是空的</span>
    <span style="font-size: 0.8rem" class="block text-center mt-2 text-gray-400">去挑几件中意的商品吧</span>
  </div>
  <ul class="flex flex-col">
    <li
      class="h-28 m-2 rounded-2xl bg-red-200 flex"
      v-for="item in list"
      :key=item.id
    >
      <div class="inline-block pl-3 pr-1 pt-10">
        <input type="checkbox" class="check" @touchend="sum(item, $event)">
      </div>
      <div class="inline-block flex">
        <img :src="`http://localhost:8080/${item.img}`" class="p-4">
        <div class="flex flex-col w-full py-5 px-2">
          <span class="text flex-1 text-sm">{{item.text}}</span>
          <div class="inline-block">
            <span class="flex-1 text-red-500 text-base">￥{{item.count}}</span>
            <div class="inline-block flex float-right mr-1 w-20 border-2 rounded-md border-gray-400 text-base">
              <span class="flex-1 text-center" @touchend="addCount(item)">+</span>
              {{item.num}}
              <span class="flex-1 text-center" @touchend="reduceCount(item)">-</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
  <div class="fixed bottom-12 left-0 right-0 h-14 bg-white flex">
    <div class="inline-block pl-3.5 py-3.5 w-1/5">
      <!-- <input type="checkbox" class="check"> -->
    </div>
    <div class="inline-block w-4/5 pr-3 py-1.5 flex flex-row-reverse">
      <button class="w-24 h-10 rounded-full bg-red-500 text-white focus:outline-none">结算</button>
      <span class="inline-block h-10 text-center leading-10">
        合计:
      <span class="text-xs text-red-400 mr-2">￥{{countSum}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue'
export default defineComponent({
  name: 'Header',
  data () {
    return {
      noItem: 0,
      list: [],
      countSum: 0
    }
  },
  mounted () {
    this.list = this.$store.state.Items
    this.noItem = this.$store.state.Items.length === 0 ? 1 : 0
  },
  updated () {
    if (this.list.length > 0) {
      this.noItem = 0
    }
  },
  methods: {
    addCount (item) {
      this.$store.commit('addItem', item)
    },
    reduceCount (item) {
      this.$store.commit('reduceItem', item)
    },
    sum (item, e) {
      const sum = item.count * item.num
      if (!e.target.checked === true) {
        this.countSum += sum
      } else {
        this.countSum -= sum
      }
    }
  },
  setup () {
    const data = reactive({
      opacityStyle: {
        opacity: 0
      }
    })
    const handleScroll = () => {
      const scorll = document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset
      if (scorll > 10) {
        data.opacityStyle.opacity = 1
      } else {
        data.opacityStyle.opacity = 0
      }
    }
    // const reduceCount = () => {

    // }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return { data, handleScroll }
  }
})
</script>

<style scoped>
.check:checked {
  background:#f70000
}
.check {
  width: 1.5rem;
  height: 1.5rem;
  background-color:#ffffff;
  border:solid 2px #dddddd;
  -webkit-border-radius:50%;
  border-radius:50%;
  font-size:0.8rem;
  margin:0;
  padding:0;
  position:relative;
  display:inline-block;
  vertical-align:top;
  cursor:default;
  -webkit-appearance:none;
  -webkit-user-select:none;
  user-select:none;
  -webkit-transition:background-color ease 0.1s;
  transition:background-color ease 0.1s;
}
.check:checked::after {
  content:'';
  top: 0.35rem;
  left: 0.35rem;
  position:absolute;
  background:transparent;
  border:#fff solid 2px;
  border-top:none;
  border-right:none;
  height:0.45rem;
  width:0.6rem;
  -moz-transform:rotate(-45deg);
  -ms-transform:rotate(-45deg);
  -webkit-transform:rotate(-45deg);
  transform:rotate(-45deg);
}
.back {
  background-image: url(../../../public/myPageBg.jpg);
}
.text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
