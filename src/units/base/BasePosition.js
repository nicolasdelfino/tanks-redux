import React from 'react';
class BasePosition extends React.Component {
  render() {
    return (
      <div style={{
        position: 'absolute',
        left: this.props.position.x, top: this.props.position.y,
        'transition': 'all ' + this.props.moveSpeed/1000 + 's ease'

      }}>
        {this.props.children}
      </div>
    )
  }
}

export default BasePosition
