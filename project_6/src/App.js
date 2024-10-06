import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import Die from "./Die.js";

export default function App() {
  const [dices, setDices] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const diceNumber = dices[0].value;
    for (const dice of dices)
      if (!dice.isHeld || diceNumber !== dice.value) return;

    console.log("Won");
    setTenzies(true);
  }, [dices]);

  function allNewDice() {
    return Array.from({ length: 10 }, () => generateNewDie());
  }

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  function holdDice(diceId) {
    setDices((oldDices) =>
      oldDices.map((die) => {
        return die.id === diceId ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function rollDice() {
    if (!tenzies) {
      setDices((oldDices) =>
        oldDices.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDices(allNewDice());
    }
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="header" style={{ marginBottom: "5px" }}>
        Tenzies
      </h1>
      <h3 className="header" style={{ marginBottom: "50px" }}>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h3>
      <div className="board">
        {dices.map((dice) => (
          <Die key={dice.id} dice={dice} holdDice={holdDice} />
        ))}
      </div>
      <button onClick={rollDice} className="roll-button">
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
