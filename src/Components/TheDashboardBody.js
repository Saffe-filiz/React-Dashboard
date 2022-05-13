import TheHeader from './TheHeader';
import TheTinyBarChart from './TheTinyBarChart';
import LineChart from './LineChart';
import TheBarChart from './TheBarChart';



function Dashboard () {
	return (
		<div className="dashboardContainer">
		    <section className="dashboardHeader">
		    	<TheHeader/>
		    	<TheTinyBarChart/>
		    </section>
		    <section className="dashboardSecondDataBox">
		    	<LineChart/>
		    	<LineChart/>
		    	<LineChart/>
		    </section>
		    <section className="dashboardThirdDataBox">
		    	<TheBarChart/>
		    </section>
		</div>
	)
}

export default Dashboard