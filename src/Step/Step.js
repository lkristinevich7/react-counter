import React, { Component } from 'react'

class Step extends Component{

    render (){
        return (
            <div className='input-step'>
            {/* <input ref={(data) => { this._inputStep = data} } type="number" min={1} /> */}
            {/* <input type="number" min={1} /> */}
            <input ref={(data) => { this._inputStep = data} } onChange={this.updateStep} type="number" min={1} />
            </div>
        )
    }
}

export default Step;