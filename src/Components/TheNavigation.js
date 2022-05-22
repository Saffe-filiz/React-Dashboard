import { ReactComponent as Dashboard} from '../Assets/Icons/Dashboard.svg';
import { ReactComponent as Orders} from '../Assets/Icons/Orders.svg';
import { ReactComponent as Account} from  '../Assets/Icons/Account.svg';
import { ReactComponent as Setting} from '../Assets/Icons/Setting.svg';
import { ReactComponent as Chat} from  '../Assets/Icons/Chat.svg';
import { ReactComponent as FAQ} from  '../Assets/Icons/FAQ.svg';

function Navigation () {
	return (
	<div className="navigation">
		<nav>
			<ul>
				<li><Dashboard/> <a href="">Dashboard</a></li>
				<li><Orders/><a href="">Ordars</a></li>
				<li><Account/><a href="">Account</a></li>
				<li><Setting/><a href="">Setting</a></li>
			</ul>
			<div className="support">
				<h3>Support</h3>
				<ul>
					<li><Chat/> <a href="">Chat</a></li>
				    <li><FAQ/><a href="">FAQ</a></li>
				</ul>
			</div>
		</nav>
	</div>
	)
}

export default Navigation