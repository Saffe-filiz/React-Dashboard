import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';


function TinyBarChart (props) {
	return (
		<div className="tinyBarChartContent">
			<h2>Bar Chart</h2>
			<div className="tinyBarChart">
			   <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={40} data={props.data}>
                        <Bar dataKey="uv" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
			</div>
		</div>
	)
}

export default TinyBarChart