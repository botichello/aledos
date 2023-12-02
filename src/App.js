import './App.css';
import Header from './components/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoachingPage from './components/CoachingPage.jsx';
function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/coaching" element={<CoachingPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
