import request from 'src/config/request'
export function addFeedback(term_id, categories, type, title, content, contact, images, client) { // 添加反馈
  return request({
    url: '/api/feedback',
    method: 'post',
    data: {
      term_id,
      categories,
      type,
      title,
      content,
      contact,
      images,
      client
    }
  })
}

export function getClassInfo(class_id, term_id) {
  return request({
    url: 'api/front/classes/class_appoint',
    method: 'get',
    params: {
      class_id,
      term_id
    }
  })
}
export function getClassStudent(class_id, term_id, limit, page) {
  return request({
    url: '/api/front/classes/class_students',
    method: 'get',
    params: {
      class_id,
      term_id,
      limit,
      page
    }
  })
}
export function getClassAtt(class_id, term_id, limit, page) {
  return request({
    url: 'api/front/class/attendance?search=class_id:' + class_id,
    method: 'get',
    params: {
      term_id,
      class_id,
      page,
      limit
    }
  })
}
export function appExpulsion(term_id, student_ids, apply_description, expulsion_cate) { // 申请除名
  return request({
    url: '/api/front/expulsion',
    method: 'post',
    data: {
      term_id,
      student_ids,
      apply_description,
      expulsion_cate
    }
  })
}
export function getSudentDetail() {
  return request({
    url: '/api/front/student/me',
    method: 'get'
  })
}
export function getStransfer(term_id, student_ids, target_class_id, apply_description, apply_status_name) { // 转班
  return request({
    url: '/api/front/transfer',
    method: 'post',
    data: {
      term_id,
      student_ids,
      target_class_id,
      apply_description
    }
  })
}
export function getLeaves() { // 请假列表
  return request({
    url: 'api/front/leaves',
    method: 'get'
  })
}
export function getLeaveinfo(id) { // 请假详情
  return request({
    url: 'api/approve/' + id,
    method: 'get'
  })
}
export function getMeettingLeave(data) { // 班会请假
  return request({
    url: 'api/front/meetingleave',
    method: 'post',
    data
  })
}
export function getAssignmentleave(data) { // 作业请假
  return request({
    url: '/api/front/assignmentleave',
    method: 'post',
    data: data
  })
}
export function getClassmeeting() { // 班级班会
  return request({
    url: 'api/front/classmeeting',
    method: 'get'
  })
}

export function getNotes(term_id, course_id, note_type, limit, page) { // 笔记列表
  return request({
    url: 'api/front/notes',
    method: 'get',
    params: {
      term_id,
      course_id,
      note_type,
      limit,
      page
    }
  })
}
export function getMyNote(term_id) {
  return request({
    url: 'api/front/mynotes',
    method: 'get',
    params: {
      term_id
    }
  })
}
export function addNotes(term_id, course_id, note_type, limit, page) { // 笔记添加
  return request({
    url: '/api/front/notes',
    method: 'post',
    data: {
      term_id,
      course_id,
      note_type,
      limit,
      page
    }
  })
}
export function editNotes(id, content, is_public) { // 笔记编辑
  return request({
    url: '/api/front/notes/' + id,
    method: 'put',
    data: {
      content,
      is_public
    }
  })
}
export function deleteNotes(id) { // 笔记删除
  return request({
    url: '/api/front/notes/' + id,
    method: 'delete'
  })
}
export function getChildren(data) {
  return request({
    url: '/api/comment/childcomment',
    method: 'get',
    params: {
      comment_id: data.target_id
    }
  })
}
export function editUser(id, icon) {
  return request({
    url: '/api/user/' + id,
    method: 'put',
    data: {
      icon: icon
    }
  })
}
