


// konstruktor applkacji

import React, {Component} from 'react'
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import Step from '../Step/Step';



class Counter extends Component{
    constructor (props) {
        super(props);
        this.state = {
          counterValue: 0,
          value: '',
          stepValue: 1
        }
    };



    updateStep = (value) => {

   
    this.setState({stepValue:value})
   


    }

    changeValue = (props) =>{
        this.setState((prevState)=>{
            return({
                counterValue: prevState.counterValue + this.state.stepValue //+ props.initialValue ///jak potrzebujemy poprzednia wartosc to wywolujemy funkcje(return i td)
            })
        })
    }

    resetCounter = (reset) => {
        // debugger
        // console.log(value);
        let initValue = 0

        if (!reset){
            initValue= this.props.initialValue
        }

        this.setState({
            counterValue: initValue /// jak nie potrzebuje poprzedniej wartosci to poprostu wywolujemy wratosc
        })

    }



    render() {
        return(
            <div>
                {/* <input type="number" /> */}
                <div>Propsy={this.props.initialValue}</div>
                <div>counterValue={this.state.counterValue}</div>
                <Step setStepValue={this.updateStep}/>
                <ButtonsPanel 
                changeCounterValue={this.changeValue}
                resetOrReinitCounter={this.resetCounter}/>

            </div>
        )
    }
}



export default Counter;