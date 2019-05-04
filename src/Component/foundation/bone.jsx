import React from 'react'
import { connect } from 'react-redux'

import Tabbar from '@/Component/foundation/tabbar'

class Bone extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'dashboard',
      hidden: false
    }
  }

  render () {
    return (
      <div className="bone">
        <div className="module">
          {this.props.children}
        </div>
        <Tabbar></Tabbar>
      </div>
    )
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(Bone)
