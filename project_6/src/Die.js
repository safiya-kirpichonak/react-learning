import React from "react";

export default function Die(props) {
  return (
    <div
      onClick={() => props.holdDice(props.dice.id)}
      className={props.dice.isHeld ? "die die--selected" : "die"}
    >
      {props.dice.value}
    </div>
  );
}
