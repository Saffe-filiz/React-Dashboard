import '../Assets/Style/style.css';
import TheSearch from './TheSearch';
import TheDashboard from './TheDashboardBody';

function App() {
    return (
        <div className="app">
            <TheSearch/>
            <div className="container">
                
                <TheDashboard/>
            </div>
        </div>
    );
}

export default App;