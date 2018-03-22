import { login } from '@/api/login'

const user = {
  state: {
    name: '我是vuex默认账号名'
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password)
          .then(response => {
            const data = response.data
            if (data.status) {
              commit('SET_NAME', username)
              resolve()
            } else {
              reject(data.error)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default user
