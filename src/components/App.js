import React from 'react';
import '../App.css';
import BreakInterval from './breakinterval';
import SessionLength from './sessionlength';
import Timer from './timer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPLay: false
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMin = this.onUpdateTimerMin.bind(this);
    this.onRefreshTimer = this.onRefreshTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }
// INCREASE OR DECREASE TIME OF BREAK
  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1,
      }
    })
  }
  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1,
      }
    })
  }
// Increase or decrease Time of Session work 
  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength : prevState.sessionLength + 1,
        timerMinute : prevState.sessionLength + 1
      }
    })
  }
  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength : prevState.sessionLength - 1,
        timerMinute : prevState.sessionLength - 1
      }
    })
  }
// Update timer minute
  onUpdateTimerMin() {
    this.setState((prevState) => {
      return {
        timerMinute : prevState.timerMinute - 1
      }
    })
  }
  onToggleInterval(isSession) {
    if(isSession){
      this.setState({
        timerMinute : this.state.sessionLength
      })
    }else{
      this.setState({
        timerMinute : this.state.breakLength
      })
    }
  }
  onRefreshTimer(){
    this.setState({
      timerMinute: this.state.sessionLength 
    })
  }
  onPlayStopTimer(isPLay){
    this.setState({
      isPLay : isPLay
    })
  }

  render() {
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <BreakInterval
          isPlay={this.state.isPLay} 
          breakInterval={this.state.breakLength} 
          increaseBreak={this.onIncreaseBreakLength}
          decreaseBreak={this.onDecreaseBreakLength}
        />
        <SessionLength
          isPlay={this.state.isPLay}  
          sessionLength={this.state.sessionLength}
          increaseSession={this.onIncreaseSessionLength}
          decreaseSession={this.onDecreaseSessionLength} 
        />
        <Timer 
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMin}
          toggleInterval={this.onToggleInterval}
          refreshTimer = {this.onRefreshTimer}
          onPlayStopTimer={this.onPlayStopTimer}
        />
      </main>
    );
  }

}

export default App;
