import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="" element={<Dashboard />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App;