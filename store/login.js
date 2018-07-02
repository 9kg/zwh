export const state = () => {
  return {
    customerCode: '',
    mobilePhone: '',
    verificationCode: ''
  }
}

export const mutations = {
  // 设置登录信息
  SET_LOGIN_INFO(state, val) {
    state = Object.assign(state, val);
  }
}