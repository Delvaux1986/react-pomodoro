import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession : true,
            timerSeconde : 0,
            invervalId: 0
        }
        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.refresh = this.refresh.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    playTimer(){
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId : intervalId
        })
    }

    decreaseTimer(){
        switch(this.state.timerSeconde) {
            case 0:
                if(this.props.timerMinute === 0 ) {
                    if(this.state.isSession) {
                        this.setState({
                            isSession: false
                        });
                        this.props.toggleInterval(this.state.isSession);
                    }else{
                        this.setState({
                            isSession : true
                        });
                        this.props.toggleInterval(this.state.isSession);
                    }
                }else{
                    this.props.updateTimerMinute();
                    this.setState({
                        timerSeconde : 59
                })
                }
                
                break;
            default:
                this.setState((prevState) => {
                    return {
                    timerSeconde : prevState.timerSeconde - 1
                }
                })
                break;
        }
    }



    stopTimer(){
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }
    refresh(){
        this.stopTimer();
        this.props.onPlayStopTimer(false);
        this.props.refreshTimer();
        this.setState({
            timerSeconde : 0,
            isSession : true
        })
    }
   

    render() {
        return (
            <section>
                <section class="text-center mb-5">
                    <h4 class="mb-3">{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span>{this.props.timerMinute}</span>
                    <span>:</span>
                    <span>{this.state.timerSeconde === 0
                    ? "00" 
                    : this.state.timerSeconde < 10
                    ? "0" + this.state.timerSeconde
                    : this.state.timerSeconde}</span>
                </section>
                <section class="text-center mb-5">
                    <button class="mr-2" onClick={this.playTimer} class="">Play</button>
                    <button class="mr-2 ml-2" onClick={this.stopTimer}>Stop</button>
                    <button class="ml-2" onClick={this.refresh}>Refresh</button>
                </section>
            </section>
        );
    }
}

export default Timer;