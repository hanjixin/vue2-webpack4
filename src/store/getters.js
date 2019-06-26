const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.userInfo.icon,
  name: state => state.user.name,
  roles: state => state.user.roles,
  userInfo: state => state.user.userInfo,
  noticeList: state => state.user.noticeList,
  city: state => state.user.cityList,
  dict: state => state.user.dict,
}
export default getters
