import React, { PureComponent } from 'react';
import Dice from './Dice';

interface LuckyEvensProps {
  title: string;
}

class LuckyEvens extends PureComponent<LuckyEvensProps, {}> {
  static defaultProps = {
    title: 'Lucky Evens',
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <Dice />
      </div>
    );
  }
}

export default LuckyEvens;
