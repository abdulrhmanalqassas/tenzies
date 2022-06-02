import React from "react";

export default class Main extends React.PureComponent{
   
    // const [num,setNum] = React.useState(1);
       state = { num: 1 };
      add=()=>this.setState(state => {return {num : state.num+1}})
    
      render(){
        return(
           <div>
              <h1 className="main"> <button onClick={this.add}>add </button>  {this.state.num} </h1>
           </div> 
        )
      }
       
   
}