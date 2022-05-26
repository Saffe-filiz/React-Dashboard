import TheHeader from './TheHeader';
import TheTinyBarChart from './TheTinyBarChart';
import LineChart from './LineChart';
import TheBarChart from './TheBarChart';
import ThePieChart from './ThePieChart';


const lineChartData = [
	[
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 2800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 1908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 9800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },],[
  {
    name: 'Page A',
    uv: 4000,
    pv: 1400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 6398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },],[
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },]]

const pieChartData = {
    data: [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 },
        ],
    colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
}

const tinyBarChart = [
  {
    name: 'Page A',
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 6398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 1300,
    amt: 2100,
  },
];



function Dashboard () {
	return (
		<div className="dashboardContainer">
		    <section className="dashboardHeader">
		    	<TheHeader/>
		      <TheTinyBarChart data={tinyBarChart}/>
		    </section>
		    <section className="dashboardSecondDataBox">
                <LineChart data={lineChartData[0]} stroke="#FF7777"/>
                <LineChart data={lineChartData[1]} stroke="#FFDF90"/>
                <LineChart data={lineChartData[2]} stroke="#06AA8D"/>
            </section>
            <section className="dashboardThirdDataBox">
                <TheBarChart data={tinyBarChart}/>
                <ThePieChart data={pieChartData.data} colors={pieChartData.colors}/>
            </section>
		</div>
	)
}

export default Dashboard