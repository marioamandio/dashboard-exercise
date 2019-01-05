import React from 'react';
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'


const TopChart = (props) => {
    const data = props.data
    if(props.chart === "PCT_UPLIFT") {
        props.data.forEach((item) => {
            item.PCT_UPLIFT *= 100;
        })
    }
    return (
        <div>
            <ResponsiveContainer width="90%" height={400}>
                <BarChart data={data} margin={{top: 50, right: 0, left: 30, bottom: 25}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="PRODUCT" 
                        fontFamily="sans-serif"
                        dy="25"/>
                    <YAxis 
                        interval="preserveStartEnd"
                        padding={{ bottom: 30 }}/>
                    <Tooltip />
                    <Legend 
                        verticalAlign="top"
                        fontSize="30"/>
                    <Bar 
                        dataKey={props.chart} 
                        barSize ={170}
                        fontFamily="sans-serif"
                        fill="#074AF6"
                        />

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TopChart;