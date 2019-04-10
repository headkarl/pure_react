import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { demoAction } from '@/Action/index'

class ReduxBook extends React.Component {
  render () {
    return (
      <div>
        <div>{this.props.prop}</div>
        <button onClick = {this.props.onClick}>update json</button>
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
)(ReduxBook)
