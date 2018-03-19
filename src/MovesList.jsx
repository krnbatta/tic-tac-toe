import React from 'react';

class MovesList extends React.Component{
  render(){
    let list = [];
    for(let i=1; i<=this.props.totalMoves; i++){
        list.push(i);
    }
    return (
      <div id="moves-list">
        <ol>
          <li><button>Go to game start</button></li>
          { list.map((move) => <li key={move.toString()}><button>Go to move #{move}</button></li>) }
        </ol>
      </div>
    );
  }
}

export default MovesList;
