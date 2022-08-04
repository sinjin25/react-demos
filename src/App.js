import './App.css';
import Navigation from './components/navigation'
import Index from './pages/index'
import Breaking from './pages/breaking'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Article from './pages/article';

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/breaking" element={<Breaking />} />
            <Route path="/articles/:id" element={<Article />} />
        </Routes>
    </Router>
  );
}

export default App;
