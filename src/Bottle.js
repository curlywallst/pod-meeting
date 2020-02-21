import React, { Component } from 'react'

class Bottle extends Component {
    render() {
        return (
            <div>
                <li><strong>{this.props.winery}</strong> - {this.props.grape} at ${this.props.price} </li>
        
            </div>
        )
    }
}

export default Bottle