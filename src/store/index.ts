import { createStore } from 'vuex'

export default createStore({
  state: {
    Items: [
      {
        text: '',
        img: '',
        count: 0
      }
    ]
  },
  mutations: {
    addItemToCart (state, item) {
      state.Items.push(item as never)
    }
  },
  actions: {
  },
  modules: {
  }
})
