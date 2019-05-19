import { push } from 'react-router-redux'
import { message } from 'antd'
import axios from 'axios'

import config from '../utils/Config'

// let target = process.server_url

// Template
// Action Defination
export const demoAction = (json) => ({ type: 'UPDATE_DEMO_JSON', json })
// Dispatch to Methods Defination
export const demoRequest = () => {
  let url = target + '/getCourse'
  return (dispatch) => {
    return axios.get(url).then((response) => {
      dispatch({
        type: 'GET_COURSE',
        course: response.data
      })
    })
  }
}

// Sign by User & Passwd
let target = config.server_url

export const loginUserSuccess = (token) => {
  localStorage.setItem('token', token)
  return {
    type: 'LOGIN_USER_SUCCESS',
    token: token
  }
}

export const regUserSuccess = (token) => {
  localStorage.setItem('token', token)
  return {
    type: 'REG_USER_SUCCESS',
    payload: {
      token: token
    }
  }
}

export const loginUserFailure = (errmsg) => {
  localStorage.removeItem('token')
  return {
    type: 'LOGIN_USER_FAILURE'
  }
}

export const loginUserRequest = () => {
  return {
    type: 'LOGIN_USER_REQUEST'
  }
}

export const loginUser = (username, password, redirect) => {
  let path = '/login'
  let url = target + path
  // console.log('redirect:',redirect)
  return (dispatch) => {
    // return axios.post(url,{username,password})
    dispatch(loginUserRequest())
    return axios.post(url, { username, password }).then((response) => {
      if (response.data) {
        // console.log('loginUser response.data :',response.data)
        dispatch(loginUserSuccess(JSON.stringify(response.data)))
        window.location.href = 'http://www.zhiqiu.pro' + redirect
        // dispatch(push(redirect))
      } else {
        message.error('用户名或密码错误')
      }
    }).catch((error) => {
      dispatch(loginUserFailure(error))
    })
  }
}

export const regUser = (username, password, redirect) => {
  let url = target + '/signup'
  return dispatch => {
    return axios.post(url, { username, password }).then((response) => {
      // console.log('response.data :',JSON.stringify(response.data))
      if (response.data.signMsg === 'failed') {
        // console.log('注册失败！')
        message.error('注册失败')
      } else if (response.data.signMsg === 'existed') {
        // console.log('用户已存在')
        message.warning('账户名已存在，请重新输入')
      } else {
        // console.log('注册成功')
        message.success('注册成功')
        window.location.href = 'http://www.zhiqiu.pro' + redirect
      }
    }).catch((error) => {
      alert(error)
    })
  }
}

// Sign by Wechat
export const getWxUserInfoSuccess = (token) => {
  localStorage.setItem('token', token)
  return {
    type: 'GET_WX_USERINFO_SUCCESS',
    token: token
  }
}
const saveTempWxInfo = (wxInfo) => {
  return {
    type: 'SAVE_TEMP_WX_INFO',
    wxInfo
  }
}

export const getWxAuth = (code, state) => {
  let url = target + '/get_wx_auth'
  return (dispatch) => {
    // console.log(JSON.stringify(code))
    return axios.get(url, {
      params: {
        code,
        state
      }
    }).then((response) => {
      if (response.data.newuser) {
        // console.log('newuser')
        // console.log('wxInfo:'+JSON.stringify(response.data.wx_info))
        dispatch(saveTempWxInfo(response.data.wx_info))
      } else {
        // console.log('olduser')
        dispatch(getWxUserInfoSuccess(JSON.stringify(response.data.user_info)))
        window.location.href = 'http://www.zhiqiu.pro' + state
      }
    }).catch((error) => {
      alert('error getWxAuth' + JSON.stringify(error))
    })
  }
}

export const logoutwx = () => {
  // localStorage.removeItem('token')
  return {
    type: 'LOGOUT_WX_USER'
  }
}

export const logoutwxAndRedirect = () => {
  return (dispatch) => {
    dispatch(logoutwx())
    dispatch(push('/mobile-reveal/login'))
  }
}

export const setUserInfo = (wxInfo, realname, stu, groupValue, redirectRoute) => {
  let url = target + '/set_userinfo'
  return (dispatch) => {
    return axios.post(url, { wx_info: wxInfo, realname, stu, groupValue }).then((response) => {
      dispatch(getWxUserInfoSuccess(JSON.stringify(response.data)))
      // dispatch(push(redirectRoute))
      window.location.href = 'http://www.zhiqiu.pro' + redirectRoute
    }).catch((error) => {
      alert('error setUserInfo' + JSON.stringify(error))
    })
  }
}

export const getSclGroup = (schoolID) => {
  let url = target + '/getSclGroup'
  return (dispatch) => {
    return axios.get(url, {
      params: {
        school_id: schoolID
      }
    }).then((response) => {
      dispatch({
        type: 'GET_SCHOOL_GROUP',
        json: response.data
      })
    }).catch((error) => {
      alert(error)
    })
  }
}
