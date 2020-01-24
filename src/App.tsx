import React from 'react';
import Stone from './components/stone/stone';

const App: React.FC = () => {
  return (
    <div className="App">
      <Stone color="black" />
      <Stone color="white" />
    </div>
  );
}

export default App;
