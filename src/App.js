import { Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home/Home';
import CompanyPage from './Pages/CompanyPage/CompanyPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CompanyPage />} />
      </Routes>
    </div>
  );
}

export default App;
