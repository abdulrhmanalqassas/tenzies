import React from "react";
import Dice from "./Dice.js"
export default class Main extends React.PureComponent{
     
    allNewDice = ()=>{
      let diceArray=[]
      for (let i=0 ; i<10 ;i++){
        let random = Math.floor((Math.random() * 6)+1);
        diceArray.push(random)
      } 
      return(diceArray)
    }
    
      state = {dice : this.allNewDice()}
      curintDice=()=>{
        let myarr = this.state.dice.map(
          (value,index)=>{
            return(
              <Dice key={index} text ={value} />
            ) 
          }
        )
        return (myarr)
      }
      roll = () =>{
        console.log("nice ass")
        this.setState({dice : this.allNewDice()})
        console.log(this.state.dice)
       
      }  ;
      
      render(){
        
        return(
          
           <main className="main">
             {console.log("renderd")}
             <div  className="grid-container" >
             { this.curintDice()}
             </div>
             <div onClick={this.roll} className="butt-roll">Roll the dice</div>
           </main> 
        )
      }
       
   
}