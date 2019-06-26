// import { login, logout, getInfo } from '@/api/login's
const user = {
  state: {
    token: '',
    name: '',
    avatar: '',
    roles: [],
    userInfo: JSON.parse(window.sessionStorage.getItem('userInfo')) || {
      ticket: '645d3d2520e547498f679a6a45de6785',
      userId: 86
    },
    id: window.sessionStorage.getItem('user_id') || '',
    newsList: [],
    newsDetial: {},
    cityList: [],
    dict: [],
    temp: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_ID: (state, id) => {
      state.id = id
      window.sessionStorage.setItem('user_id', id)
    },
    SET_USER_INFO: (state, userInfo) => {
      window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
      state.userInfo = userInfo
    },
    ASSIGN_USER_INFO: (state, data) => {
      Object.assign(state.userInfo, data)
    },
    GET_NEWS_LIST: (state, newsList) => {
      state.newsList = newsList
    },
    SET_DICT: (state, dict) => {
      state.dict = dict
    },
    SET_CITY_LIST: (state, cityList) => {
      state.cityList = cityList
    }
  },

  actions: {
    setUserInfo ({commit}, userInfo) {
      commit('SET_USER_INFO', userInfo)
    },
    setCity ({commit}, City) {
      commit('SET_CITY_LIST', City)
    },
    setDict ({commit}, dict) {
      commit('SET_DICT', dict)
    },
    // 登录
    Login ({commit}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        // login(username, userInfo.password).then(response => {
        //   const data = response.data.data
        //   console.log(data.access_token)
        //   commit('SET_USER_INFO', data)
        //   commit('SET_TOKEN', data.access_token)
        //   commit('SET_ID', data.id)
        //   window.sessionStorage.setItem('user_id', data.id)
        //   setToken(data.access_token)
        //   resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 获取用户信息
    GetInfo ({commit, state}) {
      return new Promise((resolve, reject) => {
        getInfo(state.id)
          .then(response => {
            const data = response.data.data
            commit('SET_ROLES', data.roles)
            commit('SET_NAME', data.name)
            commit('SET_AVATAR', data.avatar)
            commit('ASSIGN_USER_INFO', data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default user
