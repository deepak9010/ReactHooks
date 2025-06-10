import React from 'react';

class ConstructorState extends React.Component{
  constructor(props){
    super(props);

    this.state={
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState({
      count : this.state.count + 1
    })
  }
  render(){
    return(
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
        <h2>{this.props.text}</h2>
    </div>
    )
  }
}

ConstructorState.defaultProps={
  text:"hiii, how r u?"
}

export default ConstructorState