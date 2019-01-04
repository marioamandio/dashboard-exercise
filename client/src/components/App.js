import React, { Component } from 'react';
import Top from './Top'
import Weekly from './Weekly'

class App extends Component {
    state = {
        display: 'weekly'
    }

    dataToDisplay = () => {
        if(this.state.display === "top" ) {
            return < Top/>
        } else if(this.state.display === "weekly") {
            return <Weekly />
        }
    }

    onClickHandler = (ev) => {
        let display = ev.target.name
        this.setState(() => {
            return {
                display
            }
        })
    }


    render() {
        return (
            <div className="ui center aligned container">
                <h1>Sainsbury's recruitment</h1>
                <button onClick={this.onClickHandler} name="weekly" className="ui button huge">Weekly</button>
                <button onClick={this.onClickHandler} name="top" className="ui button huge">top</button>
                
                {this.dataToDisplay()}
            </div>
        );
    }
}

export default App;