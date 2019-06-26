import request from 'src/config/request'
import { CLIENT_CHOOSE_IMAGE } from 'src/config/jsBridge'
import { upLoad } from 'src/api/files'
export function getAllCity() { // 获取所有城市
  return request({
    url: '/city/all',
    method: 'get',
    params: {}
  })
}

export function avatarUpload(token) {
  return new Promise(function(resolve, reject) {
    CLIENT_CHOOSE_IMAGE().then((res) => {
      var src = JSON.parse(res)[0].data
      upLoad(src, 3).then(res => {
        // alert(res.data.data[0]);
        request({
          url: '/user/updateBasicInfo',
          method: 'post',
          params: {
            portrait: res.data.data[0],
            ticket: token
          }
        }).then(res => {
          console.log('啊哈哈')
        })
        resolve(res.data.data[0])
      }).catch(err => {
        reject(err)
      })
    })
  })
  
}
export function getcityList(parentcode) {
  return request({
    url: '/area/parentcode/' + parentcode,
    method: 'get',
    params: {}
  })
}

export function updateInfo(name, gendar, age, education, experience, ticket, introduce, identityNo, portrait) {
  return request({
    url: '/user/updateBasicInfo',
    method: 'post',
    params: {
      name,
      gendar,
      age,
      education,
      experience,
      ticket,
      introduce,
      identityNo,
      portrait
    }
  })
}

export function getDict() { // 获取字典
  return request({
    url: '/dict/all',
    method: 'get',
    params: {}
  })
}

export function addUserHope(jobType, dictCityId, salary, ticket, minSalary, maxSalary) {
  return request({
    url: '/userexpect/add',
    method: 'post',
    data: {
      jobType,
      dictCityId,
      salary,
      ticket,
      minSalary,
      maxSalary
      // data: {
        
      // }
    }
  })
}
export function updateUserHope(jobType, dictCityId, salary, ticket, id, minSalary, maxSalary) {
  return request({
    url: '/userexpect/update',
    method: 'post',
    data: {
      jobType,
      dictCityId,
      salary,
      ticket,
      id,
      minSalary,
      maxSalary
      // data: {
        
      // }
    }
  })
}
export function getUserInfo(userId, ticket) {
  return request({
    url: '/user/getBasicInfo',
    method: 'get',
    params: {
      userId: userId,
      ticket: ticket
    }
  })
}
export function addWork(companyName, position, startTime, endTime, content, ticket) {
  return request({
    url: '/workexperience/add',
    method: 'post',
    params: {
      companyName, 
      position, 
      startTime, 
      endTime, 
      content, 
      ticket
    }
  })
}
export function editWork(data) {
  return request({
    url: '/workexperience/modify',
    method: 'post',
    data: {
      data: data
    }
  })
}


export function getWork(userId, ticket) {
  return request({
    url: '/workexperience/find',
    method: 'get',
    params: {
      userId: userId,
      ticket: ticket
    }
  })
}
export function getUserExpect(userId, ticket) {
  return request({
    url: '/userexpect/find',
    method: 'get',
    params: {
      userId: userId,
      ticket: ticket
    }
  })
}
export function selectType(type, ticket) {
  return request({
    url: '/user/selectType',
    method: 'post',
    params: {
      type,
      ticket
    }
  })
}

