import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LabelList} from 'recharts'
import React from 'react';


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
                    tickSize={5}
                    dy={5}/>
                <YAxis
                    type="number"
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