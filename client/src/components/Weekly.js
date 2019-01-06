import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getWeeklyData } from '../actions';

import WeeklyChart from './WeeklyChart';
import './dashboard.css'

class Weekly extends Component {
    state = {
        sectionToDisplay: "Aisle",
        dataToDisplay: []
    }

    componentDidMount() {
        this.props.getWeeklyData()
    }

    componentDidUpdate() {
        if(this.props.weeklyData.length > 0 && this.state.dataToDisplay.length === 0) {
            this.handleDataToDisplay()
        }
    }


    handleDataToDisplay(parameter = this.state.sectionToDisplay) {
        const dataToDisplay = this.props.weeklyData.filter((item) => {
            return item.PRODUCT === parameter;
        })

        this.setState(() => {
            return {
                dataToDisplay
            }
        })
    }

    handleSectionToDisplay (ev) {
        
        let sectionToDisplay = ev.target.name
        this.setState(() => {
            return {
                sectionToDisplay: sectionToDisplay
            }
        })
        this.handleDataToDisplay(sectionToDisplay)
    }

    render() {
        return (
            <div>
                <h2 className="ui very relaxed">weekly Data</h2>
                <button className="ui button medium sub_menu" name="Aisle" onClick={this.handleSectionToDisplay.bind(this)}>Aisle</button>
                <button className="ui button medium sub_menu" name="Brand" onClick={this.handleSectionToDisplay.bind(this)}>Brand</button>
                <button className="ui button medium sub_menu" name="Offer" onClick={this.handleSectionToDisplay.bind(this)}>Offer</button>
                {this.state.dataToDisplay.length > 0 && <WeeklyChart title={this.state.sectionToDisplay} data={this.state.dataToDisplay}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        weeklyData: state.weeklyData
    }
}

export default connect(mapStateToProps, { getWeeklyData })(Weekly);