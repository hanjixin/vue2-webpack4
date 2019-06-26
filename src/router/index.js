import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'

Vue.use(Router)
Router.prototype.go = function (n) {
  if (n === -1) {
    console.log(this)
    this.isBack = true
  }
  history.go(n)
}
Router.prototype.back = function () {
  this.isBack = true
  this.go(-1)
}
console.log(Router.back, 121)
export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(savedPosition.x, savedPosition.y)
      }, 200)
    }
  },
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
