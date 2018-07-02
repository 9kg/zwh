export const state = () => {
  return {
    title: '我是一开始的默认title'
  }
}

export const mutations = {
  // 设置title
  SET_TITLE(state, title) {
    state.title = title
  }
}

export const actions = {
  // 异步设置title
  async ASYNC_SET_TITLE({ commit }) {
    commit('SET_TITLE', await this.$axios.$post('mock/demo/get_title', {
          token: '参数1',
          arg2: '参数2'
        }))
  }
}
