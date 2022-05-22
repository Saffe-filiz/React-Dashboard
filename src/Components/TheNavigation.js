
import Dashboard from '../Assets/Icons/Dashboard.svg';
import Orders from '../Assets/Icons/Orders.svg';
import Account from '../Assets/Icons/Account.svg';
import Setting from '../Assets/Icons/Setting.svg';
import Chat from '../Assets/Icons/Chat.svg';
import FAQ from '../Assets/Icons/FAQ.svg';

function Navigation () {
	return (
	<div className="navigation">
		<nav>
			<ul>
				<li><img src={Dashboard}/><a href="">Dashboard</a></li>
				<li><img src={Orders}/><a href="">Ordars</a></li>
				<li><img src={Account}/><a href="">Account</a></li>
				<li><img src={Setting}/><a href="">Setting</a></li>
			</ul>
			<div className="support">
				<h3>Support</h3>
				<a href=""><img src={Chat}/> Chat</a>
				<a href=""><img src={FAQ}/> FAQ</a>
			</div>
		</nav>
	</div>
	)
}

export default Navigation