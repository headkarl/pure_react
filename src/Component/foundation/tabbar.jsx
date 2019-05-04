import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Icon, TabBar } from 'antd-mobile'

class Tabbar extends React.Component {
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
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="RGBA(250, 250, 250, 0.8)"
      >
        <TabBar.Item
          title="Course"
          key="Course"
          icon={<i className="iconfont icon-course"></i>}
          selectedIcon={<i className="iconfont icon-course"></i>}
          selected={this.state.selectedTab === 'Course'}
          onPress={() => {
            this.setState({
              selectedTab: 'Course'
            })
            browserHistory.push('/')
          }}
          data-seed="logId"
        >
        </TabBar.Item>

        <TabBar.Item
          title="Learning"
          key="Learning"
          icon={<i className="iconfont icon-course-management"></i>}
          selectedIcon={<i className="iconfont icon-course-management"></i>}
          selected={this.state.selectedTab === 'Learning'}
          onPress={() => {
            this.setState({
              selectedTab: 'Learning'
            })
            browserHistory.push('/login')
          }}
          data-seed="logId"
        >
        </TabBar.Item>

        <TabBar.Item
          title="Search"
          key="Search"
          icon={<i className="iconfont icon-search"></i>}
          selectedIcon={<i className="iconfont icon-search"></i>}
          selected={this.state.selectedTab === 'Search'}
          onPress={() => {
            this.setState({
              selectedTab: 'Search'
            })
          }}
          data-seed="logId"
        >
        </TabBar.Item>

        <TabBar.Item
          title="Account"
          key="Account"
          icon={<i className="iconfont icon-user"></i>}
          selectedIcon={<i className="iconfont icon-user"></i>}
          selected={this.state.selectedTab === 'Account'}
          onPress={() => {
            this.setState({
              selectedTab: 'Account'
            })
            browserHistory.push('/account')
          }}
          data-seed="logId"
        >
        </TabBar.Item>
      </TabBar>
    )
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
    onClick: () => {
    }
  })
)(Tabbar)
