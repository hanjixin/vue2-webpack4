import request from 'src/config/request'
export function upLoad(file, type) {
  
  // let formData = new FormData()
  // formData.append('uploadType', type)
  // formData.append('file', [convertBase64UrlToBlob(file)])
  // alert(JSON.stringify(formData) + convertBase64UrlToBlob(file) + 'file'+file + 'typ' + type)
  return request({
    url: '/upload',
    method: 'post',
    data: {
      data: [file]
    }
    // headers: {
    //   'content-type': 'multipart/form-data'
    // }
  })
}
export function convertBase64UrlToBlob(urlData) {
  var bytes = window.atob(urlData.split(',')[1]); // 去掉url的头，并转换为byte
  // 处理异常,将ascii码小于0的转换为大于0
  var ab = new ArrayBuffer(bytes.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  console.log(new Blob([ab], {
    type: 'image/png'
  }))
  return new Blob([ab], {
    type: 'image/png'
  });
}
export function downLoad(token, url) {
  var iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  console.log(process.env.BASE_API)
  iframe.src = process.env.BASE_API + '/api/file/download' + '?token=' + token + '&url=' + url
  document.body.appendChild(iframe)
}

export function baseUrl() {
  return process.env.BASE_API
}

export function getawayUrl() {
  return process.env.GETAWAY
}

export function resetUrl() {
  console.log(process.env, '?callback=' + process.env.CALLBACKURL)
  return process.env.RESET_URL + '?callback=' + process.env.CALLBACKURL
}
