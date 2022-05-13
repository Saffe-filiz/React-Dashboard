import TheHeader from './TheHeader';
import TheTinyBarChart from './TheTinyBarChart';
import LineChart from './LineChart';
import TheBarChart from './TheBarChart';
import ThePieChart from './ThePieChart';



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
		    	<ThePieChart/>
		    </section>
		</div>
	)
}

export default Dashboard