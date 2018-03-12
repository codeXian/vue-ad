import { login } from '@/api/login'

const user = {
  state: {
    name: 'user'
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password)
          .then(response => {
            const data = response.data
            if (data.status) {
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
