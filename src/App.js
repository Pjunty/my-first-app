
import { useState } from 'react';
import './App.css';
import DiceD from './components/DiceD/DiceD';
import RngMachine from './components/RngMachine/RngMachine';

function App() {
  const [selectedDice, setSelectedDice] = useState();
  return (
    <div className="App">
      <DiceD value={6} setSelectedDice={setSelectedDice} />
      <DiceD value={20} setSelectedDice={setSelectedDice} />
      <DiceD value={60} setSelectedDice={setSelectedDice} />
      <DiceD value={90} setSelectedDice={setSelectedDice} />
      <RngMachine selectedDice={selectedDice} />
    </div>
  );
}

export default App;
