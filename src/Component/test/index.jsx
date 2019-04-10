import React from 'react'
import { Link } from 'react-router'
import { Card } from 'antd'

class About extends React.Component {
  render () {
    return <h3>About</h3>
  }
}

class Inbox extends React.Component {
  render () {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || 'Welcome to your Inbox'}
      </div>
    )
  }
}

class Message extends React.Component {
  render () {
    return <h3>Message {this.props.params.id}</h3>
  }
}

class Dashboard extends React.Component {
  render () {
    return (
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <div>Welcome to the app!</div>
      </Card>
    )
  }
}

// export default App
export {
  About, Inbox, Message, Dashboard
}
