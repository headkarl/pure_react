import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

import config from './Config'

let appid = config.appid
let redirectURI = config.redirect_uri

export const requireAuthentication = UserAuthWrapper({
  authSelector: state => {
    // alert('state:'+JSON.stringify(state))
    return state.AuthData
  },
  predicate: AuthData => {
    // alert('AuthData:'+JSON.stringify(AuthData))
    return AuthData.get('isAuthenticated')
  },
  // failureRedirectPath: (state, ownProps) => {
  //   // console.log('ownProps.location.query.redirect :', ownProps.location.query.redirect)
  //   // return ownProps.location.pathname + ownProps.location.search
  //   // return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid +
  //   // '&redirect_uri=' + redirectURI + '&response_type=code&scope=snsapi_userinfo&state=' + ownProps.location.query.redirect + '#wechat_redirect'
  // },
  redirectAction: routerActions.push,
  wrapperDisplayName: 'UserIsJWTAuthenticated'
})

export const redirectToWechat = (state) => {
  const windowIfDefined = typeof window === 'undefined' ? null : window
  if (windowIfDefined) {
    let redirectURL = state.location.pathname + state.location.search
    windowIfDefined.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid +
    '&redirect_uri=' + redirectURI + '&response_type=code&scope=snsapi_userinfo&state=' + redirectURL + '#wechat_redirect'
  }
}
