import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTopData } from '../actions'

import TopCharts from './TopCharts';
import './dashboard.css'

class Top extends Component {
    state = {
        metricToDisplay: "Spend",
        allData: [],
        dataToDisplay: []
    }

    componentDidMount () {
        this.props.getTopData()
    }

    componentWillReceiveProps (nextProps) {
        if(this.state.allData.length === 0 ) {
            this.setState(() => {
                return {
                    allData: nextProps.topData
                }
            })
        }
    }

    componentDidUpdate() {
        if(this.state.allData.length > 0 && this.state.dataToDisplay.length === 0) {
            this.handleDataToDisplay()
        }
    }

    handleDataToDisplay(parameter = this.state.metricToDisplay) {
        const dataToDisplay = this.props.topData.filter((item) => {
            return item.METRIC === parameter;
        })

        this.setState(() => {
            return {
                dataToDisplay: dataToDisplay
            }
        })
    }

    handleMetricToDisplay (ev) {
        
        let metricToDisplay = ev.target.name
        this.setState(() => {
            return {
                metricToDisplay
            }
        })
        this.handleDataToDisplay(metricToDisplay)
    }



    render() {
        return (
            <div>
                <h2>Top Data</h2>
                <button className="ui button medium sub_menu" name="Spend" onClick={this.handleMetricToDisplay.bind(this)}>Spend</button>
                <button className="ui button medium sub_menu" name="Units" onClick={this.handleMetricToDisplay.bind(this)}>Units</button>
                <button className="ui button medium sub_menu" name="Visits" onClick={this.handleMetricToDisplay.bind(this)}>Visits</button>
                <button className="ui button medium sub_menu" name="Total_custs" onClick={this.handleMetricToDisplay.bind(this)}>Total_custs</button>

                {this.state.dataToDisplay.length !== 0 ? <TopCharts data={this.state.dataToDisplay} title={this.state.metricToDisplay}/> : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topData: state.topData
    }
}

export default connect(mapStateToProps, {getTopData} )(Top);