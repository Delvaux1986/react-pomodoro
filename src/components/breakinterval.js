import React from 'react';

const BreakInterval = (props) => {
    const decreaseCounter = () => {
        if(props.breakInterval === 1 ){
            return;
        }
        props.decreaseBreak();
    }
    const increaseCounter = () => {
        if(props.breakInterval === 60 ){
            return;
        }
        props.increaseBreak();
    }
    
    
    return (
        <section>
            <h4>break length</h4>
            <section className="interval-container">
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>Down</button>
                    <p>{props.breakInterval}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>Up</button>
            </section>
        </section>
    )
};

export default BreakInterval;