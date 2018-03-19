import React from 'react';

class Square extends React.Component{
  render(){
    return (
      <div className="square"
           onClick={this.props.handleClick.bind(this)}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;
