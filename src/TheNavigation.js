import './TheNavigation.css'

function navigation () {
	return (
		<div className="navigation">
		<div className="logo">Logo</div>
			<nav>
				<ul>
					<li><a href="">Dashboard</a></li>
					<li><a href="">Ordars</a></li>
					<li><a href="">Account</a></li>
					<li><a href="">Setting</a></li>
				</ul>
				<div className="support">
					<h3>Support</h3>
				    <p>Chat</p>
				    <p>FAQ</p>
				</div>
			</nav>
		</div>
	)
}

export default navigation