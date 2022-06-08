import React from "react"

export default class Dice extends React.Component{
   
    render(){
        let  style;
      
          style = {
            backgroundColor: this.props.isHELD? "#59E391" : "#fff"
          }


      return (
             
             <div onClick={()=>{this.props.holdDice(this.props.id)}}  style={style} className="grid-item" >
                    <h1 className="grid-item-num">{this.props.text}</h1>
                    
                </div>
              
        )
    }
}