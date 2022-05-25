import React, { PureComponent } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import ArrowUp from '../Assets/Icons/ArrowUp.svg';


function LineCharts (props) {
	return (
		<div className="lineChartContent">
			<div className="lineChartInfo">
			    <span className="lineChartInfoHeader">
			        <p>CHART TITLE</p>
			    	<h4>2,643</h4>
			    </span>
				<span className="chartSituation">
					<img src={ArrowUp}/>
					1.10% Since yesterday
				</span>
			</div>
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