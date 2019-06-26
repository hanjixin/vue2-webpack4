import request from 'src/config/request'
export function sendCode (phone) {
  // 获取所有公司
  return request({
    url: '/sms/sendvcode',
    method: 'post',
    params: {
      mobile: phone,
      channel: 1
    },
    data: {
      mobile: phone,
      channel: 1
    }
  })
}
export function login (phone, code, qrid) {
  // 获取所有公司
  return request({
    url: '/login/mobile',
    method: 'post',
    data: {
      mobile: phone,
      vcode: code,
      qrid
    },
    params: {
      mobile: phone,
      vcode: code,
      qrid
    }
  })
}

export function getAllCompany () {
  // 获取所有公司
  return request({
    url: '/company',
    method: 'get',
    params: {}
  })
}

export function getCompanyIndustry () {
  // 获取所有公司领域
  return request({
    url: '/company/industry',
    method: 'get',
    params: {}
  })
}
export function getCompanyScale () {
  // 获取所有公司规模
  return request({
    url: '/company/scale',
    method: 'get',
    params: {}
  })
}
/*
  {
    "data": {
      "address": "string",
      "companyLicenseUrl": "string",
      "companyScaleId": 0,
      "id": 0,
      "industryFieldIds": [
        0
      ],
      "introduce": "string",
      "logoUrl": "string",
      "name": "string",
      "shortName": "string",
      "status": 0
    }
  }
*/
export function createCompany (data) {
  // 添加公司
  return request({
    url: '/company',
    method: 'post',
    data: {
      data: data
    }
  })
}
export function editCompany (data) {
  // 更新公司
  return request({
    url: '/company',
    method: 'put',
    data: {
      data: data
    }
  })
}
export function deleteCompany (id) {
  // 删除公司
  return request({
    url: '/company/' + id,
    method: 'post',
    data: {}
  })
}
export function getPositon () {
  // 获取职位列表
  return request({
    url: '/job',
    method: 'get',
    params: {}
  })
}
export function getPositonDetail (id) {
  // 获取职位详情
  return request({
    url: '/job/' + id,
    method: 'get',
    params: {}
  })
}

export function createPositon (datas) {
  // 添加职位
  return request({
    url: '/job',
    method: 'post',
    data: {
      data: datas
    }
  })
}

export function unlinePositon (id, status) {
  // 职位上下线
  return request({
    url: '/job/Offline/' + id + '/' + status,
    method: 'put',
    data: {}
  })
}
export function editPositon (datas) {
  // 编辑职位
  return request({
    url: '/job',
    method: 'put',
    data: {
      data: datas
    }
  })
}
export function deletePositon (id) {
  // 删除职位
  return request({
    url: '/job/' + id,
    method: 'delete',
    data: {}
  })
}
export function getAddress (id) {
  // 所有地址
  return request({
    url: '/job/addresses',
    method: 'get'
  })
}
export function getAddresDetail (id) {
  // 地址详情
  return request({
    url: '/job/addresses/' + id,
    method: 'get',
    data: {
      data: datas
    }
  })
}
export function createAddress (datas) {
  // 地址添加
  return request({
    url: '/job/address',
    method: 'post',
    data: {
      data: datas
    }
  })
}
export function editAddress (datas) {
  // 地址编辑
  return request({
    url: '/job/address',
    method: 'put',
    data: {
      data: datas
    }
  })
}
export function deleteAddress (id) {
  // 地址删除
  return request({
    url: '/job/address/' + id,
    method: 'delete',
    data: {}
  })
}
export function addjobadvantage (data) {
  // 添加亮点
  return request({
    url: '/job/advantage',
    method: 'post',
    data: {
      data
    }
  })
}
export function getJobadvantage () {
  // 获取亮点
  return request({
    url: '/job/advantage',
    method: 'get',
    data: {}
  })
}
export function getApplyUser (userId) {
  // 获取候选人
  return request({
    url: '/applyjob/' + userId,
    method: 'get',
    data: {}
  })
}
export function addContract (data) {
  // 添加录用协议
  return request({
    url: '/contract',
    method: 'post',
    data: {
      data: data
    }
  })
}
export function getContract (id, isview = true) {
  // 获取录用协议
  return request({
    url: '/contract/' + id ,
    method: 'get',
    params: {
      view : isview
    },
    data: {}
  })
}
export function changeContractSatus (contractId, status) {
  // 改变录用协议状态
  return request({
    url: `/contract/${contractId}/${status}`,
    method: 'patch',
    data: {}
  })
}
export function rejectContract (contractId, content) {
  // 拒绝工作
  return request({
    url: `/contract/refuse/${contractId}`,
    method: 'patch',
    data: {
      data: content
    }
  })
}
export function uploadContract (contractId, url) {
  // 上传合同
  // alert(JSON.stringify(url))
  contractId = parseInt(contractId)
  return request({
    url: `/contract/accept/${contractId}`,
    method: 'patch',
    data: url
  })
}
export function contractComment (data) {
  // 职位评论
  return request({
    url: `/comment`,
    method: 'post',
    data: {
      data
    }
  })
}
export function getPositionList (companyId) {
  //
  return request({
    url: `/job/${companyId}/1/50`,
    method: 'get',
    data: {}
  })
}
export function addCompanyCollection (userId, jobId) {
  // 公司端添加收藏
  return request({
    url: `/collection/company`,
    method: 'post',
    data: {
      data: {
        userId,
        jobId
      }
    }
  })
}
export function addPersonalCollection (id) {
  // 个人端添加收藏
  return request({
    url: `/collection/person`,
    method: 'post',
    data: {
      data: id
    }
  })
}
export function delCompanyCollection (id) {
  // 公司端删除收藏
  return request({
    url: `/collection/company/${id}`,
    method: 'delete',
    data: {}
  })
}
export function delPersonalCollection (id) {
  // 个人端删除收藏
  return request({
    url: `/collection/person/${id}`,
    method: 'delete',
    data: {}
  })
}
export function getPersonalCollection (id, jobId) {
  // 个人端删除收藏
  return request({
    url: `/collection/person/job/${id}`,
    method: 'get',
    params: {
      jobId
    }
  })
}
export function getCompanyCollection (id, jobId) {
  // 公司端获取收藏
  return request({
    url: `/collection/company/applicant/${id}`,
    method: 'get',
    params: {
      jobId
    }
  })
}
export function getEmploymentList (status) {
  // 查询录用列表
  return request({
    url: `/contract/jobuser/job`,
    method: 'get',
    params: {
      status: status
    }
  })
}

export function getEmploymentUserList (jobTypeId, page, status) {
  // 查询职位录用人列表
  return request({
    url: `/contract/jobuser/user`,
    method: 'get',
    params: {
      status,
      jobTypeId: jobTypeId,
      pageNo: page,
      pageSize: 20
    }
  })
}

export function getEmploymentUserDetail (contractId, user_id) {
  return request({
    url: `/contract/jobuser/entry`,
    method: 'get',
    params: {
      contractId: contractId,
      userId: user_id
    }
  })
}
export function getUserAcceptDetail (id) {
  // 获取用户之前是否入职
  return request({
    url: `/contract/status/accept/${id}`,
    method: 'get'
  })
}
export function getCompanyComment (companyId, pageNo, pageSize) {
  // 获取公司评论记录
  return request({
    url: `/comment/${companyId}/${pageNo}/${pageSize || 20}`,
    method: 'get'
  })
}

export function getComment(contractId) {
  return request({
    url: `/comment/${contractId}`,
    method: 'get'
  })
}