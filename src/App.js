import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoachingPage from './components/CoachingPage.jsx';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/coaching" element={<CoachingPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
