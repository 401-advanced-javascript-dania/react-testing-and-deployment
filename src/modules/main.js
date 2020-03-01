import React from 'react';
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter:0,
    };
  }
  handleIncrementClicker = e =>{
    e.preventDefault();
    let counter=this.state.counter;
    ++counter;
    this.setState({counter});
  }
  handleDecrementClicker = e =>{
    e.preventDefault();
    let counter=this.state.counter;
    --counter;
    this.setState({counter});
  }
  render(){
    return(
      <article>
        <h2>
          {this.state.counter}
        </h2>
        <button className='one' onClick={this.handleIncrementClicker}>
           counterup 
        </button>
        <button onClick={this.handleDecrementClicker}>
           counterdown 
        </button>
      </article>
    );
  }
}
export default Main;