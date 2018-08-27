import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const oldValue = this.props.opacity
    const newValue = Math.floor((this.props.opacity - 0.1) * 100) / 100

    if (this.props.opacity >= 0.2) {
      return ( <div className="color-box" style={{opacity: oldValue}}>
        <ColorBox opacity={newValue} />
      </div> )
    } else {
      return null
    }

  }

}
