export const state = () => {
  return {
    menuCollapse: false,
    // activeIndex: '2-4'
  }
}

export const mutations = {
  // 设置menuCollapse
  TOGGLE_MENUCOLLAPSE(state) {
    state.menuCollapse = !state.menuCollapse;
    this.app.$storage.set('menuCollapse', state.menuCollapse);
  },
  // // 设置activeIndex
  // SET_ACTIVEINDEX(state, idx) {
  //   state.activeIndex = idx
  // }
}

// export const actions = {
//   // 异步设置menuCollapse
//   async ASYNC_SET_MENUCOLLAPSE({ commit }) {
//     commit('SET_MENUCOLLAPSE', await this.$axios.$post('mock/demo/get_title', {
//           token: '参数1',
//           arg2: '参数2'
//         }))
//   }
// }
