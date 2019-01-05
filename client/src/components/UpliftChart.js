import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LabelList, Label} from 'recharts'
import React from 'react';


const CustomTooltip = (props) => {
    if(props.active) {
        console.log(props)
    }
    return (
        <div><span>Uplift:</span>{props.data}</div>
    )
}

const SecondBar = (props) => {
    const { data } = props
    
    data.forEach((item) => {
        if(item.PCT_UPLIFT < 1) {
            item.PCT_UPLIFT *= 100; 
        }
    })

    return (
        <ResponsiveContainer width="95%" height={400}>
            <BarChart data={data} margin={{top: 30, right: 20, left: 30, bottom: 0}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="PRODUCT" 
                    fontFamily="sans-serif"
                    tickSize
                    dy="25"/>
                <YAxis
                    type="number" domain={['dataMin', 'dataMax']}
                    unit="%">
                </YAxis>
                <Tooltip />
                <Legend 
                    verticalAlign="top"/>
                <Bar 
                    dataKey="PCT_UPLIFT"
                    stackId="a" 
                    fill="#008e07"
                    name="uplift %">
                    <LabelList dataKey="UPLIFT" position="top"/>
                </Bar>

            </BarChart>
        </ResponsiveContainer>
    )
}

export default SecondBar;