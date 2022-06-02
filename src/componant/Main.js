import React from "react";

export default class Main extends React.PureComponent{
   
    // const [num,setNum] = React.useState(1);
       state = { dice : [1,2,3,4,5,1,2,3,4] };
        dice = this.state.dice.map(elem=><div className="grid-item">{elem}</div>);
        
       
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