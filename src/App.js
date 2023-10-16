import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = [
    'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown',
    'cyan', 'magenta', 'teal', 'lime', 'navy', 'gray', 'black', 'white',
  ];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
