import React from "react";
import Dice from "./Dice.js";
import { nanoid } from "nanoid";

export default class Main extends React.PureComponent {
  allNewDice = () => {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      let random = Math.floor(Math.random() * 6 + 1);
      diceArray.push({ value: random, isHeld: false, id: nanoid() });
    }
    return diceArray;
  };

  state = { dice: this.allNewDice() };
  // try = id=>{
  //   this.state.dice.map(
  //     die=>{if (die.id === id )
  //       {die.isHeld = true }
  //       else return die})
  // };
  holdDice = (id) => {
    this.setState((state) => ({
      dice: [
        ...state.dice.map((valu) => {
          if (valu.id === id) {
            return { ...valu, isHeld: true };
          } else return valu;
        }),
      ],
    }));
  };
  curintDice = () => {
    let myarr = this.state.dice.map((value, index) => {
      return (
        <Dice
          key={value.id}
          id={value.id}
          text={value.value}
          isHeld={value.isHeld}
          holdDice={this.holdDice}
        />
      );
    });
    return myarr;
  };
  roll = () => {
    console.log("nice ass");
    this.setState({ dice: this.allNewDice() });
    console.log(this.state.dice);
  };

  render() {
    return (
      <main className="main">
        {console.log("renderd")}
        <div className="grid-container">{this.curintDice()}</div>
        <div onClick={this.roll} className="butt-roll">
          <h2 className="butt-roll-text">Roll</h2>
        </div>
      </main>
    );
  }
}
