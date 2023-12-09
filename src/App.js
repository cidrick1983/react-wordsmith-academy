import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Literature from './pages/Literature';
import Grammar from './pages/Grammar';
import Speeches from './pages/Speeches';
import RenownedWriters from './pages/RenownedWriters';
import Quizzes from './pages/Quizzes';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/speeches" element={<Speeches />} />
          <Route path="/renowned-writers" element={<RenownedWriters />} />
          <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
