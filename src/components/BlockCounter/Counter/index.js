import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            isAdd: true
        }
    }

    btnHandler = () => {
        this.setState((state, props) => {
            return {count: stete.isAdd ? state.count + props.step : state.count - props.step}
        })
    }

    render() {
        return (
            <>
                <p>Counter:{this.state.count}</p>
                <p>Step:{this.props.step}</p>
                <button onClick={this.btnHandler}>{this.state.isAdd ? "Add" : "Sub"}</button>
            </>
        );
    }
}

export default Counter;
