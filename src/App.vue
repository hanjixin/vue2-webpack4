<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition :name="transitionName" class="child-view">
       <router-view class="child-view"/>
    </transition>
   
  </div>
</template>

<script>
var self = null;
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  watch: {
    $route: old => {
      let isBack = self.$router.isBack;
      if (isBack) {
        self.transitionName = 'slide-right';
      } else {
        self.transitionName = 'slide-left';
      }
      // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
      self.$router.isBack = false;
    },
  },
  created() {
    self = this;
    if (window.history && window.history.pushState) {
      console.log(12313123)
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', (e)=> {
        this.$router.isBack = true;
      }, false);
    }
    // var phoneWidth = parseInt(window.screen.width);
    // var phoneScale = phoneWidth / 375;
    // // document.querySelector('html').style.zoom = phoneScale;
    // window.addEventListener('resize', function() {
    //   var phoneWidth = parseInt(window.screen.width);
    //   var phoneScale = phoneWidth / 375;
    //   // document.querySelector('html').style.zoom = phoneScale;
    // });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 14px !important;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  min-height: 100vh;
  background: #f0f0f5;
}
.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(250px, 0);
  transform: translate(250px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-250px, 0);
  transform: translate(-250px, 0);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s !important;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: opacity 0.1s !important;
  opacity: 0 !important;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(350px);
  opacity: 0;
}
</style>
