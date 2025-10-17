
class Count extends React.Component {   
  state = { count: 0 }; 
  
  handleClick = () => { 	
    setTimeout(() => {   	
      this.setState({ count: this.state.count + 1 }); 	
    }, 0); 	
    this.setState({ count: this.state.count + 1 });   
  }; 
  
  render() { 	
    return (   	
      <div>     	
        <h1>Count: {this.state.count}</h1> 	   
        <button onClick={this.handleClick}>Click me!</button>   	
      </div> 	
    );   
  } 
}

export default Count
