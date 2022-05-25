import { PureComponent, useState } from 'react';
import { BarChart, Bar, CartesianGrid, ResponsiveContainer } from 'recharts';



function BarCharts (props) {
	const [darkModeBarColor, setDarkModeBarColor] = useState(['#8884d8', '#82ca9d']);
	
	return (
		<div className="barChartContent">
			<h2>Title</h2>
			<div className="barChart">
			    <ResponsiveContainer width="100%" height="100%">
                    <BarChart  width={500} height={300} data={props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="pv" fill={darkModeBarColor[0]} />
                        <Bar dataKey="uv" fill={darkModeBarColor[1]} />
                    </BarChart>
               </ResponsiveContainer>
			</div>
		</div>
	)
}

export default BarCharts