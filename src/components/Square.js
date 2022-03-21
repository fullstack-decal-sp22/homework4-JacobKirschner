import React from "react";
import './styles/Square.css';

function Square() {
    return (
        <button className="square">
            {this.props.value}
        </button>
    )
}

export default Square;