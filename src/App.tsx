import React from 'react';
import Board from './components/board/board';
import Stone from './components/stone/stone';

const App: React.FC = () => {
  return (
    <div className="App">
      <Board>
        <Stone color="black" />
        <Stone color="white" />
      </Board>
    </div>
  );
}

export default App;
