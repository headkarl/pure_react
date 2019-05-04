import React from 'react'
import { connect } from 'react-redux'
import { Card, List, WhiteSpace } from 'antd-mobile'
import { demoAction } from '@/Action/index'

const Item = List.Item
const Brief = Item.Brief

class Template extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <div className="account">
        <Card full>
          <div className="background">
            <div className="logo">
              <i className="iconfont icon-user"></i>
            </div>
            <div className="title">Someone</div>
          </div>
        </Card>
        <WhiteSpace></WhiteSpace>
        <List renderHeader={() => '学习情况'}>
          <Item
            extra="本周排名第2名"
            arrow="horizontal"
            thumb={<i className="iconfont icon-linechart"></i>}
            multipleLine
            onClick={() => {}}>
            学习时长 <Brief>3254小时</Brief>
          </Item>
          <Item
            extra="兑换积分"
            arrow="horizontal"
            thumb={<i className="iconfont icon-gift"></i>}
            multipleLine
            onClick={() => {}}>
            积分 <Brief>238</Brief>
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List renderHeader={() => '账号设置'}>
          <Item
            extra="修改密码"
            arrow="horizontal"
            multipleLine
            onClick={() => {}}>
            用户名 <Brief>Someone</Brief>
          </Item>
          <Item
            extra="绑定邮箱"
            arrow="horizontal"
            multipleLine
            onClick={() => {}}>
            邮箱 <Brief>someone@somewhere.com</Brief>
          </Item>
          <Item
            extra="绑定手机"
            arrow="horizontal"
            multipleLine
            onClick={() => {}}>
            手机 <Brief>13813813800</Brief>
          </Item>
        </List>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    // prop: state.demoReducer.toJS().json.prop
  }),
  (dispatch) => ({
    onClick: () => {
      // dispatch(demoAction({ prop: 'kiiil' }))
    }
  })
)(Template)
