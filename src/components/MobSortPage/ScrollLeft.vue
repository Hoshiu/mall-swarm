<template>
  <div class="wrapper w-1/4 h-full overflow-auto float-left">
    <ul
      class="bg-red-50 text-center"
      v-for="(item, index) in sortList"
      :key="item.text"
    >
      <li
        class="h-10 leading-10 text-gray-500"
        @touchend="handleBtnClick(index)"
        :class="data.activeID == index ? 'active' : '' "
      >
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'ScrollLeft',
  setup () {
    const sortList = [
      { text: '推荐分类' },
      { text: '食品酒饮' },
      { text: '电脑办公' },
      { text: '手机产品' },
      { text: '数码产品' },
      { text: '母婴童装' },
      { text: '美妆护肤' },
      { text: '个护清洁' },
      { text: '男装女装' },
      { text: '内衣内裤' },
      { text: '珠宝首饰' },
      { text: '鞋靴' },
      { text: '箱包' },
      { text: '家电器具' },
      { text: '家居厨具' },
      { text: '家具家装' },
      { text: '医药保健' },
      { text: '成人情趣' },
      { text: '汽摩配件' },
      { text: '玩具娱乐' },
      { text: '图书文娱' },
      { text: '生活旅行' },
      { text: '运动户外' }
    ]
    const data = reactive({
      activeID: -1
    })
    function handleBtnClick (index) {
      data.activeID = index
      this.$emit('index', data.activeID)
    }
    return { data, sortList, handleBtnClick }
  }
})
</script>

<style scoped>
.active {
  border-top-left-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
  font-size: 1.15rem;
  --tw-bg-opacity: 1;
  background-color: rgba(147, 197, 253, var(--tw-bg-opacity));
}
</style>
