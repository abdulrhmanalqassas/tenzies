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

  componentDidUpdate(prevProps, prevState) {
    if(prevState.tenzies===false){
    console.log('Prev state', prevState.tenzies); // Before update
    console.log('New state', this.state.tenzies); // After update 
  }
  }
  state = { 
    dice: this.allNewDice(),
    tenzies: false
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

  holdDice = (id) => {
    this.setState((state) => ({
      dice: [
        ...state.dice.map((valu) => {
          if (valu.id === id) {
            return { ...valu, isHeld: !valu.isHeld };
          } else return valu;
        }),
      ],
    }));
  };

  roll = () => {
    this.setState((state)=>({
      dice : [...state.dice.map((die)=>{
        if(die.isHeld){
          return die
        }else {
          let random = Math.floor(Math.random() * 6 + 1);
          return({ value: random, isHeld: false, id: nanoid() })
        }
      })]
    
    }));
   
  };

  render() {
    return (
      <main className="main">
        <h1 className="title">Tenzies</h1>
            <p className="instructions">
              Roll until all dice are the same. 
              Click each die to freeze it at its current value between rolls.
            </p>
        <div className="grid-container">{this.curintDice()}</div>
        <div onClick={this.roll} className="butt-roll">
          <h2 className="butt-roll-text">Roll</h2>
        </div>
      </main>
    );
  }
}
