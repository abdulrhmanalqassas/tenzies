import React from "react";

export default class Main extends React.PureComponent{
   
    // const [num,setNum] = React.useState(1);
       state = { dice : [1,2,3,4,5,6,1,2,3,4] };
        dice = this.state.dice.map(elem=><div className="grid-item"><h1 className="grid-item-num">{elem}</h1></div>);
        
       
      render(){
        return(
           <main className="main">
              <div className="grid-container">
                {this.dice}
              </div>
           </main> 
        )
      }
       
   
}