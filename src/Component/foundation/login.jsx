import React from 'react'
import { connect } from 'react-redux'
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile'
import { demoAction } from '@/Action/index'

class Template extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  method = () => {
  }
  render () {
    return (
      <div>
        <List>
          <InputItem clear placeholder="Username">用户</InputItem>
          <InputItem clear placeholder="Password">密码</InputItem>
        </List>
        <WhiteSpace></WhiteSpace>
        <Button type="primary" loading={false}>
          <i className="iconfont icon-login"></i>
          &nbsp;
          Sign In
        </Button>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    prop: state.demoReducer.toJS().json.prop
  }),
  (dispatch) => ({
    onClick: () => {
      dispatch(demoAction({ prop: 'kiiil' }))
    }
  })
)(Template)
