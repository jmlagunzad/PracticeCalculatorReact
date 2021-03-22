import React, { Component } from 'react';
import Square from "./square";

class Layout extends Component {
    renderSquare = i => {
        return (<Square 
                  value={i}
                    onClick={this.props.onClick}
                  />
        );  
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare('+')}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare('-')}
                </div>
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare('*')}
                </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare('C')}
                    {this.renderSquare('=')}
                    {this.renderSquare('/')}
                </div>
            </div>
        );
    }
}
 
export default Layout;