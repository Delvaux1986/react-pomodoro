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
        <section class="mb-5">
            <h4 class="mb-5">break length</h4>
            <section class="d-flex justify-content-center">
                <button class="mr-5" disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>Down</button>
                    <p>{props.breakInterval}</p>
                <button class="ml-5"disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>Up</button>
            </section>
        </section>
    )
};

export default BreakInterval;