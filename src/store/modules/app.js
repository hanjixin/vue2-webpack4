// import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: ''
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
      } else {
      }
      state.sidebar.opened = !state.sidebar.opened
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app
