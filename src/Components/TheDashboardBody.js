import TheHeader from './TheHeader'
import HeaderChart from './TheHeaderBarChart'



function Dashboard () {
	return (
		<div className="dashboardContainer">
		    <div className="dashboardHeader">
		    	<TheHeader/>
		    	<HeaderChart/>
		    </div>
		</div>
	)
}

export default Dashboard