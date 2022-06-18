import { useState } from "react";
import DiceD from "../DiceD/DiceD";

function RngMachine({selectedDice}) {
    const [rolledNumber, setRolledNumber] = useState();
  function Roll() {
    const number = Math.floor(Math.random() * (selectedDice) + 1);
    setRolledNumber(number);
}
  return (
    <>
      <div>Kostka wykleta w losowanie zakleta {selectedDice}</div>
      <DiceD hideD={true} value={rolledNumber} />
      <button onClick={() => Roll()}>Roll</button>
    </>
  );
}
export default RngMachine;
