import React, { useState } from 'react';
import './App.css';
import InteractiveTitle from './components/InteractiveTitle';
import Cards from './components/Cards';


function App() {
  const [showCards, setShowCards] = useState(false);

  const handleToggleCards = () => {
    setShowCards(!showCards);
  };

  return (
      <div className="App">
        <InteractiveTitle />
        <div className="button-container">
          <button onClick={handleToggleCards}>Temas</button>
        </div>
        <div style={{ marginBottom: '15vh' }}>
          {showCards && <Cards />}
        </div>
      </div>
  );
}

export default App;
