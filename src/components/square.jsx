import React, { Component } from 'react';

class Square extends Component {

    render() { 
        const value = this.props.value;
        return (
            <button 
                className = "square"
                onClick = {() => this.props.onClick(value)}
                >
                {value}
            </button>
        );
    }
}
 
export default Square;