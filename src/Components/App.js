import '../Assets/Style/style.css';
import TheNavigation from './TheNavigation';
import TheSearch from './TheSearch';
import TheDashboard from './TheDashboardBody';

function App() {
    return (
        <div className="app">
            <TheNavigation/>
            <TheSearch/>
            <TheDashboard/>
        </div>
    );
}

export default App;