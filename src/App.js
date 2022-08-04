import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation'
import Index from './pages/index'
import Breaking from './pages/breaking'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/breaking" element={<Breaking />} />
        </Routes>
    </Router>
  );
}

export default App;
