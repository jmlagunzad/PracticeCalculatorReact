import React, { Component } from 'react';

class Equation extends Component {

    render() { 
        return (
            <form>
                <input 
                    type="text" 
                    name={this.props.name} 
                    value={this.props.expression}
                    onChange={this.props.onChange}
                    placeholder={this.props.placeholder}
                    />
            </form>
        );
    }
}
 
export default Equation;