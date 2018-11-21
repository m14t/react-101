import React, { PureComponent } from 'react';
import Dice from './Dice';

interface LuckyEvensProps {
  title: string;
}

interface LuckyEvensState {
  gamesPlayed: number;
  gamesWon: number;
}

class LuckyEvens extends PureComponent<LuckyEvensProps, LuckyEvensState> {
  static defaultProps = {
    title: 'Lucky Evens',
  };

  state = {
    gamesPlayed: 0,
    gamesWon: 0,
  };

  onRoll = (value: number) => {
    const isWinner = value % 2 === 0;
    this.setState((state) => ({
      gamesPlayed: state.gamesPlayed + 1,
      gamesWon: state.gamesWon + (isWinner ? 1 : 0),
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <Dice onRoll={this.onRoll} />

        <div>
          <strong>Games Played:</strong>
          {this.state.gamesPlayed}
        </div>

        <div>
          <strong>Games Won:</strong>
          {this.state.gamesWon}
        </div>
      </div>
    );
  }
}

export default LuckyEvens;
