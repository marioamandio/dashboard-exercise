import {LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import React from 'react'
  
// //   const data = [
// //     { x: '06-09', y: 2.978 },
// //     { x: '06-10', y: 2.973 },
// //     { x: '06-11', y: 2.964 },
// //     { x: '06-12', y: 2.955 },
// //     { x: '06-13', y: 2.937 },
// //     { x: '06-14', y: 2.919 },
// //     { x: '06-15', y: 2.902 },
// //   ];



// const data = [{
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-08-30",
//     "EXPOSED": 469645,
//     "CONTROL": 466097
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-09-06",
//     "EXPOSED": 451999,
//     "CONTROL": 450690
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-09-13",
//     "EXPOSED": 441084,
//     "CONTROL": 441769
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-09-20",
//     "EXPOSED": 503789,
//     "CONTROL": 497506
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-09-27",
//     "EXPOSED": 499761,
//     "CONTROL": 494754
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-10-04",
//     "EXPOSED": 481153,
//     "CONTROL": 475777
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-10-11",
//     "EXPOSED": 442521,
//     "CONTROL": 442223
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-10-18",
//     "EXPOSED": 435572,
//     "CONTROL": 437795
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-10-25",
//     "EXPOSED": 447407,
//     "CONTROL": 447525
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-11-01",
//     "EXPOSED": 467929,
//     "CONTROL": 475164
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-11-08",
//     "EXPOSED": 452870,
//     "CONTROL": 459433
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-11-15",
//     "EXPOSED": 438876,
//     "CONTROL": 452447
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-11-22",
//     "EXPOSED": 459099,
//     "CONTROL": 440797
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-11-29",
//     "EXPOSED": 472384,
//     "CONTROL": 444788
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-12-06",
//     "EXPOSED": 450652,
//     "CONTROL": 427184
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-12-13",
//     "EXPOSED": 457599,
//     "CONTROL": 451136
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-12-20",
//     "EXPOSED": 387721,
//     "CONTROL": 379558
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2017-12-27",
//     "EXPOSED": 405497,
//     "CONTROL": 396575
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2018-01-03",
//     "EXPOSED": 503183,
//     "CONTROL": 490390
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2018-01-10",
//     "EXPOSED": 452287,
//     "CONTROL": 444120
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2018-01-17",
//     "EXPOSED": 497342,
//     "CONTROL": 487001
//   },
//   {
//     "PRODUCT": "Aisle",
//     "WEEK_COMMENCING": "2018-01-24",
//     "EXPOSED": 478459,
//     "CONTROL": 471113
//   },]
  
  const WeeklyChart = (props) => {
        const data = props.data
        return (
        <div className="padded">
        <h2 className="padded">{props.title}</h2>
        <ResponsiveContainer
          width="90%"
          height={500}
        >
          <LineChart
              data={data}
              margin={{top: 50, right: 0, left: 30, bottom: 25}}>
            <XAxis 
              dataKey="WEEK_COMMENCING"
              fontFamily="sans-serif"
              dy="45"
            />
            <YAxis
              domain={['dataMin', 'dataMax']}
              interval={"preserveStartEnd"}
              padding={{ bottom: 30 }}
            />
            <CartesianGrid 
              vertical={true}
              stroke="#ebf3f0"
            />
            <Tooltip />
            <Legend />
            <Line dataKey="EXPOSED" dot={false} type="monotoneX" stroke="#F63107" strokeWidth={2}/>
            <Line dataKey="CONTROL" dot={false} type="monotoneX" stroke="#074AF6" strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer>
        </div>
      );
    }

  
export default WeeklyChart

//tickSize