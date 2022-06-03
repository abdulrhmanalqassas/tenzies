import React from "react"

export default class Dice extends React.Component{

    render(){
        return (
             
             <div  className="grid-item">
                    <h1 className="grid-item-num">{this.props.text}</h1>
                </div>
              
        )
    }
}