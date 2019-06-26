import store from 'src/store/index'
export function setupWebViewJavascriptBridge (callback) {
  var bridge =
    window.WebViewJavascriptBridge || window.WKWebViewJavascriptBridge
  if (bridge) {
    return callback(bridge)
  }
  var callbacks = window.WVJBCallbacks || window.WKWVJBCallbacks
  if (callbacks) {
    return callbacks.push(callback)
  }
  window.WVJBCallbacks = window.WKWVJBCallbacks = [callback]
  if (window.WKWebViewJavascriptBridge) {
    window.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(
      null
    )
  } else {
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }
}

export function CLIENT_USER_INFO () {
  // 用户信息
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      console.log(bridge, '+++++')
      bridge.callHandler('CLIENT_USER_INFO', function (response) {
        // alert(response)
        store.dispatch('setUserInfo', JSON.parse(response))
        resolve(response)
      })
    })
  })
}
export function CLIENT_CHOOSE_IMAGE (options) {
  var option = {
    opentype: 'menu', // 打开方式：  相机？相册？ 选择菜单
    filetype: 'photo', // 文件类型：  图片？视频
    selecttype: 'single' // 选择方式：  单选？多选
  }
  if (options) {
    option = options
  }
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_CHOOSE_IMAGE', option, function (response) {
        resolve(response)
      })
    })
  })
}

export function CLIENT_USER_LOCATION () {
  // 客户端定位
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_USER_LOCATION', function (response) {
        resolve(response)
      })
    })
  })
}

export function CLIENT_GET_IP () {
  // 客户端定位
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_GET_IP', function (response) {
        resolve(response)
      })
    })
  })
}

export function CLIENT_EXIT_WEBAPP () {
  // 关闭webview
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_EXIT_WEBAPP', function (response) {
        resolve(response)
      })
    })
  })
}
export function CLIENT_REFRESH_PUBLISH_JOB () {
  // 上下线刷新列表
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_REFRESH_PUBLISH_JOB', function (response) {
        resolve(response)
      })
    })
  })
}

export function CLIENT_OPEN_MAIN () {
  // 打开主页面
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_OPEN_MAIN', function (response) {
        resolve(response)
      })
    })
  })
}
export function CLIENT_CHAT (
  emId,
  name,
  avatar,
  companyName,
  apply_job,
  job_id
) {
  // "emId":"string",
  //    *     "name":"string",
  //    *     "avatar":"string",
  //    *     "companyName":"string",
  //    *     "apply_job":"string"
  // alert(JSON.stringify({
  //   emId, name, avatar, companyName, apply_job, job_id
  // }));
  if (!emId || !name || !avatar || !companyName || !apply_job) {
    alert('参数不对')
    return false
  }
  var option = {
    emId: '' + emId,
    name: '' + name,
    avatar: '' + avatar,
    companyName: '' + companyName,
    apply_job: '' + apply_job,
    job_id: '' + job_id
  }
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_CHAT', option, function (response) {
        resolve(response)
      })
    })
  })
}
export function CLIENT_CHOSE_CITY (cityName, cityCode) {
  // 选择城市的回调
  // if (!emId || !name || !avatar || !companyName) {
  //   alert('参数不对')
  //   return false
  // }
  var option = {
    cityName: cityName,
    cityCode: cityCode
  }
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_CHOSE_CITY', option, function (response) {
        resolve(response)
      })
    })
  })
}
export function CLIENT_OPEN_JOB_MANAGE (cityName, cityCode) {
  // if (!emId || !name || !avatar || !companyName) {
  //   alert('参数不对')
  //   return false
  // }
  var option = {
    cityName: cityName,
    cityCode: cityCode
  }
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_OPEN_JOB_MANAGE', option, function (
        response
      ) {
        resolve(response)
      })
    })
  })
}
export function CLIENT_SEND_OFFER (offer_id) {
  // 录用Offer
  // if (!emId || !name || !avatar || !companyName) {
  //   alert('参数不对')
  //   return false
  // }
  var option = {
    offer_id: offer_id
  }
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_SEND_OFFER', option, function (response) {
        resolve(response)
      })
    })
  })
}
export function CLIENT_REFRESH_CHAT_OFFER (offer_id) {
  // 同意/拒绝/放弃 Offer
  // if (!emId || !name || !avatar || !companyName) {
  //   alert('参数不对')
  //   return false
  // }
  var option = {
    offer_id: offer_id
  }
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_REJECT_OFFER', option, function (response) {
        resolve(response)
      })
    })
  })
}
export function CLIENT_READ_TEXT (text, status) {
  // 文字读取
  // if (!emId || !name || !avatar || !companyName) {
  //   alert('参数不对')
  //   return false
  // }
  var option = {
    operate: status, // 1-播放  2-暂停  3-继续播放
    text: text + ''
  }
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_READ_TEXT', option, function (response) {
        resolve(response)
      })
    })
  })
}
export function CLIENT_REFRESH_PERSONAL_OFFER_LIST (text) {
  // 不是聊天进入刷新列表
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('CLIENT_REFRESH_PERSONAL_OFFER_LIST', function (
        response
      ) {
        resolve(response)
      })
    })
  })
}
