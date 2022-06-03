import React from "react"

export default class Dice extends React.Component{
   
    render(){
        return (
             
             <div  className="grid-item" onClick={}>
                    <h1 className="grid-item-num">{this.props.text}</h1>
                    {!this.props.isHeld && <>1</>}
                </div>
              
        )
    }
}