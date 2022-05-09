import Gif from '../Assets/Images/headerGif.gif'

function Header () {
	return(
		<div className="containerHeader">
		    <header>
		        <h1>Welcome to your dashboard!</h1>
		        <p>Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!</p> 	
		    </header>
			<div className="headerGif">
				<img src={Gif}/>
			</div>
		</div>
	)
}

export default Header