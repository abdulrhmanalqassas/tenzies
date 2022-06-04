import React from "react"

export default class Dice extends React.Component{
   
    render(){
        let  style;
      if (this.props.isHeld===!true){
          style = {
            backgroundColor: "#59E391"}
      } 
        

        return (
             
             <div  style={style} className="grid-item" >
                    <h1 className="grid-item-num">{this.props.text}</h1>
                    
                </div>
              
        )
    }
}