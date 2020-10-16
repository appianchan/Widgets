import React from 'react';

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        state = {
            time: "new Date()",
        }
        this.tick = this.tick.bind(this);
    }

    tick(){

    }
    render(){
        return (
          <div>
            <h1>Clock</h1>
            {/* <div>{this.state.time}</div> */}
          </div>
        );
    }
}