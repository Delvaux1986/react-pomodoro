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
            <button onClick={decreaseSession}>Down</button>
                <p>{props.sessionLength}</p>
            <button onClick={increaseSession}>Up</button>
        </section>
    )
}

export default SessionLength;