import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { demoAction } from '@/Action/index'

import { Link } from 'react-router'

const SubMenu = Menu.SubMenu
const { Header, Sider, Content } = Layout

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render () {
    return (
      <Layout className='layout'>
        <Sider className='sidebar' trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className='logo'>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
            {this.state.collapsed ? null : (<span>Pure React</span>)}
          </div>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Link to='/about'>
                <Icon type='user' />
                <span>About</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/inbox'>
                <Icon type='video-camera' />
                <span>Inbox</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/inbox/messages/id-23'>
                <Icon type='video-camera' />
                <span>Params</span>
              </Link>
            </Menu.Item>
            <SubMenu key='sub2' title={<span><Icon type='appstore' /><span>Navigation Two</span></span>}>
              <Menu.Item key='8'>
                <Link to='/redux'>
                  <span>Redux</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className='navbar'>

          </Header>
          <Content className='module'>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(App)
