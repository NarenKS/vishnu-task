import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
  AreaChart, Area,
} from 'recharts';

const data = [
  {
    name: '20.Mar', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '21.Mar', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '22.Mar', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: '23.Mar', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '24.Mar', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '25.Mar', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '26.Mar', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nskpgcrz/';

  render() {
    return (
      <div>
       
        <p> ZOOM MONTH YEAR  ALL </p>
        <LineChart
          width={950}
          height={400}
          data={data}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          <Brush />
        </LineChart>
        
      </div>
    );
  }
}



