import '../Assets/Style/style.css';
import TheNavigation from './TheNavigation';
import TheSearch from './TheSearch';
import TheDashboard from './TheDashboardBody';

function App() {
    return (
        <div className="app">
            <TheSearch/>
            <div className="container">
                <TheNavigation/>
                <TheDashboard/>
            </div>
        </div>
    );
}

export default App;