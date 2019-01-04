import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTopData } from '../actions'

import TopChart from './TopChart';

class Top extends Component {
    state = {
        metricToDisplay: "Spend",
        allData: [],
        dataToDisplay: [],
        graphFilters: ["EXPOSED", "CONTROL", "UPLIFT", "PCT_UPLIFT"]
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

    renderTopCharts () {
        return this.state.graphFilters.map((item, i) => {
            return <TopChart key={i} data={this.state.dataToDisplay} chart={item}/>
        })
    }



    render() {
        return (
            <div>
                <h2>Top Data</h2>
                <button className="ui button medium" name="Spend" onClick={this.handleMetricToDisplay.bind(this)}>Spend</button>
                <button className="ui button medium" name="Units" onClick={this.handleMetricToDisplay.bind(this)}>Units</button>
                <button className="ui button medium" name="Visits" onClick={this.handleMetricToDisplay.bind(this)}>Visits</button>
                <button className="ui button medium" name="Total_custs" onClick={this.handleMetricToDisplay.bind(this)}>Total_custs</button>
                
                <h3>{this.state.metricToDisplay}</h3>

                {this.state.dataToDisplay.length !== 0 ? this.renderTopCharts() : null}
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