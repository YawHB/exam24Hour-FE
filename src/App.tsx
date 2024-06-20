import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageLayout from './components/containers/PageLayout';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import AthleteDetailsPage from './pages/AthleteDetailsPage';
import AthletesPage from './pages/AthletesPage';
import DisciplinesPage from './pages/DisciplinesPage';
import ResultsPage from './pages/ResultsPage';

function App() {
    return (
        <>
            <Nav />
            <PageLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/athlete-details" element={<AthleteDetailsPage />} />
                    <Route path="/athletes" element={<AthletesPage />} />
                    <Route path="/disciplines" element={<DisciplinesPage />} />
                    <Route path="/results" element={<ResultsPage />} />
                </Routes>
            </PageLayout>
        </>
    );
}

export default App;
