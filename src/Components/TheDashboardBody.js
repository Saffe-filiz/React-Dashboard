import TheHeader from './TheHeader';
import HeaderChart from './TheHeaderBarChart';
import DataBox from './DataBox';



function Dashboard () {
	return (
		<div className="dashboardContainer">
		    <section className="dashboardHeader">
		    	<TheHeader/>
		    	<HeaderChart/>
		    </section>
		    <section className="dashboardDataBox">
		    	<DataBox/>
		    	<DataBox/>
		    	<DataBox/>
		    </section>
		</div>
	)
}

export default Dashboard