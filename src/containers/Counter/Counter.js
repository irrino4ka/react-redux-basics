import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.count} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCount} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCount}  />
                <CounterControl label="Add 5" clicked={this.props.onIncrement5}  />
                <CounterControl label="Subtract 23" clicked={this.props.onDecrement5}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.count)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} 
                            onClick={() => this.props.onDeleteResult(result.id)}>
                                {result.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.counter,
        storedResults: state.result.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCount: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCount: () => dispatch({type: actionTypes.DECREMENT}),
        onIncrement5: () => dispatch({type: actionTypes.INCREMENT, value: 5}),
        onDecrement5: () => dispatch({type: actionTypes.DECREMENT, value: 23}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resId: id}),
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);