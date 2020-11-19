import React from 'react';

class ClickityClick extends React.Component {
constructor (){
  super ();
  this.state = {
    toggled: false,
    count: 0
  };
}

handleClick = () => {
  this.setState(previousState => {
    return {
      toggled: !previousState.toggled,
      count: previousState.count + 1
    }
  })
};

render (){
  return (
    <div>
      <p>I have {this.state.toggled ? 'On' : 'Off'}</p>
      <button onClick={this.handleClick}> Click me!</button>
      <p> count: {this.state.count}</p>

    </div>
  )

}


}

export default ClickityClick