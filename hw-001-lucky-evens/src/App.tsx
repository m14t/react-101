import React from 'react';
import LuckyEvens from './LuckyEvens';

function App() {
  return (
    <div className="app">
      <LuckyEvens />

      <LuckyEvens
        title="Lucky Evens - 100"
        sides={100}
      />
    </div>
  );
}

export default App;
