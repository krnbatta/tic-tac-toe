import React from 'react';
import Board from './Board';
import MovesList from './MovesList';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moves: [],
            nextPlayer: 1,
            gameEnded: false,
            winner: null
        };
        this.boardClicked = this.boardClicked.bind(this);
    }
    boardClicked(index) {
        if (!this.state.winner && !this.state.gameEnded){
            this.setState((prevState) => {
                let moves = prevState.moves, prevPlayer = prevState.nextPlayer, totalMoves = moves.length, currentGame = totalMoves ? JSON.parse(JSON.stringify(moves[totalMoves-1])) : [0,0,0,0,0,0,0,0,0];
                if(currentGame[index]){
                  return {};
                }
                currentGame[index] = prevPlayer === 1 ? 1 : -1;
                let nextPlayer = prevPlayer === 1 ? -1 : 1;
                let gameEnded = this.calculateGameEnded(totalMoves);
                let winner = this.calculateWinner(currentGame, totalMoves);
                moves.push(currentGame);
                return {moves, nextPlayer, winner, gameEnded};
            });
        }
    }
    calculateGameEnded(totalMoves){
      return totalMoves==9;
    }
    calculateWinner(currentGame, totalMoves){
      if(totalMoves<3){
        return 0;
      }
      let compare = function(arr, x, y, z){
        return arr[x] == arr[y] && arr[x] == arr[z] && arr[x];
      }
      let horizontalCheck = function(){
        return compare(currentGame, 0, 3 ,6) || compare(currentGame, 1, 4, 7) || compare(currentGame, 2, 5, 8);
      }
      let verticalCheck = function(){
        return compare(currentGame, 0, 1 ,2) || compare(currentGame, 3, 4, 5) || compare(currentGame, 6, 7, 8);
      }
      let crossCheck = function(){
        return compare(currentGame, 0, 4 ,8) || compare(currentGame, 2, 4, 6);
      }
      return horizontalCheck() || verticalCheck() || crossCheck();
    }
    render() {
        let message = "";
        if(this.state.winner){
          message = `Winner: ${this.state.winner===1 ? 'O' : 'X'}`;
        }
        else if(this.state.gameEnded){
          message = `Game Over`;
        }
        else{
          message = `Next player: ${this.state.nextPlayer===1 ? 'O' : 'X'}`;
        }
        let moves = this.state.moves;
        let totalMoves = moves.length;
        let currentGame = totalMoves ? moves[totalMoves-1] : [0,0,0,0,0,0,0,0,0];
        return (
            <div id="game">
                <Board currentGame={currentGame} squareClicked={this.boardClicked}/>
                <div id="message">
                  {message}
                </div>
                <MovesList totalMoves={totalMoves}/>
            </div>
        );
    }
}

export default Game;
