import { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


function PieCharts (props) {
	return (
		<div className="pieChartContent">
			<h2>Test</h2>
			<div className="pieChart">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart width={800} height={400}>
                    <Pie  data={props.data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value" label>
                        {props.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={props.colors[index % props.colors.length]} />
                        ))}
                    </Pie>
                </PieChart>
                </ResponsiveContainer>
			</div>
		</div>
	)
}

export default PieCharts