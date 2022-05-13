import TheHeader from './TheHeader';
import TheFirstDataBox from './TheFirstDataBox';
import DataBox from './DataBox';



function Dashboard () {
	return (
		<div className="dashboardContainer">
		    <section className="dashboardHeader">
		    	<TheHeader/>
		    	<TheFirstDataBox/>
		    </section>
		    <section className="dashboardSecondDataBox">
		    	<DataBox/>
		    	<DataBox/>
		    	<DataBox/>
		    </section>
		    <section className="dashboardThirdDataBox">
		    	
		    </section>
		</div>
	)
}

export default Dashboard