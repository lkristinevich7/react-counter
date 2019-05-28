import React, { Component } from 'react'

class ButtonsPanel extends Component{

    resetOrReinitCounter = (reset) => {
        this.props.resetOrReinitCounter(reset);    //komunikacja miedzy dzieckiem a rodzicem

    }

    render (){
        return (
            <div className='buttons-panel'>
            <button onClick={this.props.changeCounterValue}>Add X</button>
            <button onClick={()=>this.resetOrReinitCounter(false)}>Reinit</button>
            <button onClick={()=>this.resetOrReinitCounter(true)}>Reset</button>
            </div>
        )
    }
}

export default ButtonsPanel;