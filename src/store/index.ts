import { createStore } from 'vuex'

export default createStore({
  state: {
    Items: [],
    map: new Map(),
    checkList: [],
    countSum: 0
  },
  mutations: {
    addItemToCart (state, item) {
      if (state.map.has(item.id)) {
        item.num++
      } else {
        state.Items.push(item as never)
        state.map.set(item.id, item.num)
      }
    },
    addItem (state, item) {
      if (state.map.has(item.id)) {
        item.num++
      }
    },
    reduceItem (state, item) {
      if (state.map.has(item.id)) {
        if (item.num > 1) {
          item.num--
        }
      }
    },
    Settlement (state, data) {
      state.checkList.push(data[0] as never)
      state.countSum = data[1]
    }
  },
  actions: {
  },
  modules: {
  }
})
