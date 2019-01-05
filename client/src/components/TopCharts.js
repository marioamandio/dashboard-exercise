import React from 'react';
import ControlExposedChart from "./ControlExposedChart";
import UpliftChart from "./UpliftChart";

const TopCharts = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <ControlExposedChart data={props.data}/>
            <UpliftChart data={props.data}/>
        </div>
    );
};

export default TopCharts;