import React from 'react';

const SessionLength = (props) => {
    const decreaseSession = () => {
        if(props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }
    
    
    
    const increaseSession = () => {
        if(props.sessionLength === 120) {
            return;
        }
        props.increaseSession();
    }
    

    return (
        <section>
            <h4 class="mb-3">Session length</h4>
            <section class="d-flex justify-content-center">
                <button class="mr-5" disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseSession}>Down</button>
                    <p>{props.sessionLength}</p>
                <button class="ml-5" disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseSession}>Up</button>
            </section>
        </section>    
    )
}

export default SessionLength;