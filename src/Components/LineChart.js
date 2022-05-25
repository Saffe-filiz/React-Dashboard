import React, { PureComponent } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';



function LineCharts (props) {
	return (
		<div className="lineChartContent">
			<div className="lineChartInfo">TEdddST</div>
			<div className="lineChart">
				<ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={props.data}>
                        <Line type="monotone" dataKey="pv" stroke={props.stroke} strokeWidth={2} dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
			</div>
		</div>
	)
}

export default LineCharts