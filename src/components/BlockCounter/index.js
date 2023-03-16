import React, { Component } from 'react';
import Counter from './Counter';

class BlockCounter extends Component {
    render() {
        return (
            <div>
            <Counter step={1} />
            </div>
        );
    }
}

export default BlockCounter;
