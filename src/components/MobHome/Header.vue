<template>
  <div class="fixed w-screen z-50 top-0 left-0 bg-gradient-to-r from-blue-300 via-pink-200 to-purple-200">
    <location />
    <div class="search">
      <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="IQOO Neo5"
    >
        <template #prefix>
          <i class='iconfont onlyRight pl-10 text-gray-600'>&#xe615;</i>
        </template>
        <template #suffix>
          <button @click="sure_search()" class='buttonToSearch bg-gradient-to-r from-pink-700 to-red-500 absolute'>搜索</button>
        </template>
      </el-autocomplete>
      <div class="relative followMe" @click="changeId">
        <span class="iconfont styleOfAll text-gray-800">&#xe604;</span>
        <span class="absolute styleOfWord pt-6">分类</span>
      </div>
    </div>
    <div class='pb-4'></div>
  </div>
</template>

<script>
import Location from './Location.vue'
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'Header',
  components: {
    Location
  },
  data () {
    return {
      myData: [],
      search1: '',
      now: -1
    }
  },
  methods: {
    // 点击搜索按钮，跳转至搜索结果页
    sure_search: function () {
      this.search1 = this.state1
      if (this.search1) {
        window.location.href = 'https://uland.taobao.com/semm/tbsearch?#q=' + this.search1
      } else {
        window.location.href = 'https://uland.taobao.com/semm/tbsearch?#q=IQOO Neo5'
      }
    },
    changeId () {
      this.$router.push({ name: 'SortPage' })
    }
  },
  setup () {
    const restaurants = ref([])
    const querySearch = (queryString, cb) => {
      var results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value
      // 调用 callback 返回建议列表的数据
      cb(results)
    }
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    }
    const loadAll = () => {
      return [
        { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
        {
          value: 'Hot honey 首尔炸鸡（仙霞路）',
          address: '上海市长宁区淞虹路661号'
        },
        {
          value: '新旺角茶餐厅',
          address: '上海市普陀区真北路988号创邑金沙谷6号楼113'
        },
        { value: '泷千家(天山西路店)', address: '天山西路438号' },
        {
          value: '胖仙女纸杯蛋糕（上海凌空店）',
          address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101'
        },
        { value: '贡茶', address: '上海市长宁区金钟路633号' },
        {
          value: '豪大大香鸡排超级奶爸',
          address: '上海市嘉定区曹安公路曹安路1685号'
        },
        {
          value: '茶芝兰（奶茶，手抓饼）',
          address: '上海市普陀区同普路1435号'
        },
        { value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107' },
        { value: '星移浓缩咖啡', address: '上海市嘉定区新郁路817号' },
        { value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号' },
        { value: '新麦甜四季甜品炸鸡', address: '嘉定区曹安公路2383弄55号' },
        {
          value: 'Monica摩托主题咖啡店',
          address: '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F'
        },
        {
          value: '浮生若茶（凌空soho店）',
          address: '上海长宁区金钟路968号9号楼地下一层'
        },
        { value: 'NONO JUICE  鲜榨果汁', address: '上海市长宁区天山西路119号' },
        { value: 'CoCo都可(北新泾店）', address: '上海市长宁区仙霞西路' },
        {
          value: '快乐柠檬（神州智慧店）',
          address: '上海市长宁区天山西路567号1层R117号店铺'
        },
        {
          value: 'Merci Paul cafe',
          address: '上海市普陀区光复西路丹巴路28弄6号楼819'
        },
        {
          value: '猫山王（西郊百联店）',
          address: '上海市长宁区仙霞西路88号第一层G05-F01-1-306'
        },
        { value: '枪会山', address: '上海市普陀区棕榈路' },
        { value: '纵食', address: '元丰天山花园(东门) 双流路267号' },
        { value: '钱记', address: '上海市长宁区天山西路' },
        { value: '壹杯加', address: '上海市长宁区通协路' },
        {
          value: '唦哇嘀咖',
          address: '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元'
        },
        { value: '爱茜茜里(西郊百联)', address: '长宁区仙霞西路88号1305室' },
        {
          value: '爱茜茜里(近铁广场)',
          address:
            '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺'
        },
        {
          value: '鲜果榨汁（金沙江路和美广店）',
          address: '普陀区金沙江路2239号金沙和美广场B1-10-6'
        },
        {
          value: '开心丽果（缤谷店）',
          address: '上海市长宁区威宁路天山路341号'
        },
        { value: '超级鸡车（丰庄路店）', address: '上海市嘉定区丰庄路240号' },
        { value: '妙生活果园（北新泾店）', address: '长宁区新渔路144号' },
        { value: '香宜度麻辣香锅', address: '长宁区淞虹路148号' },
        {
          value: '凡仔汉堡（老真北路店）',
          address: '上海市普陀区老真北路160号'
        },
        { value: '港式小铺', address: '上海市长宁区金钟路968号15楼15-105室' },
        { value: '蜀香源麻辣香锅（剑河路店）', address: '剑河路443-1' },
        { value: '北京饺子馆', address: '长宁区北新泾街道天山西路490-1号' },
        {
          value: '饭典*新简餐（凌空SOHO店）',
          address: '上海市长宁区金钟路968号9号楼地下一层9-83室'
        },
        {
          value: '焦耳·川式快餐（金钟路店）',
          address: '上海市金钟路633号地下一层甲部'
        },
        { value: '动力鸡车', address: '长宁区仙霞西路299弄3号101B' },
        { value: '浏阳蒸菜', address: '天山西路430号' },
        { value: '四海游龙（天山西路店）', address: '上海市长宁区天山西路' },
        {
          value: '樱花食堂（凌空店）',
          address: '上海市长宁区金钟路968号15楼15-105室'
        },
        { value: '壹分米客家传统调制米粉(天山店)', address: '天山西路428号' },
        {
          value: '福荣祥烧腊（平溪路店）',
          address: '上海市长宁区协和路福泉路255弄57-73号'
        },
        {
          value: '速记黄焖鸡米饭',
          address: '上海市长宁区北新泾街道金钟路180号1层01号摊位'
        },
        { value: '红辣椒麻辣烫', address: '上海市长宁区天山西路492号' },
        {
          value: '(小杨生煎)西郊百联餐厅',
          address: '长宁区仙霞西路88号百联2楼'
        },
        { value: '阳阳麻辣烫', address: '天山西路389号' },
        {
          value: '南拳妈妈龙虾盖浇饭',
          address: '普陀区金沙江路1699号鑫乐惠美食广场A13'
        }
      ]
    }
    onMounted(() => {
      restaurants.value = loadAll()
    })
    return {
      restaurants,
      state1: ref(''),
      state2: ref(''),
      querySearch,
      createFilter,
      loadAll
    }
  }
})
</script>

<style scoped>
.search {
  width: 100%;
}
.onlyRight {
  padding-right: .5rem;
  border-width: 0 1px 0 0;
  font-size: 1.1rem;
}
.buttonToSearch {
  display: relative;
  height: 2rem;
  width: 3.7rem;
  border-radius: 1.5rem;
  margin-left: -1.2rem !important;
}
.buttonToSearch:focus {
  outline: 0;
}
.followMe {
  float: right;
  margin-right: 1.3rem;
  margin-top: -.37rem;
}
.styleOfAll {
  font-size: 2rem;
  font-weight: bold;
}
.styleOfWord {
  font-size: .8rem;
  font-weight: bold;
  font-family: Microsoft Yahei;
  left: .2rem;
}
:deep(.el-input__inner) {
  width: 65vw;
  height: 2rem;
  line-height: 2rem;
  border-radius: 1.5rem;
  margin-left: 2.2rem;
  padding-left: 2.7rem !important;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(220, 38, 38, var(--tw-border-opacity));
}
:deep(.el-icon-search:before) {
  display: relative;
  padding-left: 2.7rem;
}
:deep(.el-input__inner:focus) {
  border-color:rgb(220,38,38);
}

</style>
