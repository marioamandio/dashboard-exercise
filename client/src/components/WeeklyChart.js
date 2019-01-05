import {LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react'
  
  
    const WeeklyChart = (props) => {
        const data = props.data
        return (
            <div className="padded">
            <h2 className="padded">{props.title}</h2>
            <ResponsiveContainer
                width="90%"
                height={500}>
                <LineChart
                    data={data}
                    margin={{top: 50, right: 0, left: 30, bottom: 25}}>
                    <XAxis 
                        dataKey="WEEK_COMMENCING"
                        fontFamily="sans-serif"
                        dy={8}/>
                    <YAxis
                        domain={['dataMin', 'dataMax']}
                        interval={"preserveStartEnd"}
                        padding={{ bottom: 30 }}/>
                    <CartesianGrid 
                        vertical={true}
                        stroke="#ebf3f0"/>
                    <Tooltip />
                    <Legend 
                        verticalAlign="top"/>
                    <Line 
                        dataKey="EXPOSED" 
                        dot={false} 
                        type="monotoneX" 
                        stroke="#F63107" 
                        strokeWidth={2}/>
                    <Line 
                        dataKey="CONTROL" 
                        dot={false} 
                        type="monotoneX" 
                        stroke="#074AF6" 
                        strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
            </div>
      );
    }

  
export default WeeklyChart

//tickSize