import React, { PureComponent } from 'react';

interface DiceProps {
  sides: number;
  onRoll?: (value: number) => void;
}

interface DiceState {
  value?: number;
}

class Dice extends PureComponent<DiceProps, DiceState> {
  static defaultProps = {
    sides: 6,
  };

  state = {
    value: undefined,
  };

  roll = () => {
    const value = Math.ceil(Math.random() * this.props.sides);

    this.setState({
      value,
    });

    if (this.props.onRoll) {
      this.props.onRoll(value);
    }
  };

  render() {
    return (
      <div>
        Dice Value: {this.state.value || 'x'}
        <br />
        <button onClick={this.roll}>Roll!</button>
      </div>
    );
  }
}

export default Dice;
