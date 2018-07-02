export const state = () => ({
  locale: 'cn',
  user: null,
  menu: null,
})

export const mutations = {
  UPDATE_USER(state, data) {
    state.user = data;
  },
  UPDATE_MENU(state, data) {
    state.menu = data;
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    // let user = null;
    // if (req.cookies.token) {
      commit('UPDATE_USER', await this.$axios.$post('mock/common/getUser'))
      commit('UPDATE_MENU', await this.$axios.$post('mock/common/getMenu'))
    // }else{
    //   commit('UPDATE_USER', user)
    // }
  }
}

