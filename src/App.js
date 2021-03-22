import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout';
import Equation from './components/equation';

class App extends Component {
  state = { 
    activeExpression:{
      expression: '',
      exp1: '',
      lastOp: '',
    },
    shouldErase: false,
    history: [],
  }

  handleChange = e => {
    console.log(this.state.activeExpression.expression);
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeExpression = { ...this.state.activeExpression, [name]: value };
    this.setState({ activeExpression });
  };

  calculate = op => {
    let activeExpression;
    let history = this.state.history;
    let result;
    const shouldErase = true;

    switch(this.state.activeExpression.lastOp){
      case '+': result = parseInt(this.state.activeExpression.exp1) + parseInt(this.state.activeExpression.expression);
                activeExpression = { ...this.state.activeExpression, 
                  exp1: '', 
                  expression: result,
                  lastOp: op};
                break;
      case '-': result = parseInt(this.state.activeExpression.exp1) - parseInt(this.state.activeExpression.expression);
                activeExpression = { ...this.state.activeExpression, 
                  exp1: '', 
                  expression: result,
                  lastOp: op};
                break;
      case '*': result = parseInt(this.state.activeExpression.exp1) * parseInt(this.state.activeExpression.expression);
                activeExpression = { ...this.state.activeExpression, 
                  exp1: '', 
                  expression: result,
                  lastOp: op};
      break;
      case '/': result = parseInt(this.state.activeExpression.exp1) / parseInt(this.state.activeExpression.expression);
                activeExpression = { ...this.state.activeExpression, 
                  exp1: '', 
                  expression: result,
                  lastOp: op};
      break;
      case '=': 
          if(this.state.activeExpression.lastOp === '+'){
            result = parseInt(this.state.activeExpression.exp1) + parseInt(this.state.activeExpression.expression);
            activeExpression = { ...this.state.activeExpression, 
              exp1: '', 
              expression: result,
              };
          }
          else if(this.state.activeExpression.lastOp === '-'){
            result = parseInt(this.state.activeExpression.exp1) - parseInt(this.state.activeExpression.expression);
            activeExpression = { ...this.state.activeExpression, 
              exp1: '', 
              expression: result,
              };
          }
          else if(this.state.activeExpression.lastOp === '*'){
            result = parseInt(this.state.activeExpression.exp1) * parseInt(this.state.activeExpression.expression);
            activeExpression = { ...this.state.activeExpression, 
              exp1: '', 
              expression: result,
              };
          }
          else if(this.state.activeExpression.lastOp === '/'){
            result = parseInt(this.state.activeExpression.exp1) / parseInt(this.state.activeExpression.expression);
            activeExpression = { ...this.state.activeExpression, 
              exp1: '', 
              expression: result,
              };
          }
          else{
            activeExpression = { ...this.state.activeExpression };
          }
          break;
      default:{}
        

    }

    history.push(this.state.activeExpression.expression + this.state.activeExpression.lastOp, '----------', result);
    
    this.setState({ activeExpression, history, shouldErase });
  }

  isNumeric = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  handleClick = value => {

    if(this.isNumeric(value)){

      //Save Value and Erase Input Bar
      if(this.state.shouldErase){
        //console.log('save value n erase');
        const activeExpression = { ...this.state.activeExpression, exp1: this.state.activeExpression.expression, expression: '' + value}
        const shouldErase = false;

        this.setState({ activeExpression, shouldErase});
        return;
      }

      //Change Value of Input Bar
      //console.log('change input');
      const activeExpression = { ...this.state.activeExpression, expression: this.state.activeExpression.expression +  '' + value}
      this.setState({ activeExpression });

    }
    else{

      if(value === 'C'){
        const activeExpression = {
          expression: '',
          exp1: '',
          lastOp: '',
        };
        const shouldErase = false;
        const history = [];

        this.setState({activeExpression, shouldErase, history})
        return;
      }

      if(this.state.shouldErase){
        const activeExpression = { ...this.state.activeExpression, lastOp: value};             
        this.setState({ activeExpression  });
      }
      
      else{
        if(this.state.activeExpression.exp1 === ''){
          const activeExpression = { ...this.state.activeExpression, lastOp: value}
          const shouldErase = true;
          const history = this.state.history;

          history.push(this.state.activeExpression.expression);

          this.setState({ activeExpression, shouldErase, history });
          return;
        }

        this.calculate(value);
      }

    }

    console.log('---------------------------')
    console.log('value is: '+ value);
    console.log('exp is: ' + this.state.activeExpression.expression)
    console.log('exp1 is: ' + this.state.activeExpression.exp1)
    console.log('shouldErase is: ' + this.state.shouldErase)
    console.log('lastOp is: ' + this.state.activeExpression.lastOp)
  };

  render() { 
    const history = this.state.history;

    const steps = history.map( item => {
      return (
        <li>
          {item}
        </li>
      );
    });

    return ( 
      <div>
        <Equation
          expression = {this.state.activeExpression.expression}
          onChange = {this.handleChange}
          name = "expression"
          placeholder = "Compute here"
          />
        <Layout
          onClick = {this.handleClick}
        />
        <span>
          Operation mode: {this.state.activeExpression.lastOp}
        </span>
        <ul>
        History:
          {steps}
        </ul>
      </div>
    );
  }
}
 
export default App;
