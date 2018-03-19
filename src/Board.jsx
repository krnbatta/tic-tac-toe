import React from 'react';
import Square from './Square';

class Board extends React.Component {
    render() {
        let i = 0;
        const self = this;
        const squares = [];
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ].forEach((row) => {
            row.forEach((box) => {
              let value = "";
              let currentSquare = this.props.currentGame[i];
              if(currentSquare==1){
                value = "O";
              }
              else if(currentSquare==-1){
                value = "X";
              }
              squares.push(<Square key={box} value={value} handleClick={self.props.squareClicked.bind(self, i)} />);
              i++;
            });
        });
        return (
            <div id="board">
              {squares}
            </div>
        );
    }
}

export default Board;
