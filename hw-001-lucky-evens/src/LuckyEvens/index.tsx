import React, { PureComponent } from 'react';

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
      </div>
    );
  }
}

export default LuckyEvens;
