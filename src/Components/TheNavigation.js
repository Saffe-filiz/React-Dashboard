import logo from '../Assets/Images/logo.png'

function Navigation () {
	return (
	<div className="navigation">
		<div className="logo">
			<div className="image">
				<img src={logo}/>
			</div>
		</div>
		<nav>
			<ul>
				<li><a href="">Dashboard</a></li>
				<li><a href="">Ordars</a></li>
				<li><a href="">Account</a></li>
				<li><a href="">Setting</a></li>
			</ul>
			<div className="support">
				<h3>Support</h3>
				<a href="">Chat</a>
				<a href="">FAQ</a>
			</div>
		</nav>
	</div>
	)
}

export default Navigation